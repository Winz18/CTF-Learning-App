import React from 'react';
import type {PropsWithChildren} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

type SectionProps = PropsWithChildren<{
  number: string;
  text: {
    time: string;
    moduleName: string;
  };
  NewScr: () => void;
}>;

function Content({
  number,
  text,
  NewScr: Switching,
}: SectionProps): React.JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.number}>
        {/* Số thứ tự của modules */}
        <Text style={{fontSize: 24, fontWeight: '700', color: 'gray'}}>
          {number}
        </Text>
      </View>
      <View style={styles.wrapTwoComponent}>
        <View style={styles.lesson}>
          {/* Thời gian đọc của modules */}
          <Text style={{color: 'gray'}}>{text.time}</Text>
          {/* Tên của modules */}
          <Text style={{fontSize: 16, fontWeight: '700', color: 'black'}}>
            {text.moduleName}
          </Text>
        </View>
        {/* Nút play của modules, ấn vào sẽ chuyển sang màn hình nội dung chi tiết */}
        <TouchableOpacity onPress={Switching}>
          <View style={styles.wrapButton}>
            <Image
              style={styles.playButton}
              source={require('./img/play-button.png')}
            />
          </View>
        </TouchableOpacity>
      </View>
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

  lesson: {
    justifyContent: 'center',
    marginLeft: 10,
  },

  wrapButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    backgroundColor: '#51cf9a',
    borderRadius: 30,
    marginHorizontal: 10,
  },

  playButton: {
    width: 20,
    height: 20,
  },
});

export default Content;
