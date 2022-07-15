import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {};

function Button({ className, ...rest }: ButtonProps) {
  return (
    <button
      className={"max-w-[100%] w-[32rem] h-16 md:h-20 py-3 md:py-[1.375rem] px-8 rounded-[0.65rem] " + className}
      {...rest}
    />
  );
};

export { Button };
