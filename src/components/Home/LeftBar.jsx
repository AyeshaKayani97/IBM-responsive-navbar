const LeftBar = () => {
  return (
    <div className="flex flex-col justify-between items-center w-[72px] sticky top-0 border-r border-[#e9e9e9] h-[100vh] py-4">
      {/* menu icons  */}
      <div className="flex flex-col  items-center gap-6">
        <a className="menuIcon">
          <img src="/general/logo.png" className="logo" />
        </a>
         <a className="menuIcon">
        <img src="/general/home.svg" />
      </a>
      <a className="menuIcon">
        <img src="/general/create.svg" />
      </a>
      <a className="menuIcon">
        <img src="/general/updates.svg" />
      </a>
      <a className="menuIcon">
        <img src="/general/messages.svg" />
      </a>
      </div>

      {/* menu icons ends here  */}
  
       <a className="menuIcon">
        <img src="/general/settings.svg" />
      </a>
    </div>
  );
};

export default LeftBar;
