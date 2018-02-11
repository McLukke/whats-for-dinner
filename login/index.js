import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Tabs from 'react-native-tabs';

import LoginForm from './loginForm';
import SignupForm from './signupForm';

export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTab: 'LoginForm'
    }
  }

  render() {
    const selectedTab = this.state.selectedTab;

    return (
      <View style={styles.container}>
        <View style={styles.tabs}>
          <Tabs
            selected={selectedTab}
            onSelect={e => this.setState({ selectedTab: e.props.name })}
          >
            <Text name='LoginForm'>Log In</Text>
            <Text name='SignupForm'>Sign Up</Text>
          </Tabs>
        </View>

        {selectedTab === 'LoginForm'
          ? <LoginForm />
          : <SignupForm />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabs: {
    width: '100%'
  }
});
