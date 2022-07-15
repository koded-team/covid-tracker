import Image from "next/image";
import LogoImg from "../../public/assets/logo.svg";

function Logo() {
  return (
    <div className="flex gap-1">
      <Image
        className="w-[4.9rem] h-[4.9rem]"
        src={LogoImg} 
        alt="" 
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
