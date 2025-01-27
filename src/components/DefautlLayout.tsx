import React from "react";
import { View } from "react-native";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <View className="px-4 flex-1 bg-background">
      {children}
    </View>
  );
};

export default DefaultLayout;
