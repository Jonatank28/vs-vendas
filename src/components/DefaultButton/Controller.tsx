import useLoading from '@/src/hooks/useLoading';

const Controller = () => {
  const buttonClasses = {
    primary: "bg-primary",
    secondary: "bg-secondary",
    danger: "bg-danger",
    neutral: "bg-neutral",
  };

  const { isLoading } = useLoading()

  return {
    isLoading,
    buttonClasses
  };
};

export default Controller;