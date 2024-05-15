import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import RankingIndex from './RankingIndex.tsx';

function RankingDetails(): React.JSX.Element {
  return (
    <View style={styles.container}>
      {/* Tạo khoảng trống */}
      <View>
        <Text />
      </View>
      <RankingIndex rank={'1'} text={{username: 'Hacker 001'}} />
      <RankingIndex rank={'2'} text={{username: 'Hacker 002'}} />
      <RankingIndex rank={'3'} text={{username: 'Hacker 003'}} />
      <RankingIndex rank={'4'} text={{username: 'Hacker 004'}} />
      <RankingIndex rank={'5'} text={{username: 'Hacker 005'}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
  },
});

export default RankingDetails;
