import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Toast from "react-native-toast-message";
import { router } from "expo-router";
import { useInitialSettings } from "@/src/hooks/useInitialSettings";
import { schema } from "./shema";

const Controller = () => {
  const { data, setData } = useInitialSettings();

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      server: data?.server || "",
      route: data?.route || "",
    },
  });

  const onSubmit = async (data: z.infer<typeof schema>) => {
    const formatData = {
      ...data,
      dynamicRoutePrefix: data.server + data.route,
    };

    setData(formatData);
    Toast.show({
      type: "success",
      text1: "Configurações salvas com sucesso!",
    });
    router.push("/(public)");
  };

  return {
    form,
    onSubmit
  }
};

export default Controller;