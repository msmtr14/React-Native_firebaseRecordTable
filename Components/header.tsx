import * as React from 'react';
import {View, ViewStyle} from 'react-native';
import {styles} from './styles';
import {withNavigation} from 'react-navigation';
import IoniconIcon from 'react-native-vector-icons/Ionicons';
import Text from './text';

IoniconIcon.loadFont();
interface HeaderProps {
  navigation?: any;
  title?: string;
  nonBack?: boolean;
  iconStyle?: ViewStyle;
}
const Header: React.FunctionComponent<HeaderProps> = ({
  navigation,
  iconStyle,
  title,
  nonBack,
}) => {
  return (
    <View style={{...styles.headerContainer}}>
      {!nonBack && (
        <IoniconIcon
          name="ios-arrow-round-back"
          size={44}
          style={{...styles.headerIcon, ...iconStyle}}
          onPress={() => navigation.goBack()}
        />
      )}
      <Text style={{...styles.headerTitle}}>{title || ''}</Text>
    </View>
  );
};

export default withNavigation(Header);
