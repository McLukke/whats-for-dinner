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

import { searchWithQuery } from '../actions/home';
import List from '../common/components/List'

const initState = {
  queryString: ''
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = initState;
  }

  render() {
    const { isLoading, error, recipes = [] } = this.props;
    console.log('recipes: ', recipes);

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
          {!this.state.queryString && !recipes
            ? <Text>Don't know what to make for dinner? We're here to help! Go ahead, try searching</Text>
            : <List
                emptyMessage="No Recipes Found"
                isLoading={isLoading}
                error={error}>
                {recipes.map((recipe, index) =>
                  <View key={index}>
                    <Text>Hey</Text>
                  </View>
                )}
              </List>
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
