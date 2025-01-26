import React, { useEffect } from "react";
import {
  Image,
  Pressable,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import FormLogin from "../components/screens/login/FormLogin";
import { SafeAreaView } from "react-native-safe-area-context";


const LoginPage = () => {
  const [client, setClient] = React.useState(false);

  useEffect(() => {
    setClient(true);
  }, []);

  useEffect(() => {
    if (!client) return;
    router.push("/(auth)/home")
  }, [client])

  return (
    <SafeAreaView className="flex-1 justify-center bg-background relative p-5">
      {/* Logo */}
      <View className="absolute top-32 left-0 right-0">
        <View className="items-center">
          <Image
            className="w-72 h-44 md:w-72 md:h-44"
            source={require("@/src/assets/images/controller.png")}
          />
        </View>
      </View>

      {/* Formulário de login */}
      <FormLogin />

      {/* Botação para redirecionar para tela de configuração inicial */}
      <TouchableOpacity
        onPress={() => router.push("/(public)/initial-settings")}
        className="p-2 rounded-tr-lg rounded-lg self-center mt-4 absolute bottom-3 right-4 z-20"
      >
        <Ionicons name="cog-outline" size={30} color="#828282" />
      </TouchableOpacity>

      {/* Copyright Rodapé */}
      <Pressable
        className="absolute bottom-5 left-0 right-0"
      >
        <View className="items-center">
          <Image
            className="w-[140px] h-[40px] md:w-[200px] md:h-[50px] opacity-80"
            source={require("@/src/assets/images/desenvolvidoPorVisionSystem.png")}
          />
        </View>
      </Pressable>
    </SafeAreaView>
  );
};

export default LoginPage;
