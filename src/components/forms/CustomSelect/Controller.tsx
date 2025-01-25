import React from 'react';
import { UseFormReturn } from 'react-hook-form';

const Controller = () => {
  const [isFocus, setIsFocus] = React.useState(false);

  const onChangeValue = (value: string, name: string, form: UseFormReturn<any>) => {
    setIsFocus(false);
    form.setValue(name, value, { shouldValidate: true });
    setIsFocus(false);
  };

  return {
    isFocus,
    setIsFocus,
    onChangeValue
  }
};

export default Controller;