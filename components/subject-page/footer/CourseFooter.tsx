import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

function CourseFooter(): React.JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [finishedModules, setFinishedModules] = useState<number>(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [totalModules, setTotalModules] = useState<number>(0);

  return (
    <View style={styles.container}>
      <View style={styles.imgWrapper}>
        {/* Hiển thị số lượng module đã hoàn thành trong mỗi chủ đề */}
        <Text style={styles.text}>
          Hoàn thành: {finishedModules}/{totalModules}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    height: 100,
    backgroundColor: "#f5f5f7",
    position: "absolute",
    bottom: 0,
    alignItems: "center",
    justifyContent: "center"
  },

  imgWrapper: {
    alignItems: "center",
    marginHorizontal: 15,
    justifyContent: "center"
  },

  text: {
    fontSize: 24,
    color: "green",
    fontWeight: "700",
    alignSelf: "center"
  }
});

export default CourseFooter;
