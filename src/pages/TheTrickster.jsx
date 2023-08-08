import Videos from "/src/components/Videos";

function TheTrickster() {
  return (
    <div className="flex flex-col justify-center items-center w-4/5 md:w-3/5 mt-5 gap-5 text-2xl">
      <div className="text-2xl text-center font-main">
        <p>
          Off the Frame is mostly short stories, but there are a few humorous
          rhymes on specific tennis issues!{" "}
        </p>
        <p>
          Here’s one about The Trickster - we bet you can identify this person
          at your club!
        </p>
      </div>

      <Videos source="https://www.youtube.com/embed/VPCNm7q0IR4" />
    </div>
  );
}

export default TheTrickster;
