import Header from "@/app/components/header/Header";
import HeroSection from "@/app/components/landing/Hero";
import FeatureHighlights from "@/app/components/landing/FeatureHighlights";
import Project from "@/app/components/landing/PopularProject";
import Footer from "@/app/components/landing/Footer";

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <FeatureHighlights />
      <Project />
      <Footer />
    </div>
  );
};

export default Home;
