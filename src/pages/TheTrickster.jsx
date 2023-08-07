import LeftSide from "/src/components/LeftSide";
import RightSide from "/src/components/RightSide";
import Videos from "/src/components/Videos";

function TheTrickster() {
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
        Here’s one about The Trickster - we bet you can identify this person at your club!
        </p></div>

        <Videos source="https://www.youtube.com/embed/VPCNm7q0IR4" />
      </div>
      <RightSide />
    </div>
  )
}

export default TheTrickster

