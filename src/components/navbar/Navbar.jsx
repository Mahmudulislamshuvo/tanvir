import Button from "../commonCompo/Button";

const Header = () => {
  return (
    <header className="w-full shadow bg-white border-b border-[#DCDCDE]">
      <div className="container mx-auto flex items-center justify-end py-4 px-6">
        {/* Logo */}
        {/* <a href="https://web.moxcreative.com/markeezo">
          <img
            src="https://via.placeholder.com/193x49"
            alt="logo_markeezo"
            className="h-10 w-auto"
          />
        </a> */}
        {/* Desktop Menu */}
        <Button css={"px-8 py-2 "} />
      </div>
    </header>
  );
};

export default Header;
