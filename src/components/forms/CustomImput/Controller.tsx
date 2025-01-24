import { useState } from 'react';

const Controller = () => {
  const [showPassword, setShowPassword] = useState(false);

  return {
    showPassword,
    setShowPassword,
  };
};

export default Controller;