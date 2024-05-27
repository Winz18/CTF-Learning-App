import React from 'react';
import type {PropsWithChildren} from 'react';
import {ScrollView, View, StyleSheet, SafeAreaView} from 'react-native';
import MainHeader from './components/header/MainHeader';
import Greeting from './components/greeting/Greeting';
import CourseCategories from './components/categories/CourseCategories';
import {NavigationProp} from '@react-navigation/native';

type SectionProps = PropsWithChildren<{
  navigation: NavigationProp<any, any>;
}>;

function MainScreen({navigation}: SectionProps): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <MainHeader navigation={navigation} />
          <Greeting />
          <CourseCategories navigation={navigation}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});

export default MainScreen;
