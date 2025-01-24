import React from "react";
import { Stack } from "expo-router";
import Toast from "react-native-toast-message";

const PublicLayout = () => {
  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="initial-settings" options={{ headerShown: true, title: "Configurações de conexão" }} />
        <Stack.Screen name="home-filters" options={{ headerShown: true, title: "Filtros iniciais" }} />
      </Stack>
      <Toast position="top" />
    </>
  );
};

export default PublicLayout;
