const ServiceCart = ({ Icon, title, des }) => {
  return (
    <div className="p-5 text-white shadow-2xl rounded-xl group hover:bg-text-secondary">
      <div className="p-3 shadow-xl inline-block rounded-lg text-white bg-text-secondary group-hover:bg-white group-hover:text-text-secondary">
        <span className="w-10 h-10 flex items-center justify-center text-2xl">
          {Icon}
        </span>
      </div>
      <h3 className="pt-5 text-text-main group-hover:text-white font-semibold text-lg">
        {title}
      </h3>
      <p className="pt-5 text-text-777777 pb-8 group-hover:text-white text-sm">
        {des}
      </p>
    </div>
  );
};

export default ServiceCart;
