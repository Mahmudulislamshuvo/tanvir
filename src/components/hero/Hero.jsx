import mainImg from "../../assets/hero/img1.png";
import Button from "../commonCompo/Button";

const Hero = () => {
  return (
    <section className="relative bg-white py-20 px-6 md:px-12 lg:px-20">
      {/* Background overlay if needed */}
      <div className="absolute inset-0 bg-black/5 -z-10"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <p className="rounded-full text-white bg-[linear-gradient(45deg,#FF8534_0%,#FF9B52_40%,#FFD26A_100%)] px-8 py-1 inline-block">
            #Premium Services
          </p>

          <h1 className="max-md:text-9xl text-7xl font-bold text-[#3B3664] leading-20 animate-fadeInUp delay-200">
            You’ve got a business, we have got brilliant minds.
          </h1>

          <p className="text-gray-600 max-w-lg animate-fadeInUp delay-300">
            <span className="font-bold">PoshGigx</span> is a New York-based
            digital agency specializing in custom websites and mobile app
            solutions. We empower businesses and individuals with modern,
            reliable, and results-driven digital experiences.
          </p>

          <div className="flex items-center gap-6 pt-4">
            {/* CTA Button */}
            <Button css={"px-10 py-3"} />
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <img
            src={mainImg}
            alt="Main Hero"
            className="rounded-xl animate-fadeInUp"
          />

          {/* Floating images (absolute like Elementor) */}
          {/* <img
            src={productImp}
            alt="Product Impressions"
            className="absolute top-10 -left-10 w-110 md:w-40 hidden lg:block shadow-lg rounded-lg object-fill h-30"
          />
          <img
            src="https://via.placeholder.com/200x100"
            alt="Order"
            className="absolute bottom-10 -right-10 w-40 md:w-36 animate-bounce hidden lg:block h-28"
          />
          <img
            src="https://via.placeholder.com/140x70"
            alt="Paid"
            className="absolute -bottom-5 left-1/4 w-20 md:w-28 animate-bounce hidden lg:block"
          /> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
