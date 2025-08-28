import HeadingPage from "../commonCompo/HeadingPage";

const PricingAndPlans = () => {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto">
        <div className="py-20">
          <div className="px-[300px] text-center">
            <HeadingPage
              title={"Choose Plan"}
              des={"Providing brilliant ideas for your business."}
            />
          </div>
          {/* Pricing Cards */}
          <div>
            <div className="py-10 px-5 w-[33%]">
              <div className="mx-auto text-center">
                {/* Title and subtitle */}
                <div>
                  <h4 className="text-2xl text-text-main">Basic Plan</h4>
                  <p className="text-text-777777 text-lg font-bold">
                    Simple Business Website
                  </p>
                </div>

                {/* Price Section */}
                <div className="flex flex-col items-center justify-center mt-4">
                  <div className="flex items-start justify-center font-bold text-text-secondary">
                    <span className="text-2xl">$</span>
                    <h3 className="text-6xl">749</h3>
                  </div>
                  <p className="uppercase">Depend ON your demands</p>
                </div>
              </div>
              <ul className="w-full mt-6 divide-y divide-gray-200 text-text-777777 text-lg">
                <li className="py-3 text-left px-10">
                  Custom-designed homepage and up to 5 additional pages
                </li>
                <li className="py-3 text-left px-10">
                  Responsive design for seamless viewing on all devices
                </li>
                <li className="py-3 text-left px-10">
                  Basic SEO setup to help your site get noticed
                </li>
                <li className="py-3 text-left px-10">
                  Contact form integration for easy customer communication
                </li>
                <li className="py-3 text-left px-10">
                  Social media links and Google Maps integration
                </li>
              </ul>
              <div className="pt-10">
                <button
                  className="relative w-full py-3 rounded-lg font-semibold text-text-main 
             bg-white overflow-hidden 
             border-2 border-text-secondary 
             hover:border-none
             transition-all duration-300
             before:absolute before:inset-0 before:rounded-lg 
             before:p-[2px] before:bg-[linear-gradient(45deg,#FF8534_0%,#FF9B52_40%,#FFD26A_100%)] 
             before:-z-10
             hover:text-white hover:bg-[linear-gradient(45deg,#FF8534_0%,#FF9B52_40%,#FFD26A_100%)]"
                >
                  GET STARTED
                </button>
              </div>
            </div>

            <div></div>
            <div></div>
          </div>

          {/* Custom Services Section */}
          <div className="container mx-auto px-4 mt-20 text-center">
            <h3 className="text-2xl font-bold mb-2">Need custom services?</h3>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
              Contact us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingAndPlans;
