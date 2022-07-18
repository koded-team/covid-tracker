import Image from "next/future/image";
import LogoImg from "../../public/assets/logo.svg";

function Logo() {
  return (
    <div className="flex gap-1">
      <Image
        className="w-[4.9rem] h-[4.9rem]"
        src={LogoImg} 
        alt="Um ícone no formado de um vírus, o símbolo da aplicação e que representa a Covid-19" 
      />
      <div
        className="flex flex-col gap-0"
      >
        <h1 
          className="text-sea-blue font-bold text-[2.75rem] leading-[2.5rem]"
        >
          covid<br/>
          <span
            className="text-ciano-blue font-normal text-[2.75rem] leading-[2.5rem]"
          >
            tracker
          </span>
        </h1>
      </div>
    </div>
  );
};

export { Logo };
