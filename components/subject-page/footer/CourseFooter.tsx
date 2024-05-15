import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function CourseFooter(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.imgWrapper}>
        {/* Hiển thị số lượng module đã hoàn thành trong mỗi chủ đề,
          ví dụ: 5/10 (5, 10 là chiếu theo data fetch về, hãy tạo 2 biến state để lưu trạng thái) */}
        <Text style={styles.text}>Progess: 5/10</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: 100,
    backgroundColor: '#f5f5f7',
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
  },

  imgWrapper: {
    alignItems: 'center',
    marginHorizontal: 15,
  },

  text: {
    fontSize: 16,
    color: 'black',
    fontWeight: '700',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});

export default CourseFooter;
