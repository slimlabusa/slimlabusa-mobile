import Navbar from '../components/Navbar';
import ReviwsTopSection from '../components/ReviwsTopSection';
import PatientReviewSection from '../components/PatientReviewSection';
import ResultGuaranteeSection from '../components/ResultGuaranteeSection';
import Footer from '../components/Footer'

export default function Page() {
  return (
    <div className='text-black'>
      <Navbar />
      <ReviwsTopSection />
      <PatientReviewSection />
      <ResultGuaranteeSection />
      <Footer />
    </div>
  )
}

