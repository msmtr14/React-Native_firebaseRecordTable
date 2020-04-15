/* eslint-disable react-native/no-inline-styles */
import React, {PureComponent} from 'react';
import {View, Image, Linking} from 'react-native';
import Screen from '../Components/screen';
import Text from '../Components/text';
import {styles} from './styles';
import {NavigationScreenProps} from 'react-navigation';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {fireBaseStoragePath} from '../redux/config';
import Button from '../Components/button';
import {connect} from 'react-redux';
import {deleteCustomer} from '../redux/actions/customerActions';

EntypoIcon.loadFont();
interface UserDetailScreenProps extends NavigationScreenProps {
  dispatch?: any;
}
export class UserDetailScreen extends PureComponent<UserDetailScreenProps> {
  _performDelete = (id: string | number) => {
    this.props
      .dispatch(deleteCustomer(id))
      .then(() => this.props.navigation.goBack());
  };

  render() {
    const data = this.props.navigation.getParam('data', false);
    const uri = data
      ? `${fireBaseStoragePath}/uploads%2F${data.profilePhoto}?alt=media`
      : '';

    return (
      <Screen headerTitle={'User Detail Screen'}>
        {data && (
          <View style={{flex: 1}}>
            <Image
              style={{...styles.detailImg}}
              source={{
                uri,
              }}
            />
            <View style={{...styles.detailBody}}>
              <View style={{...styles.detailTitle}}>
                <View style={{...styles.detailLeftView}}>
                  <Text style={{...styles.detailLeftTxt}}>Name :</Text>
                </View>
                <View style={{...styles.detailRightView}}>
                  <Text numberOfLines={1} style={{...styles.detailRightTxt}}>
                    {data.name}
                  </Text>
                </View>
              </View>
              <View style={{...styles.detailTitle}}>
                <View style={{...styles.detailLeftView}}>
                  <Text style={{...styles.detailLeftTxt}}>Email :</Text>
                </View>
                <View style={{...styles.detailRightView}}>
                  <Text numberOfLines={1} style={{...styles.detailRightTxt}}>
                    {data.email}
                  </Text>
                </View>
              </View>

              <View style={{...styles.detailTitle}}>
                <View style={{...styles.detailLeftView}}>
                  <Text style={{...styles.detailLeftTxt}}>Phone :</Text>
                </View>
                <View style={{...styles.detailRightView}}>
                  <Text numberOfLines={1} style={{...styles.detailRightTxt}}>
                    {data.phone}
                  </Text>
                </View>
              </View>

              <View style={{...styles.detailTitle}}>
                <View style={{...styles.detailLeftView}}>
                  <Text style={{...styles.detailLeftTxt}}>Address :</Text>
                </View>
                <View
                  style={{
                    ...styles.detailRightView,
                    minHeight: 70,
                  }}>
                  <Text style={{...styles.detailRightTxt}}>{data.address}</Text>
                  <EntypoIcon
                    name={'location'}
                    size={23}
                    style={{marginTop: 10}}
                    onPress={() =>
                      Linking.openURL(
                        `https://www.google.com/maps/search/?api=1&query=${data.latitude},${data.longitude}`,
                      )
                    }
                  />
                </View>
              </View>
              <Button
                btnStyle={{
                  backgroundColor: 'red',
                  width: '45%',
                  marginTop: 100,
                  alignSelf: 'center',
                }}
                title={'Delete'}
                onPress={() => this._performDelete(data.id)}
              />
            </View>
          </View>
        )}
      </Screen>
    );
  }
}

function mapStateToProps(state: any) {
  return state;
}

export default connect(mapStateToProps)(UserDetailScreen);
