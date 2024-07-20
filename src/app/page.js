import Image from "next/image";
import Menu from './components/Menu';
import HeadSection from './components/HeadSection';
import About from './components/About';
import Vote from "./components/Vote";
import EventSchedule from "./components/EvenSchedule";
import Facts from "./components/Facts";
import AboutPartners from "./components/AboutPartners";
import Footer from "./components/Footer";



export default function Home() {
  return (
    <div>


        <main className="flex min-h-screen flex-col items-center strech justify-between">
        <Menu></Menu>
          <HeadSection></HeadSection>
          <About></About>
            <Vote></Vote>
          <EventSchedule></EventSchedule>
          <Facts></Facts>
        <AboutPartners></AboutPartners>
            <Footer></Footer> 

          
      
        </main>
      </div>
  );
}
