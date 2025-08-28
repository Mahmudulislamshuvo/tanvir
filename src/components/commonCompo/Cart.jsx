import Button from "./Button";

const Cart = ({ data }) => {
  return (
    <div>
      <div className="rounded-xl border border-text-777777 relative group overflow-hidden">
        <div className="py-5 px-4">
          <h5 className="text-text-secondary">{data.category}</h5>
          <h3 className="text-text-main text-3xl pt-1">{data.title}</h3>
        </div>
        <div className="h-[450px] overflow-hidden">
          <img
            className="rounded-xl h-[100%] w-full object-cover"
            src={data.img}
            alt="project"
          />
        </div>

        {/* overlay */}
        <div
          className="absolute left-0 bottom-0 bg-[#7E7B99] z-10 w-full rounded-t-xl
                  translate-y-[55%] group-hover:translate-y-0 transition-all duration-500 ease-in-out"
        >
          <div className="py-4 px-2">
            <ul className="grid grid-cols-2 gap-5 p-5 border-b border-white">
              <li>
                <p className="text-text-secondary">Client</p>
                <h6 className="text-white font-bold text-xl">{data.client}</h6>
              </li>
              <li>
                <p className="text-text-secondary">Date</p>
                <h6 className="text-white font-bold text-xl">{data.date}</h6>
              </li>
              <li>
                <p className="text-text-secondary">Location</p>
                <h6 className="text-white font-bold text-xl">
                  {data.location}
                </h6>
              </li>
              <li>
                <p className="text-text-secondary">{data.type}</p>
                <h6 className="text-white font-bold text-xl">Travel</h6>
              </li>
              <li>
                <p className="text-text-secondary">Link</p>
                <h6 className="text-white font-bold text-xl">Website</h6>
              </li>
            </ul>
            <div className="py-4 px-5">
              <p className="text-white font-bold">{data.description1}</p>
              <p className="text-white font-bold pt-2 pb-5">
                {data.description2}
              </p>
              <Button title={"LEARN MORE"} css={"px-4 py-1"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
