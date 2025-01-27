import React, { useEffect } from "react";
import { router, Stack } from "expo-router";
import Toast from "react-native-toast-message";
import { enableScreens } from "react-native-screens";
import { useAuth } from "@/src/hooks/useAuth";
import DefaultLoading from "@/src/components/DefaultLoading";
enableScreens()

const AuthLayout = () => {
  const { user } = useAuth()
  const [loading, setLoading] = React.useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  useEffect(() => {
    if (loading) return
    if (!user) {
      router.push("/(public)")
    }
  }, [loading])

  return (
    <>
      {loading && <DefaultLoading />}
      {!loading && user && (
        <>
          <Stack screenOptions={{ headerShown: true }}>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="settings" options={{ title: "Configurações" }} />
          </Stack>
          <Toast position="top" />
        </>
      )}
    </>
  );
};

export default AuthLayout;
