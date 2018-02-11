import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  Button,
  FormLabel,
  FormInput,
  FormValidationMessage
} from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

const initErrorState = {
  username: 'This field is required',
  password: 'Password must be longer than 6 characters',
  confirmPassword: 'Passwords must match'
}

const initState = {
  username: '',
  password: '',
  confirmPassword: '',
  errors: initErrorState
}

export default class SignupForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = initState
  }

  render() {
    const errors = this.state.errors;

    return (
      <View style={styles.form}>
        <FormLabel>Username</FormLabel>
        <FormInput
          onChange={e => this.setState({ username: e.target.value })}
        />

        <FormLabel>Password</FormLabel>
        <FormInput
          onChange={e => this.setState({ password: e.target.value })}
          type='password'
        />

        <FormLabel>Confirm Password</FormLabel>
        <FormInput
          onChange={e => this.setState({ confirmPassword: e.target.value })}
          type='password'
        />

        <Button
          title='Sign Up'
          onPress={Actions.home}
          textStyle={styles.btnTextStyle}
          buttonStyle={styles.signupBtn}
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
  signupBtn: {
    marginTop: 20,
    backgroundColor: 'blue',
    borderRadius: 30,
    width: '60%',
    alignSelf: 'center'
  }
});
