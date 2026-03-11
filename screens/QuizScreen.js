import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import { styles } from '../app-styles';
import { getQuestions } from '../functions/get-questions';

export default function QuizScreen({ navigation }) {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const allQuestions = getQuestions();
    setQuestions(allQuestions);
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
      navigation.navigate('Result', { score });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{currentQuestion.question}</Text>

      {currentQuestion.options.map((option, index) => (
        <Button
          key={index}
          title={option.text}
          onPress={() => handleAnswer(option.correct)}
        />
      ))}
    </View>
  );
}
