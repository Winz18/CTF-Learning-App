import React from 'react';
import type {PropsWithChildren} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import UploadCourseHeader from './components/subject-page/header/UploadCourseHeader.tsx';
import RankingDetails from './components/subject-page/subject-content/RankingDetails.tsx';
import UploadCourseContent from './components/subject-page/subject-content/UploadCoureseContent.tsx';

type SectionProps = PropsWithChildren<{
  navigation: NavigationProp<any, any>;
}>;

function UploadScreen({navigation}: SectionProps): React.JSX.Element {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <UploadCourseHeader  navigation={navigation} />
          <UploadCourseContent navigation={navigation} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default UploadScreen;
