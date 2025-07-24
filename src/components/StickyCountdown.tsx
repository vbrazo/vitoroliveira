import { useAnimate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const COUNTDOWN_FROM = "2025-07-25";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

type Units = "Day" | "Hour" | "Minute" | "Second";

const StickyCountdown = () => {
  return (
    <div className="sticky left-0 right-0 top-0 z-50 h-[42px] md:h-[38px] w-full bg-indigo-600 px-2 text-white shadow-md cursor-pointer"
      onClick={() => {
        window.open("https://contextor.app/en?utm_source=vitoroliveira.ca&utm_medium=website&utm_campaign=personal_site_referral", "_blank");
      }}>
      <div className="mx-auto flex flex-col md:flex-row w-fit max-w-5xl flex-wrap items-center justify-center gap-x-2 text-sm md:text-sm">
        <div className="flex items-center justify-center gap-1.5 py-2.5 md:py-1.5">
          <div className="flex flex-row emoji">
            <img src="https://cdn.croct.io/assets/icon/emoji/rocket.png" alt="Rocket emoji" className="root-18nkjmo w-4 h-4" />
            &nbsp; I've just launched an AI Interview Coach!
          </div>
          <div className="flex items-center gap-1.5">
            <span className="flex items-center bg-transparent rounded-full border border-[#cbcdfe] hover:bg-[#cbcdfe] hover:text-[#4f46e5] h-6 px-3 text-[#f7f7ff] text-xs font-medium transition-colors duration-100 ease-out">
              Learn more
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const CountdownItem = ({ unit, text }: { unit: Units; text: string }) => {
  const { ref, time } = useTimer(unit);
  return (
    <div className="flex w-fit items-center justify-center gap-1.5 py-1">
      <div className="relative w-full overflow-hidden text-center">
        <span
          ref={ref}
          className="block font-mono text-sm font-semibold md:text-base"
        >
          {time}
        </span>
      </div>
      <span>{text}</span>
    </div>
  );
};

export default StickyCountdown;

const useTimer = (unit: Units) => {
  const [ref, animate] = useAnimate();

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeRef = useRef(0);

  const [time, setTime] = useState(0);

  useEffect(() => {
    intervalRef.current = setInterval(handleCountdown, 1000);

    return () => clearInterval(intervalRef.current || undefined);
  }, []);

  const handleCountdown = async () => {
    const end = new Date(COUNTDOWN_FROM);
    const now = new Date();
    const distance = +end - +now;

    let newTime = 0;

    if (unit === "Day") {
      newTime = Math.floor(distance / DAY);
    } else if (unit === "Hour") {
      newTime = Math.floor((distance % DAY) / HOUR);
    } else if (unit === "Minute") {
      newTime = Math.floor((distance % HOUR) / MINUTE);
    } else {
      newTime = Math.floor((distance % MINUTE) / SECOND);
    }

    if (newTime !== timeRef.current) {
      // Exit animation
      await animate(
        ref.current,
        { y: ["0%", "-50%"], opacity: [1, 0] },
        { duration: 0.35 }
      );

      timeRef.current = newTime;
      setTime(newTime);

      // Enter animation
      await animate(
        ref.current,
        { y: ["50%", "0%"], opacity: [0, 1] },
        { duration: 0.35 }
      );
    }
  };

  return { ref, time };
};
