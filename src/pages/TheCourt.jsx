import Videos from "/src/components/Videos";
// import { useContext } from 'react';
// import MyContext from '../MyContext';

const TheCourt = () => {
  //   const { screenWidth } = useContext(MyContext);

  //   let smallScreenSize = false;
  //   if (screenWidth < 768) {
  //     smallScreenSize = true;
  //   }

  return (
    
      <div className=" flex flex-col justify-center items-center w-4/5 md:w-3/5 mt-5 gap-5 text-2xl">
        <div className="text-2xl text-center font-main">
          <p >
            Off the Frame is mostly short stories, but there are a few humorous
            rhymes on specific tennis issues!{" "}
          </p>
          <p >
            Here’s one about dodgy courts and how to use them to your advantage and you can download the poem below.
          </p>
        </div>

        <Videos source="https://www.youtube.com/embed/EnnU9ZN99ZA" />
        <a
        href="pictures/theCourt.pdf"
        download="The Court.pdf"
        className="p-2 text-base bg-otfMaroon text-white rounded"
      >
        Download The Court.pdf
      </a>
      </div>
   
  );
};

export default TheCourt;
