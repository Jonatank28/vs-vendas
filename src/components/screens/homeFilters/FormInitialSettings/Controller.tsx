import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { schema } from "./shema";

const Controller = () => {

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      enterprise: "",
      region: "",
      state: "",
      city: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof schema>) => {
    console.log("🚀  data", data);
  };

  const handleOpenModalSearchCity = () => {
    console.log("🚀  handleOpenModalSearchCity");
    form.setValue('city', 'Chapeco - SC');
    form.trigger('city');
  }

  return {
    form,
    onSubmit,
    handleOpenModalSearchCity
  }
};

export default Controller;