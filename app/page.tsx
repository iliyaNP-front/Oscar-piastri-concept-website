import LandingPage from "@/component/Sections/LandingPage";
import Media from "@/component/Sections/Media";
import NextRace from "@/component/Sections/NextRace";
import OscarPara from "@/component/Sections/OscarPara";
import Sponsers from "@/component/Sections/Sponsers";
import Stats from "@/component/Sections/Stats";

export default function Home() {
  return (
    <main>
      <LandingPage />
      <div className="relative w-full bg-[#141414] pb-30">
        <Stats />
        <OscarPara />
        <NextRace />
        <Media />
        <Sponsers />
      </div>
    </main>
  );
}
