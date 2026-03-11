import { StyleSheet, Button, ImageBackground } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import React from 'react';

import { styles } from '../app-styles';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={require('../assets/earth.png')}
          style={styles.background}
          resizeMode='cover'
        >
          <Button
            title="Start Quiz"
            onPress={() => navigation.navigate('Questions')}
          />
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}