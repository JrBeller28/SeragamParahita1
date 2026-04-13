import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Partners from "../components/Partners";
import ProductCatalog from "../components/ProductCatalog";
import LiveProjects from "../components/LiveProjects";
import OrderFlow from "../components/OrderFlow";
import MaterialShowcase from "../components/MaterialShowcase";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Partners />
      <ProductCatalog />
      <MaterialShowcase />
      <LiveProjects />
      <OrderFlow />
    </>
  );
}
