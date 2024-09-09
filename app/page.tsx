import Image from "next/image";
// import { BackgroundLines } from "./components/background-lines";
import { StickyScroll } from "./components/sticky-scroll-reveal";
import { BackgroundGradientAnimation } from "./components/background-gradient-animation";
import { Navbar } from "./components/Navbar";
import img1 from '@/public/8ff238e5b5acb1cf34f2dd1e1e2bcbea.png'
export default function Home() {
  const content = [
    {
      title: "Ticket Listing",
      description:
        "Event organizers can list their tickets on the platform with detailed information, including event date, venue, and price. Manage listings efficiently and reach your audience with ease.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <Image
            src={img1}
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="ticket listing demo"
          />
        </div>
      ),
    },
    {
      title: "Ticket Purchase",
      description:
        "Buyers can browse available tickets, select their desired seats, and purchase tickets using cryptocurrency. Enjoy a seamless, secure buying experience through our platform.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <Image
            src={img1}
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="ticket listing demo"
          />
        </div>
      ),
    },
    {
      title: "Ticket Resell",
      description:
        "If you’re unable to attend, resell your ticket easily. Transfer ownership through the platform with minimal effort, ensuring flexibility and convenience.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <Image
            src={img1}
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="ticket listing demo"
          />
        </div>
      ),
    },
    {
      title: "Ticket Verification",
      description:
        "Once purchased, tickets are securely stored in the buyer's digital wallet, ensuring authenticity and preventing fraud. Enjoy peace of mind with blockchain-backed ticketing.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
        <Image
            src={img1}
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="ticket listing demo"
          />
        </div>
      ),
    },
    {
      title: "Smart Contract Security",
      description:
        "Our platform leverages smart contracts to ensure secure transactions, protecting both tickets and funds. Experience tamper-proof event management.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <Image
            src={img1}
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="ticket listing demo"
          />
        </div>
      ),
    },
    {
      title: "No Commission",
      description:
        "Enjoy a commission-free platform for ticket sales and purchases. Event organizers and buyers benefit from more affordable transactions.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <Image
            src="/no-commission.webp"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="no commission demo"
          />
        </div>
      ),
    },
  ];
  return (
    <div>
      <Navbar className={"z-50"}></Navbar>
      <BackgroundGradientAnimation>
        <div className=" flex flex-col items-center justify-center h-screen text-white">
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
      </BackgroundGradientAnimation>
      <StickyScroll content={content}></StickyScroll>
    </div>
  );
}
