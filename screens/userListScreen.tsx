import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {getCustomers} from '../redux/actions/customerActions';
import Screen from '../Components/screen';
import Text from '../Components/text';
import {styles} from './styles';
import Loader from '../Components/loader';
import {NavigationScreenProps} from 'react-navigation';

interface UserListScreenProps extends NavigationScreenProps {
  dispatch?: any;
  customers?: any;
}

class UserListScreen extends Component<UserListScreenProps> {
  componentDidMount() {
    this.props.dispatch(getCustomers());
  }

  render() {
    return (
      <Screen headerTitle={'User List Screen'}>
        {this.props.customers ? (
          this.props.customers.map((user: any) => (
            <TouchableOpacity
              key={user.id}
              style={{...styles.listCard}}
              onPress={() =>
                this.props.navigation.navigate('UserDetailScreen', {data: user})
              }>
              <Text style={{...styles.nameTxt}}>{user.name}</Text>
            </TouchableOpacity>
          ))
        ) : (
          <Loader />
        )}
      </Screen>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    customers: state.customerReducer.customers,
  };
}

export default connect(mapStateToProps)(UserListScreen);
