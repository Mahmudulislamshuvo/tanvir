import { FaCertificate, FaChartBar, FaPhoneAlt } from "react-icons/fa";
import Button from "../commonCompo/Button";

const features = [
  {
    id: 1,
    icon: <FaCertificate className="w-15 h-15 text-white" />,
    title: "Certified Professional & Expert",
    desc: "Our team is made up of certified professionals and industry experts who bring both technical excellence and creative insight to every project",
  },
  {
    id: 2,
    icon: <FaChartBar className="w-15 h-15 text-white" />,
    title: "We're fast, Accurate & Reliable",
    desc: "We understand that time and precision are critical to your success. That’s why we deliver fast turnaround times without ever compromising on quality.",
  },
  {
    id: 3,
    icon: <FaPhoneAlt className="w-15 h-15 text-white" />,
    title: "24/7 Premium Support",
    desc: "We provide 24/7 premium support to ensure your website and apps run smoothly around the clock. Whether it’s troubleshooting, updates, or urgent assistance, our expert team is always ready to help—anytime, anywhere.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 px-[300px] bg-gray-50">
      <div className="container mx-auto ">
        {/* Header */}
        <div className="text-start w-[50%]">
          <h6 className="text-text-secondary pb-3 text-xl font-bold uppercase">
            Why Choose Us
          </h6>
          <h3 className="text-5xl text-text-main font-bold">
            We are here for we always give you satisfaction.
          </h3>
        </div>
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10">
          {/* Left Column */}
          <div className="lg:w-1/2 space-y-5 pt-10">
            <span className="text-text-777777 flex flex-col gap-y-5">
              <p>
                At PoshGigx, we transcend the mere creation of websites and
                applications – we develop solutions that evolve alongside your
                business. Here are the reasons clients select us:
              </p>
              <p>
                {" "}
                Customized Solutions: We reject the notion of a
                one-size-fits-all approach. Each project is tailored to align
                with your objectives, brand identity, and target audience.
              </p>
              <p>
                Comprehensive Expertise: From design and development to testing,
                launch, and ongoing support – we manage every aspect under one
                roof.
              </p>
              <p>
                Comprehensive Expertise: From design and development to testing,
                launch, and ongoing support – we manage every aspect under one
                roof.
              </p>
              <p>
                Dependable Delivery: Timely, within budget, and executed with
                accuracy. We produce high-quality digital solutions you can rely
                on.
              </p>
              <p>
                Located in New York, Serving Worldwide: We merge metropolitan
                professionalism with a global perspective to cater to businesses
                of all sizes.
              </p>
              <p>
                Select PoshGigx — where innovation intersects with technology to
                achieve tangible outcomes.
              </p>
            </span>
            <Button title={"LEARN MORE"} css={"px-8 py-2"} />
          </div>

          {/* Right Column */}
          <div className="lg:w-1/2 flex flex-col gap-6">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="flex items-start gap-4 p-5 rounded-xl shadow-lg hover:shadow-2xl transition"
              >
                <div
                  className={`flex items-center justify-center rounded-xl p-5 bg-text-secondary`}
                >
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-main">
                    {feature.title}
                  </h3>
                  <p className="text-text-777777">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
