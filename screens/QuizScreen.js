import React, { useState, useEffect } from 'react';
import { View, Text, Pressable } from 'react-native';

import { styles } from '../appStyles';
import { getQuestions } from '../functions/GetQuestions';

export default function QuizScreen({ navigation }) {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    async function loadQuestions() {
      const allQuestions = await getQuestions();
      setQuestions(allQuestions);
    }
    loadQuestions();
  }, []);

  if (questions.length === 0) {
    return (
      <View style={styles.container}>
        <Text>Loading questions...</Text>
      </View>
    );
  }

  const currentQuestion = questions[currentIndex];

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      navigation.navigate('Result', { score: Number(score) });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{currentQuestion.question}</Text>

      {currentQuestion.answers.map((answerText, index) => (
        <Pressable
          key={index}
          style={{
            backgroundColor: '#2196F3',
            padding: 10,
            marginVertical: 5,
            borderRadius: 5
          }}
          onPress={() => {
            const isCorrect = index === Number(currentQuestion.correct_answer);
            handleAnswer(isCorrect);
          }}
        >
          <Text style={{ color: 'white', textAlign: 'center' }}>{answerText}</Text>
        </Pressable>
      ))}
    </View>
  );
}