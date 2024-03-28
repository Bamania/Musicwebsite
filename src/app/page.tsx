import  FeaturedCourses  from "@/components/FeaturedCourses";
import Herosection from "@/components/Herosection";
import ScrollSec from "@/components/ScrollSec";
import Teacher from "@/components/Teacher";
import Webinar from "@/components/Webinar";
import Footer from "@/components/footer";
import MusicSchoolTestimonials from "@/components/tesimonials";


export default function Home() {
  return (
 <div className="min-h-screen antialiased bg-black/[0.9] bg-grid-white/[0.03]">

  <Herosection/>
  <FeaturedCourses/>
  <ScrollSec/>
 <MusicSchoolTestimonials/>
 <Webinar/>
 <Teacher/>
 <Footer/>
 </div>
  );
}
