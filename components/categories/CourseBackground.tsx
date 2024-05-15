import React from 'react';
import type {PropsWithChildren} from 'react';
import {ImageBackground, StyleSheet, Text} from 'react-native';

type SectionProps = PropsWithChildren<{
  title: string;
  numberOfCourse: string;
  typeCourse: any;
}>;

function CourseBackground({
  title,
  numberOfCourse,
  typeCourse,
}: SectionProps): React.JSX.Element {
  return (
    <ImageBackground
      style={styles.container}
      imageStyle={{borderRadius: 10, opacity: 0.2}}
      source={typeCourse}
      resizeMode="cover">
      <Text style={styles.text1}>{title}</Text>
      <Text style={styles.text2}>{numberOfCourse}</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 140,
    height: 200,
    borderRadius: 20,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 16,
  },

  text1: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 20,
    fontWeight: '900',
    color: 'black',
  },

  text2: {
    marginLeft: 20,
    color: 'blue',
    fontWeight: '900',
  },
});

export default CourseBackground;
