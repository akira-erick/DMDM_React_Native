import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, ImageBackground } from 'react-native';
import {
  SafeAreaView,
  SafeAreaProvider,
} from 'react-native-safe-area-context';

import { styles } from './app-styles';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={require('./assets/earth.png')}
          style={styles.background}
          resizeMode='cover'
          >
            <Button title="Press me" onPress={() => alert("Button pressed")} />
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
