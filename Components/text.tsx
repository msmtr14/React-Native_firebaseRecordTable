import React, {FunctionComponent} from 'react';
import {Text as RNText, TextProps, TextStyle} from 'react-native';
import {styles} from './styles';

interface RNTextProps {
  txt?: string | number;
  style?: TextStyle;
  numberOfLines?: number;
  rest?: TextProps;
}

const Text: FunctionComponent<RNTextProps> = ({
  txt,
  style,
  numberOfLines,
  children,
  rest,
}) => {
  return (
    <RNText
      style={{...styles.textContainer, ...style}}
      numberOfLines={numberOfLines || 1000}
      {...rest}>
      {txt || children || ''}
    </RNText>
  );
};

export default Text;
