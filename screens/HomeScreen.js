import { Pressable, ImageBackground, Text } from 'react-native'; 
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import React from 'react';

import { styles } from '../appStyles';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={require('../assets/earth.png')}
          style={[styles.background, { resizeMode: 'cover' }]}
        >
          <Pressable
            style={{
                backgroundColor: '#2196F3',
                paddingVertical: 12,
                paddingHorizontal: 25,
                borderRadius: 8,
                marginTop: 20,
              }}
            onPress={() => navigation.navigate('Questions')}
          >
            <Text style={{ color: 'white', fontSize: 18, textAlign: 'center' }}>
              Start Quiz
            </Text>
          </Pressable>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}