import Image from "next/image";
import CovidCircle from "../../public/assets/covid-circle.svg";
import DoctorHandImage from "../../public/assets/doctor-hand.svg";
import IphoneImage from "../../public/assets/iphone.svg";

function DoctorImage() {
  return (
    <div
      className="relative max-h-screen flex lg:mr-[0px] xl:mr-[100px] pt-[80px]"
    >
      <Image
        className="absolute max-h-full !right-10"
        src={IphoneImage}
        alt=""
      />
      <div
        className="absolute flex right-4 top-[15rem] w-[18rem] h-[18rem] max-h-full"
      >
        <div 
          className="absolute flex bg-slate-50 justify-center items-center rounded-full bg-opacity-20 backdrop-blur-[6px] w-full h-full"
        >
          <Image
            className="top-[15rem] w-[15rem] h-[15rem] animate-rotate"
            src={CovidCircle}
            alt=""
          />

        </div>
        <div
          className="absolute flex w-[34rem] h-[34rem] right-[0rem] top-[-5rem]"
        >
          <Image
            src={DoctorHandImage}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export { DoctorImage };
