import Copy from "../Copy";
import HeroVideo from "../HeroVideo";

export default function LandingPage() {
  return (
    <section className="sticky top-0 z-0 h-screen w-full overflow-hidden">
      <HeroVideo />
      <div className="absolute flex justify-center items-center w-full h-full bg-[#0000006e]">
        <div className="flex flex-col justify-center items-center">
          <h2 className="Hero-num text-[128px] w-full text-right -mb-20 text-[#FF8000]">
            81
          </h2>
          <Copy blockColor="#FF8000">
            <h1 className="font-black text-[#FF8000] tracking-tighter LandMainText text-[135px]">
              OSCAR <span className="text-white">PIASTRI</span>
            </h1>
          </Copy>

          <h2 className="text-left w-full LandSecText font-light font-formula text-[#ffffff79] -mt-10 text-[32px]">
            Formula 1 driver . Mclaren
          </h2>
        </div>
      </div>
    </section>
  );
}
