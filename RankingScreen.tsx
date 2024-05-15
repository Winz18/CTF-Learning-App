import React from 'react';
import type {PropsWithChildren} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import RankingHeader from './components/subject-page/header/RankingHeader.tsx';
import RankingDetails from './components/subject-page/subject-content/RankingDetails.tsx';

type SectionProps = PropsWithChildren<{
  navigation: NavigationProp<any, any>;
}>;

function RankingScreen({navigation}: SectionProps): React.JSX.Element {
  const navigateToHome = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <RankingHeader NewScr={navigateToHome} />
          <RankingDetails />
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

export default RankingScreen;
