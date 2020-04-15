import * as React from 'react';
import {Text, View, ActivityIndicator} from 'react-native';
import {styles} from './styles';

interface LoaderProps {
  color?: string;
  size?: 'large' | 'small';
  title?: string;
}

const Loader: React.FunctionComponent<LoaderProps> = ({color, size, title}) => {
  return (
    <View style={styles.loader}>
      <ActivityIndicator size={size || 'small'} color={color || '#777'} />
      <Text>{title || 'Loading...'}</Text>
    </View>
  );
};

export default Loader;
