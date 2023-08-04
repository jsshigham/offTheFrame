import { useState, useEffect } from 'react';


function HomeView() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  

  const updateScreenSize = () => {
    setScreenWidth(window.innerWidth);
   
  };

  useEffect(() => {
    window.addEventListener('resize', updateScreenSize);
    return () => {
      window.removeEventListener('resize', updateScreenSize);
    };
  }, []);

  let smallScreenSize = false;
  if (screenWidth < 768) {
    smallScreenSize = true
  }
  return (
    <section>
      <div className="flex flex-col gap-5 justify-around items-center p-5 mb-5 font-main text-2xl mt-10 md:flex-row">
        {smallScreenSize ? (
          <>
            <h1 className="text-center font-bold">{`'Off The Frame' is an entertaining collection of stories, poems and sketches from the lighter side of tennis.`}</h1>{" "}
            <img
              className="h-72 md:h-96 md:-rotate-6"
              src="/pictures/OffTheFrame2012Edition.jpg"
              alt="OffTheFrame2012Edition"
            />
          </>
        ) : (
          <img
            className="h-72 md:h-96 md:-rotate-6"
            src="/pictures/OffTheFrame2012Edition.jpg"
            alt="OffTheFrame2012Edition"
          />
        )}
        <div className="flex flex-col text-center justify-center items-center md:w-1/2 gap-10">
          {smallScreenSize ? null : <h1 className=" font-bold">{`'Off The Frame' is an entertaining collection of stories, poems and sketches from the lighter side of tennis.`}</h1>}
          <div>
            <p className="font-quotes">{`"A crazy collection of stories and poem, complemented by wonderful witty illustrations. I think everyone involved in tennis will recognise one of the hilarious characters!"`}</p>{" "}
            <p>{`Jonathan Overend (BBC Sport's Tennis Correspondent)`}</p>
          </div>
          <div>
            <p className="font-quotes">{`"If you like tennis...and a good giggle....you'll like this book."`}</p>{" "}
            <p>{`Judy Murray (International Tennis Coach)`}</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col md:flex-row">
        <a href='https://www.paypal.com/' target={`_blank`} className=" bg-otfMaroon text-white rounded w-fit m-2 p-2 hover:bg-otfGreen">
          Buy Now
        </a>
        <p>£9.99 including P&P UK only</p>
      </div>
    </section>
  );
}

export default HomeView;
