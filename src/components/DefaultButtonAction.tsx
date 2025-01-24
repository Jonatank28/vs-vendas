import React from "react";
import DefaultButton from "./DefaultButton";

interface Props {
  onPress?: () => void;
  title: string;
  className?: string;
  disabled?: boolean;
}

const DefaultButtonAction = ({
  onPress,
  title,
  className,
  disabled
}: Props) => {

  return (
    <DefaultButton
      variant="primary"
      title={title}
      onPress={onPress}
      className={`${disabled ? "opacity-50" : ""} ${className || ""} mt-6`}
    />
  );
};

export default DefaultButtonAction;
