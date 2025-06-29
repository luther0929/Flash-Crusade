import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import StudyPage from './components/pages/StudyPage';
import CoursePage from './components/pages/CoursePage';
import HomePage from './components/pages/HomePage';
import FlashcardSetPage from './components/pages/FlashcardSetPage';
import SplashScreen from './components/SplashScreen';

const Stack = createStackNavigator();

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Show splash screen on every app launch
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000); // Show for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleSplashFinish = () => {
    setShowSplash(false);
  };

  if (showSplash) {
    return <SplashScreen onFinish={handleSplashFinish} />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="HomePage"
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: 'transparent' },
          cardOverlayEnabled: false,
          presentation: 'card',
          animationEnabled: true,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
        }}
      >
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="CoursePage" component={CoursePage} />
        <Stack.Screen name="FlashcardSetPage" component={FlashcardSetPage} />
        <Stack.Screen name="StudyPage" component={StudyPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
