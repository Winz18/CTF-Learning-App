import React from 'react';
import type {PropsWithChildren} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import ModuleHeader from './components/subject-page/header/ModuleHeader';
import ModuleContent from './components/subject-page/subject-content/ModuleContent';

type SectionProps = PropsWithChildren<{
  navigation: NavigationProp<any, any>;
}>;

function ModuleScreen({navigation}: SectionProps): React.JSX.Element {
  const backToCourse = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <ModuleHeader NewScr={backToCourse} />
          <ModuleContent />
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

export default ModuleScreen;
