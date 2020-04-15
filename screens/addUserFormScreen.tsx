/* eslint-disable react-native/no-inline-styles */
import React, {PureComponent} from 'react';
import Screen from '../Components/screen';
import {View, Alert, Image} from 'react-native';
import Text from '../Components/text';
import TextInput from '../Components/textInput';
import {styles} from './styles';
import {ValidateEmail} from '../utils/validations';
import Button from '../Components/button';
import {connect} from 'react-redux';
import {userDataInterface} from '../utils/interfaces';
import {addNewCustomer, getAddress} from '../redux/actions/customerActions';
import Geolocation from '@react-native-community/geolocation';
import ImagePicker from 'react-native-image-picker';
import {ImagePickerOptions} from '../utils/imagePicker';
import firebaseDB from 'firebase';
import {fireBaseStoragePath} from '../redux/config';

interface AddUserScreenPropsConfig {
  dispatch?: any;
}

export class AddUserScreen extends PureComponent<AddUserScreenPropsConfig> {
  state: any = {
    id: 0,
    name: '',
    email: '',
    phone: '',
    address: '',
    profilePhoto: '',
    isEmailValid: false,
    longitude: 0,
    latitude: 0,
  };

  _onChangeEmail = (email: string) => {
    this.setState({
      email,
      isEmailValid: ValidateEmail(email),
    });
  };

  componentDidMount() {
    Geolocation.getCurrentPosition((info) => {
      this.setState({
        longitude: info.coords.longitude,
        latitude: info.coords.latitude,
      });

      this.props
        .dispatch(
          getAddress({
            lat: info.coords.latitude,
            lng: info.coords.longitude,
          }),
        )
        .then((res: any) => {
          if (res.payload.status === 'OK') {
            const address = res.payload.results[0].formatted_address;
            this.setState({address});
          }
        });
    });
  }

  _performAddCustomer = () => {
    const {
      name,
      email,
      phone,
      address,
      profilePhoto,
      isEmailValid,
      longitude,
      latitude,
    } = this.state;
    if (isEmailValid) {
      if (phone.length === 10) {
        if (name !== '') {
          const data: userDataInterface = {
            name,
            email,
            phone,
            address,
            profilePhoto,
            longitude,
            latitude,
          };
          this.props.dispatch(addNewCustomer(data)).then(() => {
            this.setState(
              {
                name: '',
                email: '',
                phone: '',
                address: '',
                profilePhoto: '',
                isEmailValid: false,
              },
              () => Alert.alert('User Added Successfully!'),
            );
          });
        } else {
          Alert.alert('Name is required');
        }
      } else {
        Alert.alert('Phone must be of length 10');
      }
    } else {
      Alert.alert('Invalid Email!');
    }
  };

  uriToBlob = (uri: any) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function () {
        reject(new Error('uriToBlob failed'));
      };
      xhr.responseType = 'blob';
      xhr.open('GET', uri, true);
      xhr.send(null);
    });
  };

  uploadToFirebase = (blob: any, fileName?: string) => {
    return new Promise((resolve, reject) => {
      var storageRef = firebaseDB.storage().ref();
      storageRef
        .child(`uploads/${fileName}`)
        .put(blob, {
          contentType: 'image/jpeg',
        })
        .then((snapshot) => {
          blob.close();
          resolve(snapshot);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  handleOnPress = () => {
    ImagePicker.showImagePicker(ImagePickerOptions, (res) => {
      const {uri, fileName} = res;
      const name = fileName != null ? fileName : `${new Date().getTime()}.jpg`;
      this.uriToBlob(uri).then((blob) =>
        this.uploadToFirebase(blob, name).then((response: any) => {
          if (response.state === 'success') {
            this.setState({profilePhoto: response.metadata.name});
          } else {
            Alert.alert('Profile Photo not uploaded!');
          }
        }),
      );
    });
  };

  render() {
    const {
      name,
      email,
      phone,
      address,
      profilePhoto,
      isEmailValid,
    } = this.state;
    return (
      <Screen headerTitle={'Add New User'}>
        <View style={{...styles.formContainer}}>
          <View style={{...styles.formFieldView}}>
            <Text>Name: </Text>
            <TextInput
              onChangeText={(text: string) => this.setState({name: text})}
              value={name}
            />
          </View>
          <View style={{...styles.formFieldView}}>
            <Text>Email: </Text>
            <TextInput
              onChangeText={(text: string) => this._onChangeEmail(text)}
              value={email}
              keyboardType={'email-address'}
            />
            {email !== '' && !isEmailValid && (
              <Text style={{...styles.errorEmail}}>Invalid Email</Text>
            )}
          </View>
          <View style={{...styles.formFieldView}}>
            <Text>Phone: </Text>
            <TextInput
              onlyNumber
              maxLength={10}
              onChangeText={(text: string) => this.setState({phone: text})}
              value={phone}
              keyboardType={'phone-pad'}
            />
          </View>
          <View style={{...styles.formFieldView}}>
            <Text>Address: </Text>
            <TextInput nonEditable value={address} multiline />
          </View>
          <View style={{...styles.formFieldView}}>
            <Text>Upload Photo: </Text>
            {profilePhoto !== '' ? (
              <Image
                source={{
                  uri: `${fireBaseStoragePath}/uploads%2F${profilePhoto}?alt=media`,
                }}
                style={{...styles.imgStyles}}
              />
            ) : (
              <Button
                title={'Click here upload profile photo'}
                btnStyle={{...styles.uploadBtn}}
                txtStyles={{color: '#777'}}
                onPress={() => this.handleOnPress()}
              />
            )}
            {profilePhoto !== '' && (
              <Button
                title={'change photo'}
                btnStyle={{...styles.uploadBtnAlt}}
                txtStyles={{color: '#777'}}
                onPress={() => this.handleOnPress()}
              />
            )}
          </View>
        </View>
        <Button
          title={'Submit'}
          btnStyle={{...styles.submitBtn}}
          onPress={() => this._performAddCustomer()}
        />
      </Screen>
    );
  }
}

function mapStateToProps(state: any) {
  return {state};
}

export default connect(mapStateToProps)(AddUserScreen);
