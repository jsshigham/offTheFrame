import { useState, useEffect } from "react";
import { LuAlignJustify } from "react-icons/lu";


function Header() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { title: "Home", link: "/", id: 1 },
    { title: "The Characters", link: "/characters", id: 2 },
    { title: "The Trickster", link: "/theTrickster", id: 3 },
    { title: "The Court", link: "/theCourt", id: 4 },
    { title: "About", link: "/about", id: 5 },
  ];

  const updateScreenSize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateScreenSize);
    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);

  let smallScreenSize = false;
  if (screenWidth < 768) {
    smallScreenSize = true;
  }

  return (
    <header className="flex flex-col sticky top-0 bg-otfMaroon text-white items-center p-2 z-10 font-main">
      <h1 className="text-4xl pt-2">OFF THE FRAME</h1>

      {smallScreenSize ? (
        <div className="flex flex-col gap-2 justify-center items-center relative rounded">
          <button onClick={() => setIsOpen((prev) => !prev)} className="flex justify-center items-center gap-2 text-xl">Menu <LuAlignJustify /></button>
          {isOpen && <ul className="flex flex-col gap-1 items-center">
            {links.map(({ title, link, id }) => {
            return (
              <a
                key={id}
                className="hover:bg-otfImageGrey rounded m-2 py-1 px-2"
                href={link}
              >
                {title}
              </a>
            );
          })}
          </ul>}
        </div>
      ) : (
        <ul className="flex gap-5 items-center">
          {links.map(({ title, link, id }) => {
            return (
              <a
                key={id}
                className="hover:bg-otfImageGrey rounded m-2 py-1 px-2 text-xl"
                href={link}
              >
                {title}
              </a>
            );
          })}
        </ul>
      )}
    </header>
  );
}

export default Header;
