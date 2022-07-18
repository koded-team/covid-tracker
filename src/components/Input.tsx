import Image from "next/future/image";
import { InputHTMLAttributes, useState } from "react";
import EyeSlashImage from "../../public/assets/eye-slash.svg";
import EyeImage from "../../public/assets/eye.svg";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{};

function Input({ className, ...rest }: InputProps) {
  return (
    <input
      autoComplete="on"
      className={"max-w-[100%] w-[32rem] h-16 md:h-20 bg-gray-05 border-2 rounded-[0.65rem] border-gray-03 py-[1.375rem] px-8 text-base leading-9 hover:border-sea-blue " + className}
      {...rest}
    />
  );
};

function PasswordInput({ ...rest }: InputProps) {
  const [isHidden, setIsHidden] = useState(true);

  function handleToogleVisibility() {
    setIsHidden(v => !v);
  };

  return (
    <div
      className="relative max-w-[100%] w-[32rem]"
    >
      <Input
        type={isHidden? "password":"text"}
        className="pr-16"
        autoComplete="current-password"
        {...rest}
      />
      <div
        className="absolute top-0 bottom-0 right-6 flex justify-center items-center"
      >
        <button
          type="button"
          className="text-sea-blue h-[25px] w-[25px] rounded-lg"
          onClick={handleToogleVisibility}
        >
          {isHidden? <Image
            aria-label="Aperte para deixar a senha visível"
            alt="Um ícone dentro de uma caixa de entrada representando um olho"
            src={EyeSlashImage}
            width={25}
            height={25}
            priority={true}
            className="!ml-[0.4px]"
          />:<Image
            aria-label="Aperte para esconder a senha"
            alt="Um ícone dentro de uma caixa de entrada representando um olho cortado"
            src={EyeImage}
            width={25}
            height={25}
            priority={true}
            className="!mt-[1.2px]"
          />}
        </button>
      </div>
    </div>
  );
};

export { Input, PasswordInput };
