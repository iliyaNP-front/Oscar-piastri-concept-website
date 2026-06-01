export default function HeroVideo() {
  return (
    <video
      className="absolute inset-0 w-full h-full object-cover"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
    >
      <source src="/oscarVid.mp4" type="video/mp4" />
    </video>
  );
}
