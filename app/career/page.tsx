import Copy from "@/component/Copy";
import CountUp from "@/component/CountUp";
import Media from "@/component/Sections/Media";
import Timeline from "@/component/TimelineSec";
import Image from "next/image";

interface CareerStage {
  id: number;
  title: string;
  description: string;
  image: string;
}

const careerTimeline: CareerStage[] = [
  {
    id: 1,
    title: "Formula Renault",
    description:
      "Oscar Piastri's 2019 Formula Renault Eurocup season marked the first clear signal of his long-term potential. Competing in a highly competitive grid, he combined consistency with precise race execution, securing multiple victories and podiums on the way to the championship. Rather than relying on raw aggression, Piastri built results through measured decision-making and adaptability across varying circuits and conditions. The title confirmed his ability to learn quickly and deliver under pressure, setting the foundation for his rapid rise through the junior categories.",
    image: "/careerImage/RenaultImg.jpg",
  },
  {
    id: 2,
    title: "FIA Formula 3",
    description:
      "Oscar Piastri's 2020 Formula 3 season confirmed his rapid adaptability at the highest level of junior competition. In his rookie year, he combined consistency with intelligent race management to secure the championship, reinforcing his reputation as a driver who delivers results through control rather than excess risk.",
    image: "/careerImage/F3Img.jpeg",
  },
  {
    id: 3,
    title: "FIA Formula 2",
    description:
      "In his 2021 Formula 2 rookie season, Oscar Piastri demonstrated complete race management across a highly competitive grid. He combined strong qualifying performance with controlled tyre usage and situational awareness in wheel-to-wheel battles, securing multiple victories and consistently scoring points. The championship completed a rare run of consecutive rookie titles and confirmed his readiness for the demands of Formula 1.",
    image: "/careerImage/F2Img.jpg",
  },
  {
    id: 4,
    title: "FIA Formula 1",
    description:
      "Oscar Piastri entered Formula 1 with McLaren in 2023 and adapted quickly to the demands of the category. In his rookie season, he showed strong qualifying pace, controlled racecraft, and a low error rate, outperforming typical expectations for a first-year driver. By his second season, he was consistently competing at the front of the midfield, establishing himself as a reliable long-term asset rather than a developmental prospect.",
    image: "/careerImage/F1Img.jpg",
  },
];

export default function Career() {
  return (
    <>
      <main className="w-full flex flex-col">
        <section
          className="w-full h-screen sticky top-0 z-0 bg-cover bg-top"
          style={{ backgroundImage: "url(./bg/CareerBg.jpg)" }}
        >
          <div className="w-full h-full bg-[#141414b4] flex flex-col justify-center items-center">
            <Copy blockColor="#FF8000">
              <h1 className="font-black CareerTitle text-[90px] font-formula text-[#ededed] tracking-tighter">
                CAREER JOURNEY
              </h1>
            </Copy>
          </div>
        </section>
        <div className="relative z-5 CareerSec px-8 lg:px-20 pt-20 bg-[#141414]">
          <div>
            {careerTimeline.map((stage) => (
              <Timeline key={stage.id} stage={stage} />
            ))}
          </div>
          <div className="w-full -mt-5">
            <h1 className="text-center text-[60px] CareerChampionsTitle font-formula text-[#ededed] font-black">
              Championship Standings
            </h1>
            <div className="border-t-2 border-[#ededed] rounded-2xl flex flex-col w-full p-4">
              <div className="grid grid-cols-3 text-[#9A9A9A]">
                <p>Years</p>
                <p>Postions</p>
                <p>Points</p>
              </div>
              <div className="grid grid-cols-3 CareerPoints text-[40px] font-extrabold mb-4 font-formula text-[#EDEDED]">
                <h2>2025</h2>
                <h2>3RD</h2>
                <h2>
                  <CountUp end={410} />
                </h2>
              </div>
              <div className="grid grid-cols-3 CareerPoints text-[40px] mb-4 font-extrabold font-formula text-[#EDEDED]">
                <h2>2024</h2>
                <h2>4RD</h2>
                <h2>
                  <CountUp end={292} />
                </h2>
              </div>
              <div className="grid grid-cols-3 CareerPoints text-[40px] mb-4 font-extrabold font-formula text-[#EDEDED]">
                <h2>2023</h2>
                <h2>9RD</h2>
                <h2>
                  <CountUp end={97} />
                </h2>
              </div>
            </div>
          </div>
          <h1 className="text-center mt-50 text-[#EDEDED] text-[80px] OscarStatsTitle font-formula font-black tracking-tighter">
            <span className="text-[#FF8000]">OSCAR</span>'S STATS
          </h1>
          <div className="w-full gap-5 flex lg:flex-row flex-col items-center mt-30">
            <div className=" w-full lg:w-3/6">
              <div>
                <h2 className="text-[#EDEDED] font-bold text-[50px] tracking-tighter">
                  <span className="text-[#FF8000]">70</span> RACE STARTS
                </h2>
                <h2 className="text-[#EDEDED] font-bold text-[50px] tracking-tighter">
                  <span className="text-[#FF8000]">6</span> POLE POSITIONS
                </h2>
                <h2 className="text-[#EDEDED] font-bold text-[50px] tracking-tighter">
                  <span className="text-[#FF8000]">9</span> RACE WINS
                </h2>
                <h2 className="text-[#EDEDED] font-bold text-[50px] tracking-tighter">
                  <span className="text-[#FF8000]">4</span> DNF'S
                </h2>
              </div>
              <div
                className="w-full h-130 bg-center bg-cover bg-no-repeat rounded-sm"
                style={{ backgroundImage: "url(./careerImage/StatsImg.jpg)" }}
              ></div>
            </div>
            <div className="lg:w-3/6 w-full flex flex-col items-center">
              <div>
                <h2 className="font-formula text-[#EDEDED] text-[40px] font-bold">
                  BIOGRAPHY
                </h2>
                <div className="w-full OscarBio flex gap-25 mt-10">
                  <div className="flex flex-col gap-2">
                    <p className="text-[#9A9A9A] text-[14px]">Date of Birth</p>
                    <p className="text-[#EDEDED] font-formula text-[30px] font-bold">
                      06/04/2001
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-[#9A9A9A] text-[14px]">Place of Birth</p>
                    <p className="text-[#EDEDED] font-formula text-[30px] font-bold">
                      Melbourne, Victoria
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-[#9A9A9A] max-w-150 border-t-2 border-[#FF8000] text-justify">
                Born in Melbourne, just a stone’s throw away from the Australian
                Grand Prix venue, a young Oscar Piastri’s dreams of one day
                racing in Formula 1 were ignited by the sport’s star drivers
                roaring around his local streets, otherwise known as Albert
                Park. But it would take huge commitment and sacrifice to turn
                that dream into a reality, with a move to Europe – made by the
                likes of fellow countrymen Mark Webber and Daniel Ricciardo
                before him – the only way to go up against the best and catch
                the attention of the sport’s decision-makers. Using success on
                the Australian karting scene as a springboard, Piastri continued
                to learn the craft in championships across Europe, before
                getting his first taste of single-seater competition as a
                15-year-old – two podium finishes in F4 UAE a sign of things to
                come. From there, success flowed. British F4 runner-up. Formula
                Renault champion. F3 champion. F2 champion (by more than 50
                points). Piastri did not simply climb the junior single-seater
                ladder, he charged up it to knock loudly on the F1 door. So
                impressive was Piastri that two F1 teams squabbled over his
                services for 2023, adding a new dimension to the driver market
                and so-called ‘silly season’. McLaren, and not long-time backers
                Alpine, won out and their rookie repaid them in spades, taking
                two podiums in a highly impressive debut campaign. It was no
                flash in the pan. In 2024 Piastri proved vital in McLaren
                securing their first constructors' title since 1998, pushing
                more experienced team mate Lando Norris all the way and scoring
                Grand Prix wins in Hungary and Azerbaijan to finish fourth in
                the driver standings. The upward trajectory continued in 2025,
                Piastri emerging as a genuine title contender in only his third
                year of F1 competition. He led the standings for much of the
                campaign, winning seven Grands Prix, before a late-season lull
                left him trailing team mate Norris – to whom he lost out in a
                three-way title decider at the Abu Dhabi finale. No wonder few
                in the paddock – particularly those at McLaren – consider the
                young Melburnian a World Champion in the making.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Media />
    </>
  );
}
