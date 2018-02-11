import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Tabs from 'react-native-tabs';

import LoginForm from './loginForm';
import SignupForm from './signupForm';

const initState = {
  selectedTab: 'LoginForm'
}

export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = initState
  }

  resetTabs = () => this.setState(initState)

  render() {
    const selectedTab = this.state.selectedTab;

    return (
      <View style={styles.container}>
        <View style={styles.tabs}>
          <Tabs
            selected={selectedTab}
            onSelect={e => this.setState({ selectedTab: e.props.name })}
          >
            <View selectedStyle={styles.selected} style={styles.tab} name='LoginForm'><Text>Log In</Text></View>
            <View selectedStyle={styles.selected} style={styles.tab} name='SignupForm'><Text>Sign Up</Text></View>
          </Tabs>
        </View>

        {selectedTab === 'LoginForm'
          ? <LoginForm resetTabs={this.resetTabs} />
          : <SignupForm resetTabs={this.resetTabs} />}
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
  },
  selected: {
    borderBottomWidth: 5
  },
  tab: {
    borderStyle: 'solid',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'blue',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  }
});
