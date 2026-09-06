import "./styles/global.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Verse from "./components/Verse";
import Countdown from "./components/Countdown";
import CoupleNote from "./components/CoupleNote";
import AdventureBand from "./components/AdventureBand";
import EventDetails from "./components/EventDetails";
import Gallery from "./components/Gallery";
import Entourage from "./components/Entourage";
import SaveTheDate from "./components/SaveTheDate";
import AttireGifts from "./components/AttireGifts";
import Rsvp from "./components/Rsvp";
import Reminders from "./components/Reminders";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Nav />
      <Hero />
      <Verse />
      <Countdown />
      <CoupleNote />
      <AdventureBand />
      <EventDetails />
      <Gallery />
      <Entourage />
      <SaveTheDate />
      <AttireGifts />
      <Rsvp />
      <Reminders />
      <Footer />
    </div>
  );
}
