import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Alert,
  Image,
} from 'react-native';
import type {PropsWithChildren} from 'react';
import {NavigationProp} from '@react-navigation/native';

interface Question {
  question: string;
  options: string[];
  correctOption: string;
}

const questions: Question[] = [
  {
    question: 'What is the capital of France?',
    options: ['Paris', 'London', 'Berlin', 'Madrid'],
    correctOption: 'Paris',
  },
  {
    question: 'What is 2 + 2?',
    options: ['3', '4', '5', '6'],
    correctOption: '4',
  },
  // add các câu hỏi vào đây, mỗi câu hỏi gồm 3 thuộc tính như trên
];

type SectionProps = PropsWithChildren<{
  navigation: NavigationProp<any, any>;
}>;

function QuizScreen({navigation}: SectionProps): React.JSX.Element {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [score, setScore] = useState(0);

  const handleOptionPress = (option: string) => {
    {
      /* Hàm xử lí và tính điểm */
    }
    setSelectedOption(option);
    if (option === questions[currentQuestionIndex].correctOption) {
      setScore(score + 1);
    }
    setTimeout(() => {
      setSelectedOption(null);
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        Alert.alert(
          `Quiz Finished! Your score is:  ${
            score +
            (option === questions[currentQuestionIndex].correctOption ? 1 : 0)
          }/10`,
        );
        backToDetail();
      }
    }, 1000);
  };
  {
    /* Hàm quay lại trang trước đó */
  }
  const backToDetail = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.navigationButton}>
        {/* Nút back */}
        <TouchableOpacity onPress={backToDetail}>
          <Image
            style={styles.img}
            source={require('./components/subject-page/header/img/left-arrow.png')}
          />
        </TouchableOpacity>
      </View>
      {/* Greeting */}
      <Text style={styles.question}>
        {'Nếu đã nắm chắc kiến thức,\nhãy thử sức =))\n\n\n'}
        {currentQuestionIndex + 1}. {questions[currentQuestionIndex].question}
      </Text>
      {/* FlatList chứa các đáp án */}
      <FlatList
        data={questions[currentQuestionIndex].options}
        renderItem={({item}) => (
          <TouchableOpacity
            style={[
              styles.option,
              {
                backgroundColor: item === selectedOption ? 'pink' : 'lightblue',
              },
            ]}
            onPress={() => handleOptionPress(item)}
            disabled={selectedOption !== null}>
            <Text style={styles.optionText}>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  question: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333333',
  },
  option: {
    padding: 16,
    borderWidth: 1,
    borderColor: '#dddddd',
    borderRadius: 8,
    marginVertical: 8,
    width: '100%',
  },
  optionText: {
    fontSize: 18,
    color: '#333333',
    alignSelf: 'center',
  },

  img: {
    width: 20,
    height: 20,
  },

  navigationButton: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    marginVertical: 15,
  },
});

export default QuizScreen;
