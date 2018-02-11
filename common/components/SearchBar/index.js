import React from 'react';
import PropTypes from 'prop-types';
import {
  TextInput,
  TouchableHighlight,
  Text,
  View,
  StyleSheet
} from 'react-native';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchString: '',
    };
  }

  render() {
    const { searchString } = this.state;

    return (
      <View style={styles.base}>
        <TextInput
          style={styles.inputField}
          returnKeyType='search'
          placeholder="I have..."
          onChangeText={searchString => this.setState({ searchString })}
          autoCapitalize="none"
          value={searchString}
        />
        <TouchableHighlight
          style={styles.button}
        >
          <Text style={styles.buttonText}>Search</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 20
  },
  inputField: {
    flex: 0.8,
    alignSelf: 'stretch',
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
  },
  button: {
    alignSelf: 'stretch',
    flex: 0.2,
    padding: 10,
    borderWidth: 1,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    borderColor: '#FF6C6C'
  },
  buttonText: {
    textAlign: 'center'
  }
});

export default SearchBar;
