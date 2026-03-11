import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import QuizScreen from "./screens/QuizScreen";
import ResultScreen from "./screens/ResultScreen";
import HomeScreen from "./screens/HomeScreen";

import { createTables, insertQuestionsIfNotExists } from "./database/database";

const Stack = createNativeStackNavigator();
async function initDb() {
  try {
    await createTables();
    await insertQuestionsIfNotExists();
  } catch (error) {
    console.error("Error creating tables:", error);
  }
}

export default function App() {

  useEffect(() => {
    initDb();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Questions" component={QuizScreen} />
        <Stack.Screen name="Result" component={ResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}