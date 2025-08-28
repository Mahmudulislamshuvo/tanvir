import FeaturedProjects from "./components/Feturedprojects/FeaturedProjects";
import Hero from "./components/hero/Hero";
import HeroSection from "./components/navbar/Navbar";
import WhoWeAre from "./components/whoWeAre/WhoWeAre";

const App = () => {
  return (
    <div>
      <HeroSection />
      <Hero />
      <WhoWeAre />
      <FeaturedProjects />
    </div>
  );
};

export default App;
