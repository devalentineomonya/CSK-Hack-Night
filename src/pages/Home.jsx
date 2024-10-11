import Banner from "../components/home/Banner";
import Featured from "../components/home/Featured";
import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";
import Tools from "../components/home/Tools";

const Home = () => {
  return (
    <>
      <Hero />
      <Featured/>
      <Banner/>
      <Tools/>
      <Stats/>
    </>
  );
};

export default Home;
