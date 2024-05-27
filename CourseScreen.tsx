import React from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { NavigationProp } from '@react-navigation/native';

type SectionProps = {
  navigation: NavigationProp<any, any>;
  route: any;
};

function CourseScreen({ route, navigation }: SectionProps): React.JSX.Element {
  const { articles, title } = route.params;

  const handlePress = (article: any) => {
    navigation.navigate("Module", { article });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={articles}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.articleContainer}>
            <TouchableOpacity onPress={() => handlePress(item)}>
              <Text style={styles.articleTitle}>{item.name}</Text>
              <Text style={{ color: "darkgreen" }}>Author: {item.author}</Text>
              <Text style={{ color: "darkgreen" }}>Created at: {item.date.substring(0, 10)}</Text>
              <Text style={{ color: "darkgreen" }}>Total views: {item.total_views}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 16,
    marginTop: 16,
    alignSelf: "center",
    color: "blue",
    fontStyle: "italic",
  },
  articleContainer: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 },
  },
  articleTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: "darkblue",
  },
});

export default CourseScreen;
