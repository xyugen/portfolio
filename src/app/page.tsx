import Portfolio from "@/app/components/Portfolio";
import Footer from "@/components/layouts/Footer";
import ScrollToTopButton from "@/components/scroll-to-top-btn";

export default function Home() {
  return (
    <div>
      <Portfolio />
      <ScrollToTopButton />
      <Footer />
    </div>
  );
}
