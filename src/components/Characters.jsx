function Characters() {
  return (
    <section id="MeetTheCharacters" className="flex justify-between items-center">
      <div className=" flex flex-col justify-center items-center gap-5 p-10">
        <img
          className=" rounded-full h-56 w-56"
          src="/pictures/AnotherLob.jpg"
          alt="Another Lob"
        />
        <img
          className=" rounded-full h-56 w-56"
          src="/pictures/Bernard.jpg"
          alt="Bernard"
        />
        <img
          className=" rounded-full h-56 w-56"
          src="/pictures/Farmer.jpg"
          alt="Farmer"
        />
      </div>
      
      <div className=" flex flex-col justify-center items-center gap-5 p-10">
        <img
          className=" rounded-full h-56 w-56"
          src="/pictures/It'sGoodToTalk.jpg"
          alt=""
        />
        <img
          className=" rounded-full h-56 w-56"
          src="/pictures/SpinValleyInternational.jpg"
          alt="SpinValleyInternational"
        />
        <img
          className=" rounded-full h-56 w-56"
          src="/pictures/TheUmpire.jpg"
          alt="TheUmpire"
        />
      </div>
    </section>
  );
}

export default Characters;
