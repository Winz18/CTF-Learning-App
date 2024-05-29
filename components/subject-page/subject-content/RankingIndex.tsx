import type {PropsWithChildren} from 'react';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

type SectionProps = PropsWithChildren<{
  rank: string;
  text: {
    username: string;
  };
  score: string;
}>;

function RankingIndex({rank, text, score}: SectionProps): React.JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.number}>
        {/* Xếp hạng của users */}
        <Text style={{fontSize: 24, fontWeight: '900', color: 'red'}}>
          {rank}
        </Text>
      </View>
      <View style={styles.wrapTwoComponent}>
        {/* Tên của users */}
        <Text style={{fontSize: 20, fontWeight: '700', color: 'black'}}>
          {text.username}
        </Text>
      </View>
      <View style={styles.wrapTwoComponent}>
              {/* Tên của users */}
              <Text style={{fontSize: 20, fontWeight: '700', color: 'black', marginLeft: 130}}>
                {score}
              </Text>
      </View>
      {/* Biểu tượng cúp */}
      <TouchableOpacity onPress={() => {}}>
        <View>
          <Image style={styles.cupButton} source={require('./img/cup.png')} />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    backgroundColor: '#f5f5f7',
    flexDirection: 'row',
    borderRadius: 16,
    marginBottom: 10,
  },

  number: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },

  wrapTwoComponent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 5,
    alignItems: 'center',
  },

  cupButton: {
    marginTop: 5,
    alignItems: 'center',
    width: 50,
    height: 50,
  },
});

export default RankingIndex;
