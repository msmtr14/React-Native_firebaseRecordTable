import React, {PureComponent} from 'react';
import Screen from '../Components/screen';
import {View} from 'react-native';
import {FULL, CENTER} from '../Components/styles';
import {styles} from './styles';
import Button from '../Components/button';
import {NavigationScreenProps} from 'react-navigation';

interface btnGroupConfig {
  title: string;
  navTo: string;
}

interface HomeScreenConfigProps extends NavigationScreenProps {}

export class HomeScreen extends PureComponent<HomeScreenConfigProps> {
  render() {
    const btnGroup: btnGroupConfig[] = [
      {title: 'Add New User', navTo: 'AddUserScreen'},
      {title: 'User List', navTo: 'UserListScreen'},
    ];
    const {navigation} = this.props;
    return (
      <Screen preset={'fixed'} hideHeaderBack headerTitle={'Home Screen'}>
        <View style={{...FULL, ...CENTER, ...styles.homeScreenContainer}}>
          {btnGroup.map((btn: btnGroupConfig, i: number) => (
            <Button
              key={i}
              title={btn.title}
              onPress={() => navigation.navigate(btn.navTo)}
            />
          ))}
        </View>
      </Screen>
    );
  }
}

export default HomeScreen;
