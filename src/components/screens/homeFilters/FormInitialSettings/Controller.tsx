import React from "react";
import { z } from "zod";
import { schema } from "./shema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
const cyties: { [key: string]: { label: string; value: string }[] } = require('@/src/data/citiesByState.json');

const Controller = () => {
  const [dataCityes, setDataCityes] = React.useState<{ label: string; value: string }[]>([]);

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

  const handleSelectCitiesState = async (state: string) => {
    setDataCityes(cyties[state] || []);
    form.setValue("city", "", { shouldValidate: true });
  };

  return {
    form,
    dataCityes,
    handleSelectCitiesState,
    onSubmit,
  };
};

export default Controller;
