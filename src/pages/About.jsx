import LeftSide from "/src/components/LeftSide";
import RightSide from "/src/components/RightSide";
function About() {
  return (

   
    <div className=" flex justify-between items-center">
      <LeftSide />
      <div className="flex flex-col justify-start items-center gap-10">
     
        <p className="text-center font-main">
        Find out more about our tennis resources at <a className="text-bold text-otfMaroon" href="www.coachingedgeuk.com">www.coachingedgeuk.com</a>
        </p>
        <p className="text-center font-main">
        Our latest tennis course ‘How to win tennis matches’ is ideal for levels
        of competitive player.
        </p>

       
      </div>
      <RightSide />
    </div>
  ); 
}

export default About;
