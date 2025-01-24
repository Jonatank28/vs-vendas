import React from 'react';
import { Text, View } from 'react-native';
import { UseFormReturn } from "react-hook-form";
import { Picker } from '@react-native-picker/picker';

interface Props {
  data: {
    label: string;
    value: string;
  }[],
  label: string,
  name: string
  form: UseFormReturn<any>;
  placeholder?: string
  defaultValue?: string
}

const CustomSelect = ({ data, placeholder, label, defaultValue, name, form }: Props) => {
  const [value, setValue] = React.useState<string | null>(defaultValue ?? null);

  return (
    <View>
      <Text className="text-input-text pb-1">{label}</Text>
      <View className="p-0 bg-input-bg rounded-xl">
        <Picker
          mode='dialog'
          selectedValue={value}
          onValueChange={(itemValue) => {
            form.setValue(name, itemValue);
            form.trigger(name);
            setValue(itemValue);
          }}
          enabled
        >
          {!value && <Picker.Item label={placeholder} value={null} />}
          {data.map((scale) => (
            <Picker.Item key={scale.value} label={scale.label} value={scale.value} />
          ))}
        </Picker>
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