import React from "react";
import Toast from "react-native-toast-message";
import { enableScreens } from "react-native-screens";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { Image, Text, TouchableOpacity, View } from "react-native";

enableScreens();

const DrawerLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          headerTitle: "",
          headerBackground: () => <View className="flex-1" />,
          headerRight: () => (
            <View className="flex-row items-center gap-2 pr-4">
              <Text>Jonatan</Text>
              <TouchableOpacity className="h-8 w-8">
                <Image
                  source={require("@/src/assets/images/splash.png")}
                  className="w-full h-full rounded-full"
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      >
        <Drawer.Screen
          name="test"
          options={{
            drawerLabel: "Test",
            title: "Test",
          }}
        />
      </Drawer>
      <Toast position="top" />
    </GestureHandlerRootView>
  );
};

export default DrawerLayout;
