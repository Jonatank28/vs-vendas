import { Text, View } from "react-native";
import Constants from "expo-constants";
import DefaultLayout from "../components/DefautlLayout";
import FormInitialSettings from "../components/screens/InitialSettings/FormInitialSettings";

const InitialSettingsPage = () => {

  return (
    <DefaultLayout logo={false}>
      <FormInitialSettings />
      <View className="absolute bottom-2 right-2">
        <Text className="text-BLACK/60">
          Versão {Constants.expoConfig?.version}
        </Text>
      </View>
    </DefaultLayout>
  );
};

export default InitialSettingsPage;
