import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackScreenProps } from '@react-navigation/stack';
import { Character } from './src/utils/Interfaces';
import { CharacterDetailsScreen } from './src/Screens/CharacterDetailsScreen';
import { CharacterListScreen } from './src/Screens/CharacterListScreen';

const Stack = createNativeStackNavigator<AppStackParamsList>();

export type AppStackParamsList = {
  CharacterList: undefined;
  CharacterDetails: {
    item: Character;
  };
};

export type CharacterListScreenStackProps = StackScreenProps<AppStackParamsList, 'CharacterList'>;
export type CharacterDetailsScreenStackProps = StackScreenProps<AppStackParamsList, 'CharacterDetails'>;

const App = () => {

  return (
    <NavigationContainer>
      <ImageBackground style={styles.image} blurRadius={16} source={require('./src/assets/images/background.jpg')} resizeMode="cover">
        <Stack.Navigator
          initialRouteName="CharacterList"
          screenOptions={{ headerStyle: { backgroundColor: 'rgba(255, 255, 255, 0.8)' } }}>
          <Stack.Screen name="CharacterList" component={CharacterListScreen} options={{ title: 'Characters' }} />
          <Stack.Screen name="CharacterDetails" component={CharacterDetailsScreen} options={{ title: '' }} />
        </Stack.Navigator>
      </ImageBackground>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 60,
    marginTop: 10,
    marginBottom: 10,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default App;
