import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, ScrollView, Alert} from 'react-native';

function ModuleContent(): React.JSX.Element {
  {
    /*Đây là trang hiển thị nội dung chi tiết của từng module, data fetch từ server*/
  }
  const [content, setContent] = useState<string>('');

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch(
          'https://en.wikipedia.org/wiki/World_Wide_Web',
        );
        const text = await response.text();

        if (text) {
          setContent(text);
        }
      } catch (error) {
        console.error('Error fetching content:', error);
        {
          /* Nổi thông báo nếu có lỗi phát sinh */
        }
        Alert.alert(
          'Error fetching content, check your network connection and try again!',
        );
      }
    };

    fetchContent();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={{marginVertical: 16}}>
        <Text style={styles.headerTxt}>1. How the web works?</Text>
        <Text style={styles.content}>{content}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  headerTxt: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 20,
    fontWeight: '700',
    color: 'darkgreen',
  },
  content: {
    margin: 10,
    fontSize: 16,
    color: 'black',
  },
});

export default ModuleContent;
