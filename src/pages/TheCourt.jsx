import LeftSide from "/src/components/LeftSide";
import RightSide from "/src/components/RightSide";
import Videos from "/src/components/Videos";


const theCourt = () => {


  return (
    <div className=" flex justify-between items-center">
      <LeftSide />
      <div className="flex flex-col justify-start items-center gap-10">
      <div>
        <p className="text-center font-main">
          Off the Frame is mostly short stories, but there are a few humorous
          rhymes on specific tennis issues!{" "}
        </p>
        <p className="text-center font-main">
          Here’s one about dodgy courts and how to use them to your advantage:
        </p></div>

        <Videos source="https://www.youtube.com/embed/EnnU9ZN99ZA" />
      </div>
      <RightSide />
    </div>
  );
};

export default theCourt;
