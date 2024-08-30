import Portfolio from "@/app/components/Portfolio";
import CustomScrollBar from "@/components/custom-scroll-bar";
import ScrollToTopButton from "@/components/scroll-to-top-btn";

export default function Home() {
  return (
    <>
      <CustomScrollBar />
      <Portfolio />
      <ScrollToTopButton />
    </>
  );
}
