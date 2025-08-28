import Button from "../commonCompo/Button";
import Cart from "../commonCompo/Cart";
import HeadingPage from "../commonCompo/HeadingPage";

const FeaturedProjects = () => {
  const projectData = [
    {
      id: 1,
      title: "Fantasy Kingdom",
      category: "App Development",
      client: "www.ejazah.com",
      date: "1 February 2025",
      location: "Bangladesh",
      type: "Travel",
      link: "Website",
      description1: "shajgoj is a leading Bangladeshi",
      description2: "online shop that has outlets as well",
      img: "https://images.pexels.com/photos/23879716/pexels-photo-23879716.jpeg",
    },
    {
      id: 2,
      title: "Foodie Hub",
      category: "Web Development",
      client: "www.foodiehub.com",
      date: "15 March 2025",
      location: "India",
      type: "Food Delivery",
      link: "Website",
      description1: "Foodie Hub connects local restaurants",
      description2: "with customers through fast delivery.",
      img: "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg",
    },
    {
      id: 3,
      title: "EduLearn",
      category: "EdTech Platform",
      client: "www.edulearn.org",
      date: "22 April 2025",
      location: "USA",
      type: "Education",
      link: "Website",
      description1: "EduLearn helps students with online courses",
      description2: "and interactive learning tools.",
      img: "https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg",
    },
    {
      id: 4,
      title: "FitLife",
      category: "Mobile App",
      client: "www.fitlifeapp.com",
      date: "10 May 2025",
      location: "UK",
      type: "Fitness",
      link: "Website",
      description1: "FitLife tracks workouts and diet",
      description2: "for a healthier lifestyle.",
      img: "https://images.pexels.com/photos/3763876/pexels-photo-3763876.jpeg",
    },
    {
      id: 5,
      title: "ShopNow",
      category: "E-commerce",
      client: "www.shopnow.com",
      date: "30 June 2025",
      location: "Dubai",
      type: "E-commerce",
      link: "Website",
      description1: "ShopNow is a popular online store",
      description2: "offering electronics and fashion.",
      img: "https://images.pexels.com/photos/5632405/pexels-photo-5632405.jpeg",
    },
    {
      id: 6,
      title: "TravelEase",
      category: "Tourism Website",
      client: "www.travelease.com",
      date: "20 July 2025",
      location: "Thailand",
      type: "Travel",
      link: "Website",
      description1: "TravelEase helps users plan trips",
      description2: "with hotel and flight booking.",
      img: "https://images.pexels.com/photos/3185488/pexels-photo-3185488.jpeg",
    },
  ];

  return (
    <>
      <div className="container mx-auto">
        <div className="py-20">
          <div className="px-100 py-20">
            <HeadingPage
              title={"Featured Project​s"}
              des={"Unleashing the Power of Innovation and Creativity.​"}
            />
          </div>

          {/* Cards grid */}
          <div className="w-full flex flex-wrap gap-5">
            {projectData?.map((items) => (
              <div className="w-[32%]">
                <Cart data={items} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedProjects;
