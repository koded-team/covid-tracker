import { Counter } from "../components/Counter";

function Home() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center gap-5">
      <h2 className="bg-green-300 text-2xl h-min p-5 rounded-3xl font-medium leading-3 pb-6">
        Esse é apenas o começo
      </h2>
      <Counter/>
    </div>
  );
};

export default Home;
