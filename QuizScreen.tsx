import type { PropsWithChildren } from "react";
import React, { useEffect, useState } from "react";
import { NavigationProp } from "@react-navigation/native";
import { ActivityIndicator, Alert, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import axios from "axios";
import { useAuth } from "./AuthProvider.tsx";

interface Question {
  id: number;
  content: string;
  answers: Answer[];
}

interface Answer {
  id: number;
  content: string;
  result: boolean;
}

type SectionProps = PropsWithChildren<{
  navigation: NavigationProp<any, any>;
  route: any;
}>;

const QuizScreen = ({ navigation, route }: SectionProps) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const { article } = route.params;

  useEffect(() => {
    axios.get(`http://10.0.2.2:8000/api/tests/${article.test}/`, {
      headers: {
        Authorization: `Token ${user?.token}`
      }
    })
      .then(response => {
        setQuestions(response.data.questions);
        setLoading(false);
      })
      .catch(error => {
        console.error("Failed to fetch questions", error);
        setLoading(false);
      });
  }, [article.test, user?.token]);

  const handleOptionPress = (optionId: number) => {
    const currentQuestion = questions[currentQuestionIndex];
    const selectedAnswer = currentQuestion.answers.find(answer => answer.id === optionId);

    if (selectedAnswer) {
      setSelectedOption(optionId);
      if (selectedAnswer.result) {
        setScore(prevScore => prevScore + 1);
      }

      setTimeout(() => {
        setSelectedOption(null);
        if (currentQuestionIndex < questions.length - 1) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
          Alert.alert(
            `Quiz Finished! Your score is: ${
              score + (selectedAnswer.result ? 1 : 0)
            }/${questions.length}`
          );
          backToDetail();
        }
      }, 1000);
    }
  };

  const backToDetail = () => {
    navigation.goBack();
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" style={styles.loading} />;
  }

  if (questions.length === 0) {
    return <Text style={styles.message}>No questions available.</Text>;
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <View style={styles.container}>
      <View style={styles.navigationButton}>
        <TouchableOpacity onPress={backToDetail}>
          <Image
            style={styles.img}
            source={require("./components/subject-page/header/img/back.png")}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.question}>{currentQuestionIndex + 1}. {currentQuestion.content}</Text>
      <FlatList
        data={currentQuestion.answers}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.option,
              {
                backgroundColor: item.id === selectedOption ? "#f9c2ff" : "#e2e2e2"
              }
            ]}
            onPress={() => handleOptionPress(item.id)}
            disabled={selectedOption !== null}
          >
            <Text style={styles.optionText}>{item.content}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#ffffff"
  },
  question: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333333"
  },
  option: {
    padding: 16,
    borderWidth: 1,
    borderColor: "#dddddd",
    borderRadius: 8,
    marginVertical: 8,
    width: "100%"
  },
  optionText: {
    fontSize: 18,
    color: "#333333",
    textAlign: "center"
  },
  img: {
    width: 24,
    height: 24
  },
  navigationButton: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignSelf: "flex-start",
    marginVertical: 15
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  message: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 18,
    color: "#333333"
  }
});

export default QuizScreen;
