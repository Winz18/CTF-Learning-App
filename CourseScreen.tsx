import React from 'react';
import type {PropsWithChildren} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import CourseHeader from './components/subject-page/header/CourseHeader';
import {NavigationProp} from '@react-navigation/native';
import CourseContents from './components/subject-page/subject-content/CourseContent';
import CourseFooter from './components/subject-page/footer/CourseFooter';

type SectionProps = PropsWithChildren<{
  navigation: NavigationProp<any, any>;
}>;

function CourseScreen({navigation}: SectionProps): React.JSX.Element {
  const navigateToHome = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <CourseHeader NewScr={navigateToHome} />
          <CourseContents navigation={navigation} />
        </View>
      </ScrollView>
      <CourseFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CourseScreen;
