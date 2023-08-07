import LeftSide from "/src/components/LeftSide";
import RightSide from "/src/components/RightSide";
function About() {
  return (
    <div className=" flex justify-between items-center">
      <LeftSide />
      <div className="flex flex-col justify-center w-7/12 items-center gap-5">
        <p className="text-center font-main">
          Off The Frame: The Lighter Side of Tennis is a hilarious collection of
          stories, poems and sketches which revel in the foibles of players,
          coaches and pushy tennis parents alike. In the fictional English
          countryside of Spin Valley, meet the eclectic population of junior,
          senior and veteran tennis players; ‘athletes’ who have real difficulty
          consistently hitting the ball out of the middle of the racket, play in
          sideways rain and who, instead of strawberries and cream, eat tinned
          fruit salad after matches.
        </p>
        <p className="text-center font-main">
          But just what and where is Spin Valley and who on earth plays tennis
          there?
        </p>
        <p className="text-center font-main">
          The real tennis population play in Spin Valley: tennis farmers who
          believe we should all play with more ‘grit’; vegetarian coaches who
          think patience and meditation will get you to Wimbledon;
          partially-sighted umpires who know all the rules and more; club tennis
          teams who do better without coaching; groundsmen who never allow play
          on their beloved grass courts; untrained ball girls; Buddhist monks
          who hum their way through junior international matches.
        </p>
        <p className="text-center font-main" >
          It is a long road from Spin Valley to Wimbledon but all tennis players
          and spectators will recognise the tennis played in Longshott.
        </p>
        <p className="text-center font-main">
          Find out more about our tennis resources at{" "}
          <a className="text-bold text-otfMaroon" href="https://www.coachingedgeuk.com/">
            www.coachingedgeuk.com
          </a>
        </p>
        <p className="text-center font-main">
          Our latest tennis course ‘How to win tennis matches’ is ideal for
          levels of competitive player.
        </p>
      </div>
      <RightSide />
    </div>
  );
}

export default About;
