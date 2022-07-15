import Head from "next/head";
import { Button } from "../components/Button";
import { DoctorImage } from "../components/DoctorImage";
import { Input } from "../components/Input";
import { Logo } from "../components/Logo";

function Home() {
  return (
    <>
      <Head>
        <title>Covid Tracker</title>
      </Head>
      <div
        className="flex h-full"
      >
        <section
          className="flex flex-col px-20 py-12 max-w-full md:max-w-[42rem] max-h-full h-full justify-between gap-8 md:gap-0"
        >
          <Logo/>
          <div className="flex max-w-full flex-col gap-8">
            <div className="flex flex-col gap-[6px]">
              <h1
                className="text-gray text-3xl md:text-5xl font-semibold leading-10 md:leading-[5.25rem]"
              >
                Entrar
              </h1>
              <h3
                className="text-gray text-xl md:text-2xl leading-9 max-w-[32rem]"
              >
                Bem-vindo, preencha os campos com
                seus dados corretamento para fazer login
              </h3>
            </div>
            <form
              className="flex flex-col gap-[1.375rem]"
            > 
              <Input placeholder="Digite seu e-mail aqui"/>
              <Input placeholder="Digite sua senha aqui" type="password"/>
              <a 
                className="text-base text-gray-02 hover:text-strong-blue hover:underline underline-offset-2"
                href="#"
              >
                Esqueceu a senha?
              </a>
              <Button className="button-with-gradient text-2xl text-white" type="submit">
                Login
              </Button>
            </form>
          </div>
          <p
            className="text-gray-03 self-center"
          >
            Powered by ⚡️Koded
          </p>
        </section>
        <section className="flex-1 justify-center items-center w-full h-full bg-[url('/assets/gradient.svg')] bg-cover hidden md lg:flex">
          <DoctorImage/>
        </section>
      </div>
    </>
  );
};

export default Home;
