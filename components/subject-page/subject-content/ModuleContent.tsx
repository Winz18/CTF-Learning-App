import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View, Dimensions } from "react-native";
import { useAuth } from "../../../AuthProvider.tsx";
import Video from "react-native-video";

type Article = {
  id: string;
  name: string;
  author: string;
  date: string;
  total_views: number;
  content: string;
};

type ModuleContentProps = {
  article: Article;
};

const ModuleContent = ({ article }: ModuleContentProps): React.JSX.Element => {
  const { user } = useAuth();
  const [articleContent, setArticleContent] = useState<{
    [key: number]: [string, string, string, string, string];
  }>({});
  const [author_id, setAuthor_id] = useState<string>("");
  useEffect(() => {
    fetch(`http://10.0.2.2:8000/api/sections/?article_id=${article.id}`, {
      headers: {
        Authorization: "Token " + user?.token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        // Tạo một object với key là position của section, value là một mảng gồm các thông tin của section
        // thứ tự string: type, image, text, video_url
        const content: { [key: number]: [string, string, string, string, string] } = {};
        data.forEach((item: any) => {
          content[item.position] = [
            item.part_type,
            item.image,
            item.text,
            item.video_url,
            item.author_id
          ];
        });
        setArticleContent(content);
        setAuthor_id(data[0].author_id);
        console.log(articleContent);
        console.log(author_id);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [article.id, user?.token]);

  return (
    // if user.id not author.id, show content
    <View style={styles.container}>
        {author_id !== user?.id ? (
          <Text>not author</Text>
        ) : (
          <Text>author</Text>
        )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 8,
  },
  video: {
    width: Dimensions.get("window").width - 32, // Chiều rộng của video bằng chiều rộng màn hình trừ đi padding
    height: 200,
    marginBottom: 8,
  },
});

export default ModuleContent;
