import DefaultButtonAction from '@/src/components/DefaultButtonAction';
import { Pressable, Text, View } from 'react-native';
import CustomSelect from '@/src/components/forms/CustomSelect';
import Controller from './Controller';
import { Ionicons } from '@expo/vector-icons';

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
        data={dataState}
        placeholder='Selecione um estado'
        label="Estado"
        name="state"
        form={c.form}
      />
      <View>
        <Text className='pb-1'>Cidade</Text>
        <Pressable
          className={`bg-input-bg ${!c.form.getValues('state') && 'opacity-40'} rounded-xl relative flex py-5 px-4`}
          onPress={c.form.getValues('state') ? c.handleOpenModalSearchCity : null}
        >
          <Text>
            {c.form.getValues('city')
              ? c.form.getValues('city')
              : c.form.getValues('state')
                ? 'Selecione uma cidade'
                : 'Selecione um estado'}
          </Text>
          <Ionicons
            className="absolute right-4 top-4 "
            name='search-outline'
            size={23}
            color="#212121"
          />
        </Pressable>
        {c.form.formState.errors['city']?.message && (
          <Text className="text-danger-light">
            {c.form.formState.errors['city'].message as string}
          </Text>
        )}
      </View>
      <DefaultButtonAction
        title="Carregar dados"
        onPress={c.form.handleSubmit(c.onSubmit)}
      />
    </View>
  );
};


export default FormHomeFilters;
