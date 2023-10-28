import Navbar from "../components/Navbar";
import TopSection from "../components/HomeTopSection";
import TopSecondSection from "../components/HomeTopSecondSection";
import TableSection from "../components/TableSection";
import StoriesSection from "../components/StoriesSection";
import EmbarkSection from "../components/EmbarkSection";
import ItsBiologySection from "../components/ItsBiologySection";
import ResultGuaranteeSection from "../components/ResultGuaranteeSection";
import HaveQuestionSection from "../components/HaveQuestionSection";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <main className="w-full h-full bg-white">
      <Navbar />
      <TopSection />
      <TopSecondSection />
      <TableSection />
      <StoriesSection />
      <EmbarkSection />
      <ItsBiologySection />
      <ResultGuaranteeSection />
      <HaveQuestionSection />
      <Footer />
    </main>
  );
}
