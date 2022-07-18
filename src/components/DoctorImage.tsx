import Image from "next/future/image";
import CovidCircle from "../../public/assets/covid-circle.svg";
import DoctorHandImage from "../../public/assets/doctor-hand.svg";
import IphoneImage from "../../public/assets/iphone.png";

function DoctorImage() {
  return (
    <div
      className="text-white relative flex drop-shadow-2xl flex-col !min-w-[17rem] h-full !pb-10"
    >
      <Image
        className="!absolute bottom-0 !drop-shadow-xl !max-w-[17rem] !pb-10"
        src={IphoneImage}
        alt="Uma imagem de um iphone com uma tela azul"
        priority={true}
      />
      <div
        className="absolute top-0 w-full h-[17.5rem] max-h-[90%] items-end"
      >
        <div 
          className="absolute drop-shadow-2xl pl-[2px] pt-[2px] !shadow-2xl bottom-0 right-[-3.25rem] flex bg-slate-50 justify-center items-center rounded-full bg-opacity-20 backdrop-blur-[6px] !w-[14rem] !h-[14rem]"
        >
          <Image
            className="!h-[93%] !w-[93%] animate-rotate"
            src={CovidCircle}
            alt="Um círculo com pouca opacidade que lembra a textura de um vidro e tem em seu centro um ícone que representa a Covid-19 e uma mensagem rotativa que diz 'todos contra o corona vírus'"
          />
        </div>
      </div>
      <div
        className="absolute top-0 h-[32.5rem] w-[25rem] !right-[-1rem] max-h-[90%]"
      >
        <div
          className="absolute bottom-0 flex !drop-shadow-2xl !max-h-[150%]"
        >
          <Image
            src={DoctorHandImage}
            alt="Um braço coberto por uma manga de um jaleco, nas mãos há uma seringa"
            priority={true}
          />
        </div>
      </div>
    </div>
  );
};

export { DoctorImage };
