import React, { useCallback } from 'react';
import { View, Text, BackHandler } from 'react-native';
import { useFocusEffect } from 'expo-router';

const HomePage = () => {

  // Impede que o usuário volte para a tela de login
  // useFocusEffect(
  //   useCallback(() => {
  //     const onBackPress = () => {
  //       return true;
  //     };
  //     BackHandler.addEventListener("hardwareBackPress", onBackPress);
  //     return () => {
  //       BackHandler.removeEventListener("hardwareBackPress", onBackPress);
  //     };
  //   }, [])
  // );

  return (
    <View>
      <Text>HomePage</Text>
    </View>
  );
};

export default HomePage;