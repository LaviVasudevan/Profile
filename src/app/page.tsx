import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import Techstack from '../components/Techstack';
import Profiles from '../components/Profiles';
import Cocurriculars from '../components/Cocurriculars';
import Extracurriculars from '../components/Extracurriculars';
import StickerZone from '../components/StickerZone';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section id="hero"><Hero /></section>
        <section id="projects" className="py-20 bg-white"><Projects /></section>
        <section id="tech" className="py-20 bg-gradient-to-br from-blue-100 to-purple-100"><Techstack /></section>
        <section id="profiles" className="py-20 bg-white"><Profiles /></section>
        <section id="cocurriculars" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50"><Cocurriculars /></section>
        <section id="extracurriculars" className="py-20 bg-white"><Extracurriculars /></section>
        <section id="stickers" className="py-20 bg-gradient-to-br from-purple-200 to-blue-200"><StickerZone /></section>
        <section id="contact" className="py-20 bg-gradient-to-bl from-purple-300 to-blue-300"><Contact /></section>
      </main>
    </>
  );
}
