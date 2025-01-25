import React from "react";
import { z } from "zod";
import { schema } from "./shema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useLoading from "@/src/hooks/useLoading";
import { router } from "expo-router";
const cyties: { [key: string]: { label: string; value: string }[] } = require('@/src/data/citiesByState.json');

const dataEnterprise = [
  { label: '1 - Homologado Hidrelec', value: '1' },
  { label: 'Transforma 2', value: '2' },
  { label: 'SEIN ÇAAA', value: '3' },
]

const dataRegion = [
  { label: 'Centro', value: '1' },
  { label: 'Norte', value: '2' },
]

const Controller = () => {
  const { isLoading, startLoading, stopLoading } = useLoading()
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

  const getConfigsFilterInit = async () => {
    return new Promise((resolve) =>
      setTimeout(resolve, 5000))
  }

  const onSubmit = async (data: z.infer<typeof schema>) => {
    startLoading()
    try {
      await getConfigsFilterInit()
      router.push("/(auth)/home")
    } catch (error) {
      console.log(error)
    } finally {
      stopLoading()
    }
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
    dataEnterprise,
    dataRegion,
    isLoading
  };
};

export default Controller;
