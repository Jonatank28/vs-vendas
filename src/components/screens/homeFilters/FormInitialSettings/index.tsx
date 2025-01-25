import DefaultButtonAction from '@/src/components/DefaultButtonAction';
import { View } from 'react-native';
import CustomSelect from '@/src/components/forms/CustomSelect';
import Controller from './Controller';
import dataStates from '@/src/data/states.json';

const FormHomeFilters = () => {
  const c = Controller();

  return (
    <View className='flex-col gap-3'>
      <CustomSelect
        data={c.dataEnterprise}
        placeholder='Selecione uma empresa'
        label="Empresa"
        name="enterprise"
        form={c.form}
      />
      <CustomSelect
        data={c.dataRegion}
        placeholder='Selecione uma regiao'
        label="Região"
        name="region"
        form={c.form}
      />
      <CustomSelect
        data={dataStates}
        placeholder='Selecione um estado'
        onChange={(state: string) => c.handleSelectCitiesState(state)}
        label="Estado"
        name="state"
        form={c.form}
      />
      <CustomSelect
        disable={c.form.getValues('state') ? false : true}
        data={c.dataCityes}
        placeholder={c.form.getValues('city')
          ? c.form.getValues('city')
          : c.form.getValues('state')
            ? 'Selecione uma cidade'
            : 'Selecione um estado'}
        label="Cidade"
        name="city"
        form={c.form}
      />
      <DefaultButtonAction
        title={c.isLoading ? 'Carregando dados ...' : 'Carregar dados'}
        onPress={c.form.handleSubmit(c.onSubmit)}
      />
    </View>
  );
};


export default FormHomeFilters;
