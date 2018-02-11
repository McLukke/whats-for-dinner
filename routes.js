import React from 'react';
import { connect } from 'react-redux';
import { Router, Lightbox, Scene } from 'react-native-router-flux';
import { View, Text } from 'react-native';

const ConnectedRouter = connect()(Router);

const HomePage = () => <View><Text>Home Page</Text></View>;
const TestLightbox = () => <View><Text>Hello World</Text></View>;

const AppRoutes = () =>
  <ConnectedRouter>
    <Lightbox>
      <Scene key='root'>
        <Scene key='home' initial component={HomePage} />
      </Scene>

      <Scene key='testLightbox' component={TestLightbox} />
    </Lightbox>
  </ConnectedRouter>;

export default AppRoutes;
