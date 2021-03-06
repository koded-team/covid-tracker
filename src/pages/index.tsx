import Head from "next/head";
import { Button } from "../components/Button";
import { DoctorImage } from "../components/DoctorImage";
import { Input, PasswordInput } from "../components/Input";
import { Logo } from "../components/Logo";

function Home() {
  return (
    <>
      <Head>
        <title>Covid Tracker</title>
      </Head>
      <div
        className="flex max-w-full max-h-full justify-between overflow-hidden"
      >
        <section
          className="relative flex flex-col px-20 pt-12 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-sea-blue scrollbar-track-gray-04 md:min-w-[42rem] max-h-full h-full w-full lg:flex-1 justify-between gap-8 md:gap-0"
        >
          <Logo/>
          <div className="mb-12 flex max-w-full flex-col gap-8">
            <div className="flex flex-col gap-[6px]">
              <h1
                className="text-gray text-3xl md:text-5xl font-semibold leading-10 md:leading-[5.25rem]"
              >
                Entrar
              </h1>
              <h2
                className="text-gray text-xl md:text-2xl leading-9 max-w-[32rem]"
              >
                Bem-vindo, preencha os campos com
                seus dados corretamento para fazer login
              </h2>
            </div>
            <form
              className="flex flex-col gap-[1.375rem]"
            > 
              <Input placeholder="Digite seu e-mail aqui"/>
              <PasswordInput placeholder="Digite sua senha aqui"/>
              <a 
                className="text-base text-gray-02 hover:text-strong-blue hover:underline underline-offset-2 w-min whitespace-nowrap rounded-md"
                href="#"
              >
                Esqueceu a senha?
              </a>
              <Button className="button-with-gradient text-2xl text-white" type="submit">
                Login
              </Button>
            </form>
          </div>
          <div
            className="w-[32rem] max-w-[100%] flex flex-col"
          >
            <p
              className="text-gray-03 pb-12 self-center"
            >
              Powered by??????<a
                className="w-min whitespace-nowrap rounded-md hover:underline underline-offset-2"
                href="https://github.com/koded-team"
              >Koded</a>
            </p>
          </div>
        </section>
        <section className="relative flex-1 max-w-2xl justify-center items-center w-0 h-full bg-[url('/assets/gradient.svg')] bg-cover hidden lg:flex flex-col lg:w-full">
          <article
            className="relative max-h-screen flex flex-col justify-between h-screen py-16 px-2 items-center"
          >
            <DoctorImage/>
            <div
              className="text-center lg:w-[18rem] xl:w-[32rem] max-w-full mb-2"
            >
              <h2
                className="lg:text-xl xl:text-3xl font-semibold text-white"
              >
                Bem vindo ao Covid Tracker
              </h2>
              <p
                className="lg:text-lg xl:text-2xl font-normal text-white"
              >
                Acompanhe em tempo real os n??meros de casos de Covid-19 em sua cidade
              </p>
            </div>
          </article>
        </section>
      </div>
    </>
  );
};

export default Home;
