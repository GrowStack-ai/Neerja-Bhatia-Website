import Layout from '../components/layouts/Layout';
import ChallengeSection from '@/components/sections/ChallengeSection';
import PromiseSection from '@/components/sections/PromiseSection';
import AboutSection from '@/components/sections/AboutSection';
import CertificationsAndAssessments from '@/components/sections/CertificationsAndAssessments ';
import PublicationSection from '@/components/sections/PublicationSection ';
import TEDxEventSection from '@/components/sections/TEDxEventSection ';
import Testimonials from '@/components/sections/Testimonials ';
import ContactForm from '@/components/sections/ContactForm';
// import VideoCarousel from '@/components/sections/VideoCarousel ';
import VideoCarouselOne from '@/components/sections/mainVideo';


export default function Home() {
  return (
    <Layout>
      <VideoCarouselOne/>
      <ChallengeSection />
      <PromiseSection />
      <AboutSection/>
      <CertificationsAndAssessments/>
      <PublicationSection/>
      <TEDxEventSection/>
      <Testimonials/>
      <ContactForm/>
      {/* <VideoCarousel/> */}
    </Layout>
  );
}