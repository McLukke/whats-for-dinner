import React from 'react';
import cx from 'classnames';
import { View, Text, StyleSheet } from 'react-native';
import { Tabs, Scene } from 'react-native-router-flux';
import {
  Button,
  FormLabel,
  FormInput,
  FormValidationMessage
} from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

const initErrorState = {
  username: false,
  password: false,
  message: 'This field is required'
}

const initState = {
  username: '',
  password: '',
  errors: initErrorState
}

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = initState
  }

  updateInput = input => this.setState(input);

  validate = () => {
    const hasErrors = true;

    // validate stuff

    return [
      hasErrors,
      {
        ...initErrorState,
        username: true,
        password: true
      }
    ];
  }

  handleLogin = () => {
    const [hasErrors, errors] = this.validate();

    if (hasErrors) {
      return this.setState({ errors })
    }

    return Actions.home;
  }

  render() {
    const errors = this.state.errors

    return (
      <View style={styles.form}>
        <FormLabel>Username</FormLabel>
        <FormInput onChange={e => this.updateInput({ username: e.target.value })} />
        {errors.username ? <FormValidationMessage>{errors.message}</FormValidationMessage> : null}

        <FormLabel>Password</FormLabel>
        <FormInput onChange={e => this.updateInput({ password: e.target.value })} type='password' />
        {errors.password ? <FormValidationMessage>{errors.message}</FormValidationMessage> : null}

        <Button
          title='Log In'
          onPress={this.handleLogin}
          textStyle={styles.btnTextStyle}
          buttonStyle={styles.loginBtn}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  form: {
    width: '100%'
  },
  btnTextStyle: {
    fontWeight: 'bold'
  },
  loginBtn: {
    marginTop: 20,
    backgroundColor: 'blue',
    borderRadius: 30,
    width: '60%',
    alignSelf: 'center'
  }
});
