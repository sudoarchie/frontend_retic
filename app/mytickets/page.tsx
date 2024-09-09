import { CardOne } from "../components/CardOne";
import { Navbar } from "../components/Navbar";

export default function MyTickets() {
  const data = [
    {
      title: "Music Festival 2024",
      description:
        "Join us for a weekend of live performances from the best indie bands and artists around the world.",
      image:
        "https://images.unsplash.com/photo-1501527459-2d5409f8cf9f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      url: "https://example.com/events/",
    },
    {
      title: "Tech Conference 2024",
      description:
        "Explore the latest innovations in technology, AI, and blockchain with industry leaders.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      url: "https://example.com/events/tech-conference-2024",
    },
    {
      title: "Art Expo 2024",
      description:
        "A showcase of contemporary art from emerging and established artists around the globe.",
      image:
        "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      url: "https://example.com/events/art-expo-2024",
    },
  ];
  return (
    <div>
      <Navbar></Navbar>
      <h1 className="text-bold text-2xl text-center mt-5 "> My Tickets</h1>
      <div className="flex flex-wrap gap-5 mt-5 justify-center items-center">
        {data.map((info, index) => (
          <CardOne
            key={index}
            title={info.title}
            discription={info.description}
            image={info.image}
            url={info.url}
          ></CardOne>
        ))}
      </div>
    </div>
  );
}
