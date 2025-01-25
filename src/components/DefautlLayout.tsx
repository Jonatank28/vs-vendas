import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SafeAreaView className="px-4 flex-1 bg-background">
      {children}
    </SafeAreaView>
  );
};

export default DefaultLayout;
