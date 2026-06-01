export default function Media() {
  return (
    <section className="w-full py-120 gap-2 MediaSection flex flex-col MeciaSec gap-30 justify-center items-center overflow-x-hidden">
      <h1 className="text-[90px] font-bold MediaTitle text-[#EDEDED] tracking-tighter">
        ON <span className="text-[#FF8000] font-formula">TRACK</span>
      </h1>
      <div className="flex MediaHolder justify-center items-center">
        <div
          style={{ backgroundImage: "url(./mediaImg/Media1.jpg)" }}
          className="w-90 h-130 MediaCard bg-center bg-cover bg-no-repeat  rounded-2xl -rotate-22 hover:mr-30 hover:scale-110 transition-all duration-125 ease sm:translate-x-65 translate-y-20 bg-amber-600"
        ></div>
        <div
          style={{ backgroundImage: "url(./mediaImg/Media2.webp)" }}
          className="w-90 h-130 MediaCard bg-center bg-cover bg-no-repeat  rounded-2xl z-2 -rotate-12 hover:mr-30 hover:ml:10 hover:scale-110 transition-all ease duration-125 translate-x-25 bg-blue-500"
        ></div>
        <div
          style={{ backgroundImage: "url(./mediaImg/Media3.webp)" }}
          className="w-90 h-130 MediaCard rounded-2xl z-3 bg-center bg-cover bg-no-repeat bg-emerald-200 hover:mx-30 hover:scale-110 transition-all ease duration-125 -translate-y-10"
        ></div>
        <div
          style={{ backgroundImage: "url(./mediaImg/Media4.png)" }}
          className="w-90 h-130 MediaCard bg-center bg-cover bg-no-repeat rounded-2xl z-2 rotate-12 hover:ml-30 hover:mr:10 transition-all ease duration-125 -translate-x-25  hover:scale-110 bg-pink-500"
        ></div>
        <div
          style={{ backgroundImage: "url(./mediaImg/Media5.webp)" }}
          className="w-90 h-130 MediaCard bg-center bg-cover bg-no-repeat rounded-2xl rotate-22 hover:ml-30 hover:scale-110 transition-all duration-125 ease sm:-translate-x-65 translate-y-20 bg-emerald-400"
        ></div>
      </div>
    </section>
  );
}
