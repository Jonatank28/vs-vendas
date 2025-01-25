import React from 'react';
import { Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { UseFormReturn } from "react-hook-form";
import Controller from './Controller';
import { styles } from './styles';
import { cn } from '@/src/utils/utils';

interface Props {
  data: {
    label: string;
    value: string;
  }[],
  label: string,
  name: string
  form: UseFormReturn<any>;
  placeholder?: string
  onChange?: (id: string) => void
  disable?: boolean
}

const CustomSelect = ({ data, placeholder, label, name, form, onChange, disable }: Props) => {
  const c = Controller()

  return (
    <View>
      <Text className="text-input-text pb-1">{label}</Text>
      <View className={cn(`bg-input-bg rounded-xl ${disable && 'opacity-30'}`)}>
        <Dropdown
          style={[styles.dropdown]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          containerStyle={styles.dropdownMenuStyle}
          data={data}
          disable={disable}
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
            onChange && onChange(id)
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