import React from 'react';
import type {PropsWithChildren} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import ModuleEditHeader from './components/subject-page/header/ModuleEditHeader.tsx';
import ModuleEditContent from './components/subject-page/subject-content/ModuleEditContent.tsx';

type SectionProps = PropsWithChildren<{
  navigation: NavigationProp<any, any>;
}>;

function ModuleEdit({navigation}: SectionProps): React.JSX.Element {
  const navigateToHome = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <ModuleEditHeader navigation={navigation} />
          <ModuleEditContent />
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

export default ModuleEdit;
