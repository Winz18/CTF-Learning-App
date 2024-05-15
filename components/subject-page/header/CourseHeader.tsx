import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

type SectionProps = PropsWithChildren<{
  NewScr: () => void;
}>;

function CourseHeader({NewScr: Switching}: SectionProps): React.JSX.Element {
  return (
    <ImageBackground
      style={styles.container}
      resizeMode="cover"
      source={require('./img/hacker-1.jpg')}>
      {/* Nút back */}
      <View style={styles.navigationButton}>
        <TouchableOpacity onPress={Switching}>
          <Image style={styles.img} source={require('./img/left-arrow.png')} />
        </TouchableOpacity>
      </View>

      <View style={styles.tag}>
        {/* Độ khó (thay đổi theo data lấy về) */}
        <Text style={{fontWeight: '700', color: 'black'}}>Medium</Text>
      </View>
      {/* Tên course (thay đổi theo data lấy về) */}
      <Text style={styles.nameOfCourseTxt}>Tên Course</Text>
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: 10,
            width: 50,
            justifyContent: 'space-between',
          }}>
          {/* Số lượt xem và số sao đánh giá (thay đổi theo data lấy về) */}
          <Image style={styles.img} source={require('./img/OIP.jpg')} />
          <Text style={{color: 'lightgreen', fontSize: 16, fontWeight: '700'}}>
            10K
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginLeft: 10,
            width: 50,
            justifyContent: 'space-between',
          }}>
          <Image
            style={styles.img}
            source={require('./img/iconfinder_gold_star_1790157.png')}
          />
          <Text style={{color: 'lightgreen', fontSize: 16, fontWeight: '700'}}>
            3.5K
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 360,
  },

  img: {
    width: 20,
    height: 20,
  },

  navigationButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },

  tag: {
    width: 100,
    backgroundColor: '#f5cc77',
    marginLeft: 10,
    alignItems: 'center',
    paddingVertical: 5,
    marginTop: 10,
  },

  nameOfCourseTxt: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 40,
    fontWeight: '700',
    color: 'white',
  },
});

export default CourseHeader;
