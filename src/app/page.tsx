import Image from "next/image";
import TVImg from "./assets/images/tv-img.png";
import HeroSectionBGImage from "./assets/images/hero-bg-img.jpg";
import StrangerImg from "./assets/images/mobile-stranger-img.jpg";
import StrangerThings from "./assets/images/stranger-things.png";
import DownloadIcon from "./assets/images/download-icon.gif";

export default function Home() {
  return (
    <div className="relative h-[43rem]">
      <div className="w-full absolute z-10 flex justify-between items-center xs:px-4 md:px-8 xl:px-64 py-4">
        <h1 className="xs:text-[1.5rem] sm:text-[3rem] text-red font-bold">NETFLIX</h1>
        <div className="flex gap-5 items-center">
          <select className="px-4 py-2 bg-light-black text-white border border-gray rounded">
            <option>English</option>
            <option>Hindi</option>
          </select>
          <button className="bg-red text-white px-2 py-1 h-1/2 border border-red rounded">Sign In</button>
        </div>
      </div>
      <div className="w-full h-full overflow-hidden relative">
        <Image className="w-full h-full object-cover" src={HeroSectionBGImage} alt=""/>
        <div className="absolute top-0 bottom-0 left-0 right-0 background text-center flex flex-col justify-center items-center gap-3 text-white xs:px-5 sm:px-16 md:px-10">
          <h1 className="xs:text-4xl md:text-5xl font-extrabold">Unlimited movies, TV shows and more</h1>
          <p className="xs:text-xl md:text-2xl">Watch anywhere. Cancel anytime.</p>
          <p className="text-xl">Ready to watch? Enter your email to create or restart your membership.</p>
          <div className="w-full flex xs:flex-col md:flex-row justify-center items-center gap-4">
            <input className="xs:w-full md:w-7/12 lg:w-5/12 xl:w-4/12 xxl:w-1/5 px-5 py-3.5 bg-light-black border border-gray rounded" placeholder="Email address"/>
            <button className="bg-red text-2xl font-bold px-7 py-2 border border-red rounded">Get Started</button>
          </div>
        </div>
      </div>
      <div className="w-full bg-dark-gray h-full py-2">
        <div className="w-full h-full bg-black text-white grid xs:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 text-center xs:px-5 lg:px-30 xl:px-64 xxl:px-80">
          <div className="text-white flex flex-col justify-center xs:text-center lg:text-left">
            <h1 className="xs:text-4xl md:text-5xl font-extrabold">Enjoy on your TV</h1>
            <p className="xs:text-xl md:text-2xl">Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
          </div>
          <div className="w-full h-full text-white flex justify-center items-center">
            <div className="relative">
              <Image src={TVImg} alt="" className=""/>
              <video width={"73%"} loop muted autoPlay className="absolute top-[20.7%] left-[13.1%] right-[50%] bottom-[50%]">
                <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" type="video/mp4"/>
              </video>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-dark-gray h-full">
        <div className="w-full h-full bg-black text-white grid xs:grid-cols-reverse-1 md:grid-cols-1 lg:grid-cols-2 text-center xs:px-5 lg:px-30 xl:px-64 xxl:px-80">
          <div className="w-full h-full text-white flex justify-center items-center xs:order-last lg:order-first">
            <div className="relative">
              <Image className="" src={StrangerImg} alt=""/>
              <div className="xs:w-9/12 sm:w-6/12 flex items-center justify-between border-2 border-dark-gray rounded-lg p-3 bg-black absolute top-[72%] xs:left-[13%] sm:left-[25%]">
                <Image className="max-w-[20%] max-h-full object-contain" src={StrangerThings} alt=""/>
                <div>
                  <p>Stranger Things</p>
                  <p className="text-blue">Downloading...</p>
                </div>
                <Image className="max-w-[20%] max-h-full object-contain" src={DownloadIcon} alt=""/>
              </div>
            </div>
          </div>
          <div className="text-white flex flex-col justify-center xs:text-center lg:text-left xs:order-first lg:order-last">
            <h1 className="xs:text-4xl md:text-5xl font-extrabold">Download your shows to watch offline</h1>
            <p className="xs:text-xl md:text-2xl">Save your favourites easily and always have something to watch.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
