import BrandAndCustomer from "./components/brandAndCustomer/BrandAndCustomer";
import FeaturedProjects from "./components/Feturedprojects/FeaturedProjects";
import Hero from "./components/hero/Hero";
import HeroSection from "./components/navbar/Navbar";
import Services from "./components/services/Services";
import WhoWeAre from "./components/whoWeAre/WhoWeAre";
import WhyChooseUs from "./components/whyChoseUs/WhyChoseUs";

const App = () => {
  return (
    <div>
      <HeroSection />
      <Hero />
      <WhoWeAre />
      <FeaturedProjects />
      <Services />
      <BrandAndCustomer />
      <WhyChooseUs />
    </div>
  );
};

export default App;
