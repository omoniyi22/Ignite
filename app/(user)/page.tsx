import Image from "next/image";
import NewScroll from "./../components/NewScroll";
import SectionOne from "./../components/SectionOne";
import SectionTwo from "./../components/SectionTwo";
import SectionThree from "./../components/SectionThree";
import SectionFour from "./../components/SectionFour";
import SectionFive from "./../components/SectionFive";
import AboutUs from "./../components/AboutUs";
import Part from "./../components/Part";
import Contact from "./../components/Contact";
import Team from "./../components/Team";
import Testi from "./../components/Testi";
import Footer from "./../components/Footer";

export default function Home() {
  return (
    <div>
      <SectionOne />
      <NewScroll />
      <AboutUs />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <Team />
      <Part />
      <Testi />
      <Contact />
      <Footer />
    </div>
  );
}
