import React, { useCallback } from 'react';
import { View, Text, BackHandler, Pressable } from 'react-native';
import { router, useFocusEffect } from 'expo-router';

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
    <View className='flex-1 flex-col gap-4  p-2'>
      <Pressable className='flex-1 flex-row items-center justify-center bg-secondary rounded-xl'>
        <Text>Iniciar jornada</Text>
      </Pressable>
      <Pressable className='flex-1 flex-row items-center justify-center bg-secondary rounded-xl'>
        <Text>Novo</Text>
      </Pressable>
      <Pressable
        onPress={() => router.push("/(auth)/test")}
        className='flex-1 flex-row items-center justify-center bg-secondary rounded-xl'
      >
        <Text>Test</Text>
      </Pressable>
      <Pressable
        onPress={() => router.push("/(auth)/settings")}
        className='flex-1 flex-row items-center justify-center bg-secondary rounded-xl'
      >
        <Text>Configurações</Text>
      </Pressable>
    </View>
  );
};

export default HomePage;