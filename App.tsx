/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import React from 'react';

import MainScreen from './MainScreen';
import CourseScreen from './CourseScreen';
import ModuleScreen from './ModuleScreen';
import RankingScreen from './RankingScreen.tsx';
import QuizScreen from './QuizScreen.tsx';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MainScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={MainScreen} />
        <Stack.Screen name="Course" component={CourseScreen} />
        <Stack.Screen name="ModuleScreen" component={ModuleScreen} />
        <Stack.Screen name="RankingScreen" component={RankingScreen} />
        <Stack.Screen name="QuizScreen" component={QuizScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
