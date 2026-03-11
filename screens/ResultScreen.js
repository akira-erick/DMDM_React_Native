import React from 'react';
import { View, Text, Pressable } from 'react-native';

import { styles } from '../appStyles';

export default function ResultScreen({ navigation, route }) {
  const { score } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quiz Completado!</Text>
      <Text style={styles.score}>Voce fez {score} pontos!</Text>
      
        <Pressable
          style={{ 
              backgroundColor: '#2196F3',
              paddingVertical: 12,
              paddingHorizontal: 25,
              borderRadius: 8,
              marginTop: 20,
            }}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={{ color: 'white', fontSize: 18, textAlign: 'center' }}>
            Jogar de novo
          </Text>
      </Pressable>
    </View>
  );
}
