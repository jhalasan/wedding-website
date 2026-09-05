import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { CoupleMessage } from "./components/CoupleMessage";
import { Gallery } from "./components/Gallery";
import { EventDetails } from "./components/EventDetails";
import { Entourage } from "./components/Entourage";
import { AttireGifts } from "./components/AttireGifts";
import { RSVP } from "./components/RSVP";
import { Reminders } from "./components/Reminders";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <CoupleMessage />
        <Gallery />
        <EventDetails />
        <Entourage />
        <AttireGifts />
        <RSVP />
        <Reminders />
        <Footer />
      </main>
    </>
  );
}

export default App;
