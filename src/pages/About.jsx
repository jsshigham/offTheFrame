// import { useContext } from 'react';
// import MyContext from '../MyContext';

function About() {
  // const { screenWidth } = useContext(MyContext);

  // let smallScreenSize = false;
  // if (screenWidth < 768) {
  //   smallScreenSize = true;
  // }

  return (
    
      <div className="flex flex-col justify-center w-10/12 md:w-8/12 items-center gap-5 text-center font-main text-xl md:text-2xl mt-5">
        <p>
        Written by <a className=" text-otfMaroon underline" href="https://www.linkedin.com/in/alistairhigham/" target="_blank" rel="noopener noreferrer">Alistair Higham</a> and <a className=" text-otfMaroon underline" href="https://www.nottingham.ac.uk/english/news/2018-19/emeritus-professor-ronald-carter-1947-2018-obituary.aspx" target="_blank" rel="noopener noreferrer">Professor Ronald Carter</a>, with sketches by Dave Slaney, Off The Frame: The Lighter Side of Tennis is a hilarious collection of
          stories, poems and sketches which revel in the foibles of players,
          coaches and pushy tennis parents alike. In the fictional English
          countryside of Spin Valley, meet the eclectic population of junior,
          senior and veteran tennis players; ‘athletes’ who have real difficulty
          consistently hitting the ball out of the middle of the racket, play in
          sideways rain and who, instead of strawberries and cream, eat tinned
          fruit salad after matches.
        </p>
        <p >
          But just what and where is Spin Valley and who on earth plays tennis
          there?
        </p>
        <p >
          The real tennis population play in Spin Valley: tennis farmers who
          believe we should all play with more ‘grit’; vegetarian coaches who
          think patience and meditation will get you to Wimbledon;
          partially-sighted umpires who know all the rules and more; club tennis
          teams who do better without coaching; groundsmen who never allow play
          on their beloved grass courts; untrained ball girls; Buddhist monks
          who hum their way through junior international matches.
        </p>
        <p >
          It is a long road from Spin Valley to Wimbledon but all tennis players
          and spectators will recognise the tennis played in Longshott.
        </p>
        <p >
          Find out more about our tennis resources at{" "}
          <a
            className="text-bold text-otfMaroon"
            href="https://www.coachingedgeuk.com/"
          >
            www.coachingedgeuk.com
          </a>
        </p>
        <p >
          Our latest tennis course ‘How to win tennis matches’ is ideal for
          levels of competitive player.
        </p>
        <p>To get in touch please email <span className="text-bold text-otfMaroon" href="coachingedgeuk@icloud.com">coachingedgeuk@icloud.com</span></p>
      </div>
    
  );
}

export default About;
