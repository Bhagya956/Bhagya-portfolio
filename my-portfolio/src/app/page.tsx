
// export default function Home() {
//   return (
//     <main className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
//       <h1 className="text-5xl font-bold mb-4">Hi, I’m Bhagya 👋</h1>
//       <p className="text-xl mb-6">Frontend Developer | React | Next.js</p>
//       <a
//         href="/projects"
//         className="bg-blue-500 px-4 py-2 rounded-lg text-lg hover:bg-blue-600 transition"
//       >
//         View My Work
        
        
//       </a>
//     </main>
//   );
// }




import HeroSection from "../components/HeroSection"
import AboutSection from "../components/AboutSection"
import SkillsSection from "../components/SkillsSection"
import ProjectsSection from "../components/ProjectsSection"
import ContactSection from "../components/ContactSection"
// import ExperienceSection from "@/components/ExperienceSection"
import ExperienceSection from "../components/ExperienceSection";


export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </>
  )
}

