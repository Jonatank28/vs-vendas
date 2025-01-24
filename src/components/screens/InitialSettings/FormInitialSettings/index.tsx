import DefaultButtonAction from '@/src/components/DefaultButtonAction';
import CustomInput from '@/src/components/forms/CustomImput';
import React from 'react';
import Controller from './Controller';
import { View } from 'react-native';

const FormInitialSettings = () => {
  const c = Controller()
  return (
    <View className='flex flex-col gap-2'>
      <CustomInput form={c.form} name="server" label="Servidor" />
      <CustomInput form={c.form} name="route" label="Rota" />
      <DefaultButtonAction title="Salvar" onPress={c.form.handleSubmit(c.onSubmit)} />
    </View>
  );
};

export default FormInitialSettings;