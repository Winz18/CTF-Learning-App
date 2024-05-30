import React, { useCallback, useState } from "react";
import { ImageBackground, StyleSheet, Text, TouchableOpacity } from "react-native";
import axios from "axios";
import { useAuth } from "../../AuthProvider.tsx";
import { useFocusEffect } from "@react-navigation/native";

type SectionProps = {
  title: string;
  image: any;
  onPress: (articles: any[], title: string) => void;
};

function CourseButton({ title, image, onPress }: SectionProps): React.JSX.Element {
  const { user } = useAuth();
  const [articles, setArticles] = useState([]);

  const fetchArticles = useCallback(() => {
    axios
      .get("http://10.0.2.2:8000/api/articles/", {
        headers: {
          Authorization: "Token " + user?.token
        }
      })
      .then((response) => {
        const filteredArticles = response.data.filter((item: any) => item.category === title);
        const sortedArticles = filteredArticles.sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime());
        setArticles(filteredArticles);
      })
      .catch((error) => {
        console.error("Failed to fetch course data", error);
      });
  }, [title, user?.token]);

  useFocusEffect(
    useCallback(() => {
      fetchArticles();
    }, [fetchArticles])
  );

  return (
    <TouchableOpacity onPress={() => onPress(articles, title)}>
      <ImageBackground
        style={styles.container}
        imageStyle={{ borderRadius: 10, opacity: 0.2 }}
        source={image}
        resizeMode="cover"
      >
        <Text style={styles.text1}>{title}</Text>
        <Text style={styles.text2}>{articles.length} modules</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 140,
    height: 200,
    borderRadius: 20,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 16
  },
  text1: {
    marginTop: 20,
    marginLeft: 10,
    fontSize: 20,
    fontWeight: "900",
    color: "black"
  },
  text2: {
    marginLeft: 10,
    color: "blue",
    fontWeight: "900"
  }
});

export default CourseButton;
