const HeadingPage = ({ title = "Hi", des = "Descriptions" }) => {
  return (
    <div className="text-center">
      <h6 className="text-text-secondary pb-3 text-xl font-bold uppercase">
        {title}
      </h6>
      <h3 className="text-5xl text-text-main font-bold">{des}</h3>
    </div>
  );
};

export default HeadingPage;
