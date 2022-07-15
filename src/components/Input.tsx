import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{};

function Input({ ...rest }: InputProps) {
  return (
    <div>
      <input 
        className="max-w-[100%] w-[32rem] h-16 md:h-20 bg-gray-05 border-2 rounded-[0.65rem] border-gray-03 py-[1.375rem] px-8 text-base leading-9"
        {...rest}
      />
    </div>
  );
};

export { Input };
