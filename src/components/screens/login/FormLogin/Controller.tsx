import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/src/hooks/useAuth";
import useLoading from "@/src/hooks/useLoading";
import { schema } from "./schema";

const Controller = () => {
  const { isLoading, startLoading, stopLoading } = useLoading()
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: { username: "", password: "" },
  });

  const { login } = useAuth();

  const handleLogin = async (data: z.infer<typeof schema>) => {
    startLoading()
    await login(data.username, data.password);
    stopLoading()
  };

  return {
    form,
    handleLogin,
    isLoading
  }
};

export default Controller;