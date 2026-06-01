import Link from "next/link";
import CountUp from "../CountUp";
import { FiArrowRight } from "react-icons/fi"

export default function Stats(){
    return (
        <section className="relative bg-center bg-no-repeat bg-cover w-full z-5" style={{backgroundImage: 'url(./bg/StatsBack.jpg)', boxShadow: "0px 10px 350px inset rgb(0, 0, 0)"}}>
            <div className="bg-[#141414f5] flex flex-col items-center StatsSec px-20 pt-120 pb-60 w-full h-full">
                <div className="flex flex-col">
                    <div className="grid grid-cols-2 grid-rows-2 StatsAdjust w-full text-center gap-20">
                            <h2 className="text-[#FFF1E6] text-6xl StatsTit font-bold">WORLD CHAMPIONS: <span className="statsNum text-[#FF8000] text-8xl font-medium"><CountUp end={0}/></span></h2>
                            <h2 className="text-[#FFF1E6] text-6xl StatsTit font-bold">RACE STARTS: <span className="statsNum text-[#FF8000] text-8xl font-medium"><CountUp end={70}/></span></h2>
                            <h2 className="text-[#FFF1E6] text-6xl StatsTit font-bold">PODIUMS: <span className="statsNum text-[#FF8000] text-8xl font-medium"><CountUp end={26}/></span></h2>
                            <h2 className="text-[#FFF1E6] text-6xl StatsTit font-bold">RACE WINS: <span className="statsNum text-[#FF8000] text-8xl font-medium"><CountUp end={9}/></span></h2>
                    </div>
                </div>
                <div className="w-full text-left mt-10">
                    <Link className="text-[#ff8000d7] font-formula w-40 text-md underline flex items-center gap-1" href="/career">Oscar's career <FiArrowRight /></Link>
                </div>
            </div>
        </section>
    )
}