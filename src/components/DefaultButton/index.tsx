import { cn } from "@/src/utils/utils";
import React from "react";
import { ActivityIndicator, Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import Controller from "./Controller";

interface Props extends TouchableOpacityProps {
  title: string;
  variant?: "primary" | "secondary" | "danger" | "neutral";
  className?: string;
}

const DefaultButton = ({ title, variant, className, ...props }: Props) => {
  const c = Controller()

  return (
    <TouchableOpacity
      disabled={c.isLoading}
      className={cn(`py-4 px-4 rounded-md w-full  justify-center items-center ${c.buttonClasses[variant || "primary"]} ${className}`)}
      {...props}
    >
      <View className="flex-row items-center gap-2">
        {c.isLoading && <ActivityIndicator size="small" color="#f4f4f4" />}
        <Text className="font-medium text-white">{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default DefaultButton;
