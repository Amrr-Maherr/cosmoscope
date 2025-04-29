import Footer from "./Components/Footer/Footer";
import HeroSection from "./Components/HeroSection";
import HomeInfo from "./Components/HomeInfo";
import Navbar from "./Components/Navbar";
import { Image as ImageIcon, Orbit, Camera, Telescope } from 'lucide-react';
export default function Home() {
  const features = [
    {
      title: "Picture of the Day",
      description:
        "Explore stunning daily images and videos from NASA's APOD archive.",
      href: "/apod",
      imageUrl: "/breathtaking-shot-sea-dark-purple-sky-filled-with-stars.jpg",
      buttonText: "Explore Picture of the Day",
    },
    {
      title: "Near Earth Objects",
      description:
        "Track asteroids and comets currently passing close to our planet.",
      href: "/neos",
      imageUrl: "/galaxy-night-view.jpg",
      buttonText: "Track Near Earth Objects",
    },
    {
      title: "Mars Rover Photos",
      description:
        "Browse the latest images captured by NASA's rovers on Mars.",
      href: "/mars",
      imageUrl: "/moon-surface-big-planet-background.jpg",
      buttonText: "View Mars Rover Photos",
    },
    {
      title: "Deep Space Explorer",
      description:
        "Dive deeper into cosmic phenomena and browse image libraries.",
      href: "/explore",
      imageUrl: "/outer-space-background.jpg",
      buttonText: "Explore Deep Space",
    },
  ];

  return (
    <>
      <Navbar />
      <HeroSection />
      {features.map((feat,index) => (
        <HomeInfo feat={feat} key={index} />
      ))}
      <Footer/>
    </>
  );
}
