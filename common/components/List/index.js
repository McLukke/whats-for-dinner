import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

const List = ({
  emptyMessage,
  isLoading,
  error,
  children,
  ...restProps
}) => {
  if (isLoading) return <ActivityIndicator />;
  if (error) return <View><Text>{error.message || error}</Text></View>;
  if (!children.length) return <View><Text>{emptyMessage}</Text></View>;

  return (<View {...restProps}>
      {children}
    </View>);
};

export default List;
