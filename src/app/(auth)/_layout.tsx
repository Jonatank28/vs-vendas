import React from "react";
import { Stack } from "expo-router";
import Toast from "react-native-toast-message";

const PublicLayout = () => {
  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="home" />
      </Stack>
      <Toast position="top" />
    </>
  );
};

export default PublicLayout;
