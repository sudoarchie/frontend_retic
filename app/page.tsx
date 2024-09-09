import { BackgroundLines } from "./components/background-lines";

export default function Home() {
  return (
    <div>
      <BackgroundLines>
        <div className=" flex flex-col items-center justify-center h-screen ">
          <h1 className="text-8xl  text-center leading-tight">
            Fixing the<br></br> ticketing
            <br /> industry
          </h1>
          <p className="w-[400px] text-center">
            Unlock the Future of Event Ticketing with FixTix embark on a journey
            into the world of Non-Fungible Tokens (NFTs), where ticket ownership
            meets innovation. Join us in redefining the ticketing experience and
            revolutionizing event access.
          </p>
        </div>
      </BackgroundLines>
    </div>
  );
}
