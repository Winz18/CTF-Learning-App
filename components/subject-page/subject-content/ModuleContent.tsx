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
    [key: number]: [string, string, string, string];
  }>({});

  useEffect(() => {
    fetch(`http://10.0.2.2:8000/api/sections/?article_id=${article.id}`, {
      headers: {
        Authorization: "Token " + user?.token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log(article.id)
        // Tạo một object với key là position của section, value là một mảng gồm các thông tin của section
        // thứ tự string: type, image, text, video_url
        const content: { [key: number]: [string, string, string, string, string] } = {};
        data.forEach((item: any) => {
          content[item.position] = [
            item.part_type,
            item.image,
            item.text,
            item.video_url,
          ];
        });
        setArticleContent(content);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [article.id, user?.token]);

  return (
  // if user.id not author.id, show content
    <View style={styles.container}>
      {Object.entries(articleContent)
        .sort((a, b) => parseInt(a[0]) - parseInt(b[0]))
        .map(([key, value]) => {
          const [type, image, text, video_url] = value;
          if (type === "text") {
            return <Text key={key} style={styles.text}>{text}</Text>;
          } else if (type === "image") {
            return (
              <Image
                key={key}
                source={{ uri: image }}
                style={styles.image}
              />
            );
          } else if (type === "video") {
            // Kiểm tra URL video
            if (video_url && video_url.startsWith("http")) {
              return (
                <Video
                  key={key}
                  source={{ uri: "https://www.w3schools.com/html/mov_bbb.mp4" }}
                  style={styles.video}
                  controls={true}
                  resizeMode="contain"
                  onError={(e) => console.error("Video error", e)}
                  onLoad={(data) => console.log("Video loaded", data)}
                  ignoreSilentSwitch="ignore"
                  allowsExternalPlayback={false}
                />
              );
            } else {
              console.warn("Invalid video URL", video_url);
              return <Text key={key} style={styles.text}>Video URL is invalid</Text>;
            }
          }
          return null;
        })}
    </View>
    //else show editUI
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
