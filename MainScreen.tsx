import React from 'react';
import type {PropsWithChildren} from 'react';
import {ScrollView, View} from 'react-native'; // Import the TextInput component
import MainHeader from './components/header/MainHeader';
import Greeting from './components/greeting/Greeting';

import CourseCategories from './components/categories/CourseCategories';
import {NavigationProp} from '@react-navigation/native';

type SectionProps = PropsWithChildren<{
  navigation: NavigationProp<any, any>;
}>;

function MainScreen({navigation}: SectionProps): React.JSX.Element {
  const navigateToNewScreen = () => {
    navigation.navigate('Course');
  };

  return (
    <ScrollView>
      <View>
        <MainHeader navigation={navigation} />
        <Greeting />
        <CourseCategories NewScr={navigateToNewScreen} />
      </View>
    </ScrollView>
  );
}

export default MainScreen;
