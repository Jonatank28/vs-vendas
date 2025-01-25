import React from 'react';
import { Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { UseFormReturn } from "react-hook-form";
import Controller from './Controller';
import { styles } from './styles';

interface Props {
  data: {
    label: string;
    value: string;
  }[],
  label: string,
  name: string
  form: UseFormReturn<any>;
  placeholder?: string
}

const CustomSelect = ({ data, placeholder, label, name, form }: Props) => {
  const c = Controller()

  return (
    <View>
      <Text className="text-input-text pb-1">{label}</Text>
      <View className="bg-input-bg rounded-xl">
        <Dropdown
          style={[styles.dropdown]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          containerStyle={styles.dropdownMenuStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!c.isFocus ? placeholder : ''}
          searchPlaceholder="Buscar..."
          value={form.getValues(name)}
          onFocus={() => c.setIsFocus(true)}
          onBlur={() => c.setIsFocus(false)}
          onChange={(item) => {
            const id = item.value
            c.onChangeValue(id, name, form)
          }}
        />
      </View>
      {form.formState.errors[name]?.message && (
        <Text className="text-danger-light">
          {form.formState.errors[name].message as string}
        </Text>
      )}
    </View>
  );
};

export default CustomSelect