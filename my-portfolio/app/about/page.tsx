import AboutSection from "@/components/about/profile/About";
import AboutSubnavResponsive from "@/components/about/profile/AboutSubnavResponsive";
import Header from "@/components/ui/header";

export default function About() {
  return (
    <div>
      <Header />
      <div className="mt-20 md:w-[80%] mx-auto w-[96%] mb-20 md:mb-0">
        <AboutSection />
      </div>
     <AboutSubnavResponsive />
    </div>
  );
}
