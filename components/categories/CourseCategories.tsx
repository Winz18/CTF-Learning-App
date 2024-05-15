import React from 'react';
import type {PropsWithChildren} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import CourseBackground from './CourseBackground';

const images: {[key: string]: any} = {
  web: require('./img/Web.jpg'),
  foren: require('./img/Foren.jpg'),
  reverse: require('./img/RE.jpg'),
  pwn: require('./img/Pwn.jpg'),
  crypto: require('./img/Crypto.jpg'),
  others: require('./img/Others.jpg'),
};

type SectionProps = PropsWithChildren<{
  NewScr: () => void;
}>;

function CourseCategories({
  NewScr: Switching,
}: SectionProps): React.JSX.Element {
  return (
    <View>
      <View style={styles.categoriesContainer}>
        <Text style={styles.text1}>Categories</Text>
      </View>
      <View style={styles.courseContainer}>
        <TouchableOpacity onPress={Switching}>
          <CourseBackground
            title="Web Security"
            numberOfCourse="số lượng modules"
            typeCourse={images.web}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={Switching}>
          <CourseBackground
            title="Forensics"
            numberOfCourse="số lượng modules"
            typeCourse={images.foren}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={Switching}>
          <CourseBackground
            title="Reversing"
            numberOfCourse="số lượng modules"
            typeCourse={images.reverse}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={Switching}>
          <CourseBackground
            title="Pwnable"
            numberOfCourse="số lượng modules"
            typeCourse={images.pwn}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={Switching}>
          <CourseBackground
            title="Crypto"
            numberOfCourse="số lượng modules"
            typeCourse={images.crypto}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={Switching}>
          <CourseBackground
            title="Others"
            numberOfCourse="số lượng modules"
            typeCourse={images.others}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginVertical: 10,
  },

  text1: {
    fontSize: 16,
    fontWeight: '700',
    color: 'black',
  },

  text2: {
    color: 'blue',
  },

  courseContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
});

export default CourseCategories;
