import React from 'react';
import { connect } from 'react-redux';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
  TextInput,
  Text,
  ActivityIndicator,
  Image
} from 'react-native';
import { SearchBar } from 'react-native-elements';
import Masonry from 'react-native-masonry';

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
    const { isLoading, error, recipes } = this.props;
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
          {!recipes
            ? <Text>Don't know what to make for dinner? We're here to help! Go ahead, try searching</Text>
            : null}

          <List
            emptyMessage="No Recipes Found"
            isLoading={isLoading}
            error={error}>
            {recipes ?
              <Masonry
                bricks={recipes.map(recipe => ({
                  uri: recipe.recipe.image,
                  onPress: data => console.log(`${data.name} pressed!`),
                  data: {
                    name: recipe.recipe.label
                  },
                  renderFooter: data =>
                    <View>
                      <Text>{data.name}</Text>
                    </View>
                }))}
                spacing={2}
              />
            : null}
          </List>
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
    padding: 10,
    borderColor: 'red',
    borderWidth: 1,
    borderStyle: 'solid'
  },
  recipeImage: {
    borderColor: 'red',
    borderWidth: 1,
    width: '45%',
    height: 200
  }
});
