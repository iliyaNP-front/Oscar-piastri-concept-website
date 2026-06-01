import Image from "next/image";

export default function Sponsers() {
  return (
    <section className="w-full py-50 flex flex-col gap-5">
      <div className="px-8 lg:px-20">
        <h1 className="text-[50px] font-bold tracking-tighter text-[#EDEDED]">
          PARTNERS
        </h1>
      </div>
      <div className="w-full py-20 PartnersDiv flex justify-around items-center bg-[#ffffff01]">
        <div className="relative Partners w-30 h-30">
          <Image src="/GoogleLogo.png" alt="Google" fill />
        </div>
        <div className="relative Partners w-30 h-30">
          <Image src="/MonsterLogo.png" alt="Google" fill />
        </div>
        <div className="relative Partners w-30 h-30">
          <Image src="/QuadLogo.png" alt="Google" fill />
        </div>
        <div className="relative Partners w-30 h-30">
          <Image src="/Grill'dLogo.png" alt="Google" fill />
        </div>
      </div>
    </section>
  );
}
