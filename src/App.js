import CareBaby from "./Components/CareBaby/CareBaby";
import { Client } from "./Components/Client/Client";
import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Header/Header";
import Hero from "./Components/Hero/HeroSlider";
import { Products } from "./Components/Products/Products";
import { Shoes } from "./Components/Shop/Shoes";
import { Shop } from "./Components/Shop/Shop";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <CareBaby />
      <Products />
      <Shop />
      <Shoes />
      <Client />
      <Footer />
    
    </>
  );
}

export default App;
