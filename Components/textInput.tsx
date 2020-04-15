import React, {FunctionComponent} from 'react';
import {
  TextInput as RNTextInput,
  TextInputProps,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {styles} from './styles';

interface RNTextProps {
  value?: string | number;
  style?: TextStyle & ViewStyle;
  onChangeText?: (text: string) => void;
  autoCapitalize?: 'none' | 'characters';
  keyboardType?:
    | 'numeric'
    | 'number-pad'
    | 'email-address'
    | 'name-phone-pad'
    | 'numbers-and-punctuation'
    | 'phone-pad'
    | 'default';
  maxLength?: number;
  multiline?: boolean;
  nonEditable?: boolean;
  onlyNumber?: boolean;
  rest?: TextInputProps;
}

const TextInput: FunctionComponent<RNTextProps> = ({
  value,
  style,
  onChangeText,
  keyboardType,
  maxLength,
  nonEditable,
  onlyNumber,
  autoCapitalize,
  multiline,
  ...rest
}) => {
  return (
    <RNTextInput
      style={{...styles.inputTextContainer, ...style}}
      editable={!nonEditable}
      autoCapitalize={autoCapitalize || 'none'}
      onChangeText={onChangeText}
      value={!onlyNumber ? `${value}` : `${value}`.replace(/[^+0-9]/g, '')}
      keyboardType={keyboardType || 'default'}
      maxLength={maxLength || 50}
      multiline={multiline}
      {...rest}
    />
  );
};

export default TextInput;
