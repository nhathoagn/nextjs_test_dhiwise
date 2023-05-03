import React from "react";

const variantClasses = {
  h1: "font-bold sm:text-[40px] md:text-[46px] text-[50px]",
  h2: "font-medium sm:text-[31px] md:text-[33px] text-[35px]",
  h3: "sm:text-[21px] md:text-[23px] text-[25px]",
  h4: "text-xl",
  h5: "font-medium text-lg",
  h6: "font-normal text-base",
  body1: "font-normal text-sm",
} as const;

export type TextProps = Partial<{
  className: string;
  variant: keyof typeof variantClasses;
  as: React.ElementType;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className,
  variant,
  as,
  ...restProps
}) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
