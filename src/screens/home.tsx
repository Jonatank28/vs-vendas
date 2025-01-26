import React, { useCallback } from 'react';
import { View, Text, BackHandler, TouchableOpacity, Image, Button } from 'react-native';
import { router, useFocusEffect } from 'expo-router';
import DefaultLayout from '../components/DefautlLayout';

const HomePage = () => {

  // Impede que o usuário volte para a tela de login
  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        return true;
      };
      BackHandler.addEventListener("hardwareBackPress", onBackPress);
      return () => {
        BackHandler.removeEventListener("hardwareBackPress", onBackPress);
      };
    }, [])
  );

  return (
    <DefaultLayout>
      <Button title='Configurações' onPress={() => router.push("/(auth)/settings")} />
    </DefaultLayout>
  );
};

export default HomePage;