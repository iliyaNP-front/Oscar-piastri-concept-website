export default function NotFound() {
  return (
    <div className="w-full h-screen text-center flex flex-col justify-center items-center px-5">
      <h1 className="font-formula text-[#FF8000] text-[160px]">
        4<span className="text-[#EDEDED]">0</span>4
      </h1>
      <h2 className="sm:text-[50px] text-[30px] -mt-10 font-bold text-[#EDEDED]">
        Page Not Found
      </h2>
      <p className="text-[#9A9A9A] max-w-160">
        The page you’re trying to reach is no longer on the grid. It may have
        been moved or retired from the session. Use the navigation to continue
        your run.
      </p>
    </div>
  );
}
