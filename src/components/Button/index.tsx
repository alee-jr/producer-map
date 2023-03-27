import React, { ButtonHTMLAttributes } from "react";
import { Button } from "./styles";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  variant: "primary" | "danger";
};

const ButtonComponent: React.FC<ButtonProps> = ({
  variant,
  children,
  ...props
}) => {
  return (
    <Button variant={variant} {...props}>
      {children}
    </Button>
  );
};

export default ButtonComponent;
