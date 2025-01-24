import { View } from "react-native";
import CustomInput from "@/src/components/forms/CustomImput";
import DefaultButtonAction from "@/src/components/DefaultButtonAction";
import Controller from "./Controller";

const FormLogin = () => {
  const c = Controller()

  return (
    <View className="bg-background">
      <CustomInput name="username" form={c.form} placeholder="Usuário" />
      < CustomInput
        name="password"
        form={c.form}
        placeholder="Senha"
        secureTextEntry
      />
      <DefaultButtonAction onPress={c.form.handleSubmit(c.handleLogin)} title={c.isLoading ? "Entrando..." : "Entrar"} />
    </View >
  );
};

export default FormLogin;
