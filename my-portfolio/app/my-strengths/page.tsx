import AboutSubnavResponsive from "@/components/about/profile/AboutSubnavResponsive";
import Header from "@/components/ui/header";
import Strengths from "@/components/about/my-strngths/Strengths";

export default function MyStrengths() {
  return (
    <div>
      <Header />
      <div className="font-sans mt-20 md:mt-30 md:w-[80%] mx-auto w-[96%] lg:h-[60vh]">
        <h2 className="title text-5xl tracking-widest">My Strengths</h2>
        <Strengths/>
      </div>
      <AboutSubnavResponsive />
    </div>
    
    
  )
}