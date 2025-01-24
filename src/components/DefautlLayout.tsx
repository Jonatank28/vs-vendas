import { View, Image } from "react-native";

const DefaultLayout = ({ children, logo = true }: { children: React.ReactNode, logo?: boolean }) => {
  return (
    <View className="px-4 flex-1 pt-2 bg-background">
      <View className="pb-4">
        {logo && (
          <View>
            <Image
              className="w-[120px] h-4 md:w-[140px] md:h-5"
              source={require("@/src/assets/images/visionlogo.png")}
            />
          </View>
        )}
      </View>
      {children}
    </View>
  );
};

export default DefaultLayout;
