import { View, Text, Animated } from "react-native";
import Controller from "./Controller";

const DefaultLoading = ({ text = "Carregando..." }: { text?: string }) => {
  const c = Controller()
  const rotate = c.rotate

  return (
    <View className="absolute top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center bg-white">
      <Animated.Image
        className="w-20 h-20"
        style={{ transform: [{ rotate }] }}
        source={require("@/src/assets/images/loading.png")}
      />
      <Text className="mt-2 text-lg text-gray-600">{text}</Text>
    </View>
  );
};

export default DefaultLoading;