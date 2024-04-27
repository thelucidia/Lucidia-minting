export function Video() {
  return (
    <section className="video py-10 px-10 lg:px-20 flex items-center">
      <img
        src="../hero/icon2.png"
        alt="Herobg"
        style={{
          zIndex: 50,
          margin: "-150px",
          marginTop: "750px"
        }}
        className="flex object-cover text-image left-0"
      />
      <div className="video-view flex items-center py-10 px-60">
        <div className="h-[700px] w-auto sm:clipped2 bg-[#B0EB10] flex items-center justify-center scale-x-[-1]">
          <video
            autoPlay
            muted
            loop
            src="/videos/curseof.mp4"
            preload={'auto'}
            playsInline
            className="w-full h-screen object-cover"
          />
        </div>
        <div className="video-discription text-center mt-8">
          <p className="text-[#B4B6BF] font-primary leading-[150%] group-hover:text-white">
            Curse Of The Pharaoh is an action/adventure/survival game set in a post-apocalyptic world overrun by zombies. Collect weapon, bullet, and fuel props. Travel through open-world environment with different biomes.
          </p>
        </div>
      </div>
      <img
        src="../hero/icon1.png"
        alt="Herobg"
        style={{
          zIndex: 50,
          marginLeft: "-90px",
          marginRight: "-120px",
          marginTop: "-800px"
        }}
        className="flex object-cover text-image right-0"
      />
    </section>
  );
}

export default Video;
