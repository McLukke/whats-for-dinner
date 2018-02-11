import React from 'react';
import { connect } from 'react-redux';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
  TextInput,
  Text,
  ActivityIndicator
} from 'react-native';
import { SearchBar } from 'react-native-elements';

// import SearchBar from '../common/components/SearchBar';
import { searchWithQuery } from '../actions/home';

const initState = {
  queryString: ''
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = initState;
  }

  render() {
    const { isLoading, error, recipes } = this.props;
    console.log('recipes: ', recipes);
    let message = '';
    if (recipes === undefined) {
      message = "Don't know what to make for dinner? We're here to help! Go ahead, try searching";
    } else if (recipes && !recipes.length) {
      message = 'No recipes found!';
    }

    return (
      <View style={styles.container}>
        <SearchBar
          lightTheme
          round
          placeholder='I have...'
          autoCapitalize='none'
          returnKeyType='search'
          onSubmitEditing={() => this.props.searchWithQuery(this.state.queryString)}
          onChangeText={queryString => this.setState({ queryString })}
        />

        <ScrollView style={styles.content}>
          {isLoading
            ? <ActivityIndicator />
            : recipes && recipes.length
              ? <View>
                  <Text>Recipes!</Text>
                </View>
              : <Text>{message}</Text>
          }
        </ScrollView>
      </View>
    );
  }
}

export default connect(
  ({ home: { isLoading, error, recipes } }) => ({ isLoading, error, recipes }),
  { searchWithQuery }
)(HomePage)

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    borderColor: 'red',
    borderWidth: 1,
    borderStyle: 'solid'
  }
});
