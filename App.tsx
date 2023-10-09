import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CharacterList from './Screens/CharacterList';
import CharacterDetailInfo from './Screens/CharacterDetailInfo';
import { header } from 'express-validator';

const Stack = createNativeStackNavigator()

const App = () => {

  return (
    <NavigationContainer>
      <ImageBackground style={styles.image} blurRadius={16} source={require('./assets/images/background.jpg')} resizeMode='cover'>
        <Stack.Navigator
          initialRouteName='CharacterList'
          screenOptions={{ headerStyle: { backgroundColor: 'rgba(255, 255, 255, 0.8)', } }}>
          <Stack.Screen name='CharacterList' component={CharacterList} options={{ title: 'Characters' }} />
          <Stack.Screen name='CharacterDetailInfo' component={CharacterDetailInfo} options={{ title: '' }} />
        </Stack.Navigator>
      </ImageBackground>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  input: {
    height: 60,
    marginTop: 10,
    marginBottom: 10
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default App;
