import BrandAndCustomer from "./components/brandAndCustomer/BrandAndCustomer";
import FeaturedProjects from "./components/Feturedprojects/FeaturedProjects";
import Hero from "./components/hero/Hero";
import HeroSection from "./components/navbar/Navbar";
import Services from "./components/services/Services";
import WhoWeAre from "./components/whoWeAre/WhoWeAre";

const App = () => {
  return (
    <div>
      <HeroSection />
      <Hero />
      <WhoWeAre />
      <FeaturedProjects />
      <Services />
      <BrandAndCustomer />
    </div>
  );
};

export default App;
