import React from 'react';
import DefaultButtonAction from '@/src/components/DefaultButtonAction';
import Controller from './Controller';
import { Pressable, Text, TouchableOpacity, View } from 'react-native';
import CustomSelect from '@/src/components/forms/CustomSelect';
import { Ionicons } from "@expo/vector-icons";

const dataEnterprise = [
  { label: '1 - Homologado Hidrelec', value: '1' },
  { label: 'Transforma 2', value: '2' },
  { label: 'SEIN ÇAAA', value: '3' },
]

const dataRegion = [
  { label: 'Centro', value: '1' },
  { label: 'Norte', value: '2' },
]

const dataState = [
  { label: 'AC', value: '1' }, // Acre
  { label: 'AL', value: '2' }, // Alagoas
  { label: 'AM', value: '3' }, // Amazonas
  { label: 'AP', value: '4' }, // Amapá
  { label: 'BA', value: '5' }, // Bahia
  { label: 'CE', value: '6' }, // Ceará
  { label: 'DF', value: '7' }, // Distrito Federal
  { label: 'ES', value: '8' }, // Espírito Santo
  { label: 'GO', value: '9' }, // Goiás
  { label: 'MA', value: '10' }, // Maranhão
  { label: 'MG', value: '11' }, // Minas Gerais
  { label: 'MS', value: '12' }, // Mato Grosso do Sul
  { label: 'MT', value: '13' }, // Mato Grosso
  { label: 'PA', value: '14' }, // Pará
  { label: 'PB', value: '15' }, // Paraíba
  { label: 'PE', value: '16' }, // Pernambuco
  { label: 'PI', value: '17' }, // Piauí
  { label: 'PR', value: '18' }, // Paraná
  { label: 'RJ', value: '19' }, // Rio de Janeiro
  { label: 'RN', value: '20' }, // Rio Grande do Norte
  { label: 'RO', value: '21' }, // Rondônia
  { label: 'RR', value: '22' }, // Roraima
  { label: 'RS', value: '23' }, // Rio Grande do Sul
  { label: 'SC', value: '24' }, // Santa Catarina
  { label: 'SE', value: '25' }, // Sergipe
  { label: 'SP', value: '26' }, // São Paulo
  { label: 'TO', value: '27' }  // Tocantins
];

const FormHomeFilters = () => {
  const c = Controller()

  return (
    <View className='flex flex-col gap-2'>
      <CustomSelect data={dataEnterprise} label='Empresa' placeholder='Selecione a empresa' form={c.form} name="enterprise" />
      <CustomSelect data={dataRegion} label='Região' placeholder='Selecione a região' form={c.form} name="region" />
      <CustomSelect data={dataState} label='Estado' placeholder='Selecione o estado' form={c.form} name="state" />
      <View>
        <Text className='pb-1'>Cidade</Text>
        <Pressable className='bg-input-bg rounded-md relative flex py-5 px-4' onPress={c.handleOpenModalSearchCity}>
          <Text>{c.form.getValues('city') || 'Selecione a cidade'}</Text>
          <TouchableOpacity
            className="absolute right-4 top-4 "
          >
            <Ionicons
              name='search-outline'
              size={23}
              color="#212121"
            />
          </TouchableOpacity>
        </Pressable>
        {c.form.formState.errors['city']?.message && (
          <Text className="text-danger-light">
            {c.form.formState.errors['city'].message as string}
          </Text>
        )}
      </View>
      <DefaultButtonAction title="Carregar dados" onPress={c.form.handleSubmit(c.onSubmit)} />
    </View>
  );
};

export default FormHomeFilters;