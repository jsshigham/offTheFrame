import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function HomeView() {

  const key = import.meta.env.REACT_APP_CLIENT_ID;

  console.log(key)

  const initialOptions = {
    clientId: key,
    currency: "GBP",
    intent: "capture",
  };

  return (
    <section>
      <div className="flex flex-col gap-16 justify-center items-center p-5 mb-5 font-main text-2xl mt-10 md:flex-row">
        <img
          className="h-72 md:h-96 md:-rotate-6"
          src="/pictures/OffTheFrame2012Edition.jpg"
          alt="OffTheFrame2012Edition"
        />

        <div className="flex flex-col text-center justify-center items-center md:w-1/2 gap-10">
          <h1 className=" font-bold">{`'Off The Frame' is an entertaining collection of stories, poems and sketches from the lighter side of tennis.`}</h1>

          <div>
            <p className="font-main italic">{`"A crazy collection of stories and poems, complemented by wonderful witty illustrations. I think everyone involved in tennis will recognise one of the hilarious characters!"`}</p>{" "}
            <p className=" font-bold">{`Jonathan Overend (BBC Sport's Tennis Correspondent)`}</p>
          </div>
          <div>
            <p className="font-main italic">{`"If you like tennis... and a good giggle... you'll like this book."`}</p>{" "}
            <p className="font-bold">{`Judy Murray (International Tennis Coach)`}</p>
          </div>
          <div className="flex items-center justify-center flex-col gap-2">
            <h1 className=" font-bold text-otfMaroon">Buy Now</h1>
            <PayPalScriptProvider options={initialOptions}>
              <PayPalButtons style={{ layout: "horizontal" }} />
            </PayPalScriptProvider>
            <p>£9.99 including P&P UK only</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeView;
