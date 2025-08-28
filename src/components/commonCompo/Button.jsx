const Button = ({ title = "GET STARTED", css }) => {
  return (
    <>
      <button
        className={`rounded-lg text-white bg-[linear-gradient(45deg,#FF8534_0%,#FF9B52_40%,#FFD26A_100%)] hover:bg-[linear-gradient(45deg,#FFD26A_0%,#FF9B52_60%,#FF8534_100%)] transition-all duration-300 ${css}`}
      >
        {title}
      </button>
    </>
  );
};

export default Button;
