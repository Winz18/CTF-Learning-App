import React, { PropsWithChildren } from "react";
import { StyleSheet, Text, View } from "react-native";
import CourseButton from "./CourseButton.tsx";
import {NavigationProp} from '@react-navigation/native';

type SectionProps = PropsWithChildren<{
  navigation: NavigationProp<any, any>;
}>;

const images: { [key: string]: any } = {
  web: require("./img/Web.jpg"),
  foren: require("./img/Foren.jpg"),
  reverse: require("./img/RE.jpg"),
  pwn: require("./img/Pwn.jpg"),
  crypto: require("./img/Crypto.jpg"),
  others: require("./img/Others.jpg"),
};

function CourseCategories({navigation}: SectionProps): React.JSX.Element {

  const goToCourseScreen = (articles: any[], title: string) => {
    navigation.navigate("Course", { articles, title });
  };
  return (
    <View>
      <View style={styles.categoriesContainer}>
        <Text style={styles.text1}>Categories</Text>
      </View>
      <View style={styles.courseContainer}>
        <CourseButton title="Web Security" image={images.web} onPress={goToCourseScreen} />
        <CourseButton title="Forensics" image={images.foren} onPress={goToCourseScreen} />
        <CourseButton title="Reversing Engineering" image={images.reverse} onPress={goToCourseScreen} />
        <CourseButton title="Binary Exploitation" image={images.pwn} onPress={goToCourseScreen} />
        <CourseButton title="Cryptography" image={images.crypto} onPress={goToCourseScreen} />
        <CourseButton title="Misc" image={images.others} onPress={goToCourseScreen} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  categoriesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginVertical: 10,
  },
  text1: {
    fontSize: 16,
    fontWeight: "700",
    color: "black",
  },
  courseContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
});

export default CourseCategories;
