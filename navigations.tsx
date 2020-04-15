import {createStackNavigator, createAppContainer} from 'react-navigation';
import * as SCREENS from './screens';

const Navigator = createStackNavigator(
  {
    HomeScreen: SCREENS.HomeScreen,
    UserListScreen: SCREENS.UserListScreen,
    AddUserScreen: SCREENS.AddUserScreen,
    UserDetailScreen: SCREENS.UserDetailScreen,
  },
  {
    initialRouteName: 'HomeScreen',
    headerMode: 'none',
  },
);

export const AppContainer = createAppContainer(Navigator);
