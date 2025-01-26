import React from "react";
import { Stack } from "expo-router";
import Toast from "react-native-toast-message";

const AuthLayout = () => {
  return (
    <>
      <Stack screenOptions={{ headerShown: true }}>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="settings" options={{ title: "Configurações" }} />
      </Stack>
      <Toast position="top" />
    </>
  );
};

export default AuthLayout;
