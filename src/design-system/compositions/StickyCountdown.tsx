import { stickyCta } from "@/data/sticky-countdown";

const StickyCountdown = () => {
  return (
    <div className="sticky left-0 right-0 top-0 z-50 h-[42px] md:h-[38px] w-full bg-indigo-600 px-2 text-white shadow-md cursor-pointer"
      onClick={() => {
        window.open(stickyCta.url, "_blank");
      }}>
      <div className="mx-auto flex flex-col md:flex-row w-fit max-w-5xl flex-wrap items-center justify-center gap-x-2 text-sm md:text-sm">
        <div className="flex items-center justify-center gap-1.5 py-2.5 md:py-1.5">
          <div className="flex flex-row emoji">
            <img src="https://cdn.croct.io/assets/icon/emoji/rocket.png" alt="Rocket emoji" className="root-18nkjmo w-4 h-4" />
            &nbsp; {stickyCta.label}
          </div>
          <div className="flex items-center gap-1.5">
            <span className="flex items-center bg-transparent rounded-full border border-[#cbcdfe] hover:bg-[#cbcdfe] hover:text-[#4f46e5] h-6 px-3 text-[#f7f7ff] text-xs font-medium transition-colors duration-100 ease-out">
              {stickyCta.action}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyCountdown;
