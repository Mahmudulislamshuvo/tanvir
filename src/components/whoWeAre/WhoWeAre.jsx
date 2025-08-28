import { HiOutlineRocketLaunch } from "react-icons/hi2";
import {
  MdOutlineInsertChart,
  MdOutlineInsertChartOutlined,
} from "react-icons/md";

const WhoWeAre = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-start px-20 py-20">
        <div className="items-start">
          <div className="h-[200px] w-[200px] rounded-full bg-white shadow-2xl flex flex-col items-center justify-center text-center">
            <h3 className="text-text-secondary text-7xl font-bold">5+</h3>
            <p className="text-text-main font-bold text-lg">
              Years of Experience
            </p>
          </div>
        </div>
        <div className="w-[50%] px-10">
          <h6 className="text-text-secondary text-lg font-bold pt-5">
            Who we are
          </h6>
          <h3 className="text-text-main text-5xl font-bold pt-5">
            Real people delivering real results.
          </h3>
          <p className="text-text-777777 pt-5">
            At PoshGigx, we focus on creating elegant, high-performance websites
            and mobile application solutions designed to enhance your business.
            Located in New York, we collaborate with clients from various
            sectors to develop bespoke websites for enterprises, e-commerce
            sites, and personal portfolios that make a memorable impact. Our
            team merges innovative design with robust technology to ensure you
            distinguish yourself, engage with your audience, and thrive
            confidently in the digital realm.
          </p>
          <div>
            <div>
              <div className="flex items-start justify-self-start gap-x-5 pt-10">
                <span>
                  <MdOutlineInsertChartOutlined className="w-15 h-15 text-text-secondary" />
                </span>
                <div>
                  <h1 className="text-2xl text-text-main">Website</h1>
                  <p className="text-text-777777 pt-2">
                    We build modern, responsive, and fully customized websites
                    that reflect your brand and drive results. Whether you need
                    a professional business site, a high-converting e-commerce
                    platform, or a personal portfolio to showcase your work — we
                    bring your vision to life.
                  </p>
                </div>
              </div>
              <div className="flex items-start justify-self-start gap-x-5 pt-10">
                <span>
                  <HiOutlineRocketLaunch className="w-15 h-15 text-text-secondary" />
                </span>
                <div>
                  <h1 className="text-2xl text-text-main">
                    Mobile App Solutions
                  </h1>
                  <p className="text-text-777777 pt-2">
                    We develop powerful and intuitive mobile applications that
                    help businesses connect with their customers on the go.
                    Whether you're launching a startup idea, streamlining
                    internal operations, or enhancing customer engagement, we
                    build custom iOS and Android apps tailored to your needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
