import type { PropsWithChildren } from "react";
import React from "react";
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type SectionProps = PropsWithChildren<{
  goBack: () => void,
  goToTest: () => void,
  article: Article
}>;

type Article = {
  id: number;
  name: string;
  author: string;
  date: string;
  total_views: number;
  content: string;
};

function ModuleHeader({ goBack, goToTest, article }: SectionProps): React.JSX.Element {
  return (
    <ImageBackground
      style={styles.container}
      resizeMode="cover"
      source={require("./img/OIP2.jpg")}>
      <View style={styles.navigationButton}>
        <TouchableOpacity onPress={goBack}>
          <Image style={styles.img} source={require("./img/left-arrow.png")} />
        </TouchableOpacity>
      </View>
      <Text style={styles.nameOfModuleTxt}>
        {article.name}
      </Text>
      <Text>{"\n"}</Text>
      <View style={styles.navigationButton}>
        <Text style={{ fontSize: 18, color: "gold"}}>{"\nBạn đã hiểu rõ ?"}</Text>
        <TouchableOpacity onPress={goToTest}>
          <Image style={styles.btnTest} source={require("./img/test.png")} />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 200
  },

  img: {
    marginTop: 10,
    width: 20,
    height: 20
  },

  navigationButton: {
    flexDirection: "row",
    justifyContent: "flex-start",
    margin: 10
  },

  tag: {
    width: 100,
    backgroundColor: "#f5cc77",
    marginLeft: 10,
    alignItems: "center",
    paddingVertical: 5,
    marginTop: 10
  },

  nameOfModuleTxt: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 25,
    fontWeight: "900",
    color: "lightgray"
  },

  btnTest: {
    width: 50,
    height: 50,
    marginLeft: 10
  }
});

export default ModuleHeader;
