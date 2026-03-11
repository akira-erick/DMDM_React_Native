import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import { styles } from '../app-styles';

export default function ResultScreen({ navigation, route }) {
  const { score } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quiz Completed!</Text>
      <Text style={styles.score}>You scored {score} points</Text>
      
      <Button
        title="Play Again"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}
