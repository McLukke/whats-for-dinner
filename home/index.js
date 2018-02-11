import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  FormLabel,
  FormInput
} from 'react-native-elements';

import { baseUrl, appId, appKey } from '../env';

const initState = {
  queryString: ''
}

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = initState;
  }

  render() {
    return (
      <View style={styles.container}>
        <FormLabel>Search for recipes:</FormLabel>
        <FormInput
          placeholder='I have...'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
