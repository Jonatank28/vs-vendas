import DefaultButtonAction from '@/src/components/DefaultButtonAction';
import { View } from 'react-native';
import CustomSelect from '@/src/components/forms/CustomSelect';
import Controller from './Controller';
import dataStates from '@/src/data/states.json';

const dataEnterprise = [
  { label: '1 - Homologado Hidrelec', value: '1' },
  { label: 'Transforma 2', value: '2' },
  { label: 'SEIN ÇAAA', value: '3' },
]

const dataRegion = [
  { label: 'Centro', value: '1' },
  { label: 'Norte', value: '2' },
]


const FormHomeFilters = () => {
  const c = Controller();

  return (
    <View className='flex-col gap-3'>
      <CustomSelect
        data={dataEnterprise}
        placeholder='Selecione uma empresa'
        label="Empresa"
        name="enterprise"
        form={c.form}
      />
      <CustomSelect
        data={dataRegion}
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
        title="Carregar dados"
        onPress={c.form.handleSubmit(c.onSubmit)}
      />
    </View>
  );
};


export default FormHomeFilters;
