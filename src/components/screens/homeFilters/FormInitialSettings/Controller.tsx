import React, { useEffect } from "react";
import { z } from "zod";
import { schema } from "./shema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useLoading from "@/src/hooks/useLoading";
import { router } from "expo-router";
import { api } from "@/src/utils/api";
import { useInitialSettings } from "@/src/hooks/useInitialSettings";
import { useAuth } from "@/src/hooks/useAuth";
const cyties: { [key: string]: { label: string; value: string }[] } = require('@/src/data/citiesByState.json');


const dataRegion = [
  { label: 'Centro', value: '1' },
  { label: 'Norte', value: '2' },
]

const Controller = () => {
  const { data } = useInitialSettings()
  const { user } = useAuth()
  const { isLoading, startLoading, stopLoading } = useLoading()
  const [dataCityes, setDataCityes] = React.useState<{ label: string; value: string }[]>([]);
  const [dataEnterprise, setDataEnterprise] = React.useState<{ label: string; value: string }[]>([]);


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
      router.push("/(auth)")
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

  const getDataEnterprise = async () => {
    try {
      const res = api.get(`${data?.dynamicRoutePrefix}/util/empresa/listar`, {
        headers: {
          'Authorization': user?.token
        }
      })
      const formatData = (await res).data.map((item: any) => {
        return {
          label: item.ds_nomefantasia,
          value: String(item.cd_empresa),
        }
      })
      setDataEnterprise(formatData)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getDataEnterprise()
  }, []);

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
