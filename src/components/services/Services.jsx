import HeadingPage from "../commonCompo/HeadingPage";
import { MdOutlineMessage } from "react-icons/md";
import ServiceCart from "../commonCompo/ServiceCart";
import { FaChartLine, FaLaptopCode, FaMobileAlt } from "react-icons/fa";

const servicesData = [
  {
    id: 1,
    icon: <MdOutlineMessage />,
    title: "Consultations",
    des: "Get expert advice on launching, rebranding, or scaling your business.",
  },
  {
    id: 2,
    icon: <FaLaptopCode />,
    title: "Web Development",
    des: "We build modern, fast, and responsive websites for your business.",
  },
  {
    id: 3,
    icon: <FaChartLine />,
    title: "SEO Optimization",
    des: "Boost your visibility with our proven SEO and marketing strategies.",
  },
  {
    id: 4,
    icon: <FaMobileAlt />,
    title: "App Development",
    des: "Custom mobile apps tailored to your unique business needs.",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="px-100 pb-8">
          <HeadingPage
            title={"Featured Services"}
            des={"You’ve got a business, we have got brilliant minds"}
          />
        </div>

        {/* Services flex layout */}
        <div className="flex flex-wrap gap-5">
          {servicesData?.map((items, index) => (
            <div
              key={index}
              className={`w-[22%] ${index === 1 || index === 3 ? "mt-10" : ""}`}
            >
              <ServiceCart
                Icon={items.icon}
                title={items.title}
                des={items.des}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
