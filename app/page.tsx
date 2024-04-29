// components
import { Navbar, Footer } from "@/components";

// pages
import Landing from "./pages/Landing";

export default function Home() {
  return (
    <section className="w-full h-full overflow-hidden bg-black">
      <Navbar />
      <Landing />
      <Footer />
    </section>
  );
}
