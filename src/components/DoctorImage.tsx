import Image from "next/future/image";
import CovidCircle from "../../public/assets/covid-circle.svg";
import DoctorHandImage from "../../public/assets/doctor-hand.svg";
import IphoneImage from "../../public/assets/iphone.png";

function DoctorImage() {
  return (
    <div
      className="text-white relative flex drop-shadow-2xl flex-col !min-h-[17rem] !min-w-[17rem] !pb-10"
    >
      <Image
        className="!absolute top-0 !drop-shadow-xl !min-w-[17rem] !pb-10"
        src={IphoneImage}
        alt="Uma imagem de um iphone com uma tela azul"
        priority={true}
      />
      <div 
        className="!absolute !drop-shadow-2xl !pl-[2px] !pt-[2px] !shadow-2xl !top-14 !right-[-3.25rem] flex bg-slate-50 justify-center items-center rounded-full bg-opacity-20 backdrop-blur-[6px] !w-[14rem] !h-[14rem]"
      >
        <Image
          className="!min-w-[12rem] !min-h-[12rem] animate-rotate"
          src={CovidCircle}
          alt="Um círculo com pouca opacidade que lembra a textura de um vidro e tem em seu centro um ícone que representa a Covid-19 e uma mensagem rotativa que diz 'todos contra o corona vírus'"
        />
      </div>
      <div
        className="!absolute flex w-[25rem] !drop-shadow-2xl h-[34rem] !top-[-1.5rem] !right-[-1rem]"
      >
        <Image
          src={DoctorHandImage}
          alt="Um braço coberto por uma manga de um jaleco, nas mãos há uma seringa"
          priority={true}
        />
      </div>
    </div>
  );
};

export { DoctorImage };
