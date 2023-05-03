import React from "react";

const shapes = {
  RoundedBorder10: "rounded-[10px]",
  RoundedBorder22: "rounded-[22px]",
  icbRoundedBorder27: "rounded-[27px]",
  icbCircleBorder30: "rounded-[30px]",
} as const;
const variants = {
  FillRed500: "bg-red_500 text-white_A700",
  OutlineRedA200: "border border-red_A200 border-solid text-red_A200",
  OutlineRed500: "border-2 border-red_500 border-solid text-red_500",
  icbFillRed50: "bg-red_50",
  icbOutlineRed500: "border-2 border-red_500 border-solid",
  icbOutlineRed500_1:
    "bg-red_500 border-2 border-red_500 border-solid shadow-bs",
} as const;
const sizes = { sm: "p-[13px]", md: "p-5", smIcn: "p-[15px]" } as const;

export type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "onClick"
> &
  Partial<{
    className: string;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
  }>;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  variant = "",
  size = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
