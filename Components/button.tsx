import React, {FunctionComponent} from 'react';
import {TouchableOpacity, TextStyle, ViewStyle} from 'react-native';
import {styles} from './styles';
import Text from './text';

interface ButtonPropsConfig {
  title?: string;
  onPress?: any;
  txtStyles?: TextStyle;
  btnStyle?: ViewStyle;
}

const Button: FunctionComponent<ButtonPropsConfig> = ({
  title,
  txtStyles,
  btnStyle,
  ...rest
}) => {
  return (
    <TouchableOpacity style={{...styles.btnContainer, ...btnStyle}} {...rest}>
      <Text style={{...styles.btnTxtStyle, ...txtStyles}}>
        {title || 'Button'}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
