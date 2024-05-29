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
import LoginScreen from './LoginScreen.tsx';
import SignUpScreen from './SignupScreen.tsx';
import ProfileScreen from './ProfileScreen.tsx';
import {AuthProvider} from './AuthProvider.tsx';
import UploadScreen from './UploadScreen.tsx';
import ModuleEdit from './ModuleEdit.tsx';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={MainScreen} />
          <Stack.Screen name="Course" component={CourseScreen} />
          <Stack.Screen name="Module" component={ModuleScreen} />
          <Stack.Screen name="Ranking" component={RankingScreen} />
          <Stack.Screen name="Quiz" component={QuizScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Upload" component={UploadScreen}/>
          <Stack.Screen name="ModuleEdit" component={ModuleEdit}/>
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}

export default App;
