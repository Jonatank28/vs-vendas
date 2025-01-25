import React, { forwardRef } from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import { Controller as ControllerRookForm, UseFormReturn } from "react-hook-form";
import { Ionicons } from "@expo/vector-icons";
import Controller from "./Controller";

interface Props {
  placeholder?: string;
  form: UseFormReturn<any>;
  name: string;
  label?: string;
  iconName?: string;
  keyboardType?:
  | "default"
  | "number-pad"
  | "decimal-pad"
  | "numeric"
  | "email-address"
  | "phone-pad";
  onPressIcon?: () => void;
  disabled?: boolean;
  secureTextEntry?: boolean;
  multiline?: boolean;
}

const CustomInput = forwardRef<TextInput, Props>(
  ({
    placeholder,
    form,
    name,
    label,
    iconName,
    keyboardType,
    onPressIcon,
    disabled,
    secureTextEntry,
    multiline,
  }: Props, ref) => {
    const c = Controller()

    return (
      <View>
        <Text className="text-BLACK pb-1">{label}</Text>
        <View className="relative">
          <ControllerRookForm
            control={form.control}
            name={name}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                className="bg-input-bg p-4 rounded-lg max-h-40"
                placeholder={placeholder}
                onBlur={onBlur}
                ref={ref}
                disableFullscreenUI
                keyboardType={keyboardType}
                onChangeText={onChange}
                returnKeyType="done"
                value={value}
                editable={!disabled}
                multiline={multiline}
                numberOfLines={multiline ? 8 : 1}
                secureTextEntry={secureTextEntry && !c.showPassword}
              />
            )}
          />
          {iconName && (
            <TouchableOpacity
              onPress={onPressIcon}
              className="absolute right-0 top-0 h-full w-12 flex items-center justify-center bg-input-text rounded-tr-lg rounded-br-lg"
            >
              <Ionicons
                // @ts-expect-error - Ignora pelo motivo de precisar colocar todos os tipos de icones
                name={iconName}
                size={30}
              />
            </TouchableOpacity>
          )}
          {secureTextEntry && (
            <TouchableOpacity
              className="absolute right-4 top-3 md:top-4"
              onPress={() => c.setShowPassword(!c.showPassword)}
            >
              <Ionicons
                name={c.showPassword ? "eye-outline" : "eye-off-outline"}
                size={24}
                color=""
              />
            </TouchableOpacity>
          )}
        </View>
        {form.formState.errors[name]?.message && (
          <Text className="text-danger-light">
            {form.formState.errors[name].message as string}
          </Text>
        )}
      </View>
    );
  }
);

export default CustomInput;
