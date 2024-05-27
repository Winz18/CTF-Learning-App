import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Article = {
  id: number;
  name: string;
  author: string;
  date: string;
  total_views: number;
  content: string;
};

type ModuleContentProps = {
  article: Article;
};

function ModuleContent({ article }: ModuleContentProps): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{article.name}</Text>
      <Text style={styles.author}>Author: {article.author}</Text>
      <Text style={styles.date}>Created at: {article.date.substring(0, 10)}</Text>
      <Text style={styles.views}>Total views: {article.total_views}</Text>
      <Text style={styles.content}>{article.content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  author: {
    fontSize: 16,
    marginBottom: 8,
    color: "darkgreen",
  },
  date: {
    fontSize: 16,
    marginBottom: 8,
    color: "darkgreen",
  },
  views: {
    fontSize: 16,
    marginBottom: 8,
    color: "darkgreen",
  },
  content: {
    fontSize: 16,
  },
});

export default ModuleContent;
