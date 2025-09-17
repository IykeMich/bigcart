import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import './src/assets/global.css';
import { Router } from './src/router';
import { loadFonts } from './src/libs/fonts/fontLoader';
import { store } from './src/store';

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadAppFonts = async () => {
      try {
        await loadFonts();
        setFontsLoaded(true);
      } catch (error) {
        console.error('Error loading fonts:', error);
        setFontsLoaded(true); // Continue even if fonts fail to load
      }
    };

    loadAppFonts();
  }, []);

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}
