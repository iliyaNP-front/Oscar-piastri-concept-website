import Copy from "../Copy";

export default function OscarPara() {
  return (
    <section className="w-full px-8 lg:px-20 flex OscarParaSec py-100 justify-center">
      <Copy duration={1} blockColor="#FF8000">
        <span className="text-[#EDEDED] font-extrabold text-9xl OscarPara tracking-tighter text-center mx-auto">
          BEYOND THE NUMBERS, CONSISTENCY AND COMPOSURE DEFINE{" "}
          <span className="text-[#FF8000]">OSCAR’S</span> APPROACH ON TRACK.
        </span>
      </Copy>
    </section>
  );
}
