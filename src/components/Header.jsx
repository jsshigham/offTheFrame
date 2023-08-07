import { useState, useEffect } from "react";
import { LuAlignJustify } from "react-icons/lu";
import { GiTennisCourt, GiTennisRacket } from "react-icons/gi";
import { BsInfoCircle } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { FaRegFaceSmile } from "react-icons/fa6";



function Header() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { title: "Home", link: "/", id: 1, emoji: <AiOutlineHome /> },
    { title: "The Characters", link: "/characters", id: 2, emoji: <FaRegFaceSmile /> },
    { title: "The Trickster", link: "/theTrickster", id: 3, emoji: <GiTennisRacket /> },
    { title: "The Court", link: "/theCourt", id: 4, emoji: <GiTennisCourt /> },
    { title: "About", link: "/about", id: 5, emoji: <BsInfoCircle /> },
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
          {isOpen && <ul className=" absolute  flex flex-col gap-3 items-start w-72 rounded bg-otfMaroon top-10 p-5">
            {links.map(({ title, link, id, emoji }) => {

            return (
              <a
                key={id}
                className=" hover:bg-otfImageGrey p-2 rounded flex justify-between w-full items-center"
                href={link}
              >
                <h1>{title}</h1>
                <div>{emoji}</div>
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
