import Videos from "/src/components/Videos";

const Characters = () => {
  return (
    <div className=" flex flex-col justify-center items-center w-4/5 md:w-3/5 mt-5 gap-5 text-2xl">
      <p className="text-center font-main">
        You are taken into the fictional world of Long Shott Tennis Club in Spin
        Valley, <br /> where you meet confused beginners, dangerous doubles
        teams, partially-sighted umpires and pushy parents.
      </p>

      <Videos source="https://www.youtube.com/embed/DiVevquyvqg" />
    </div>
  );
};

export default Characters;
