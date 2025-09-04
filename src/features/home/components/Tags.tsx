import { Dispatch, SetStateAction } from "react";
import { TAGS_TABS } from "@/data/tabs";

export const ShiftHightlightTabs = ({
  selected,
  setSelected,
}: {
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
}) => {
  const handleTabClick = (id: string) => {
    setSelected(id);
    const tagsSection = document.getElementById("tags-header");
    if (tagsSection) {
      const isDesktop = window.innerWidth >= 1024;
      const offset = isDesktop ? -110 : -140;
      const elementPosition = tagsSection.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <div id="tags-header" />
      <div className="sticky top-[7rem] z-10 bg-slate-100/95 backdrop-blur-sm pt-4 md:pt-4 pb-4 lg:top-[6.8rem] lg:pt-4 lg:pb-4">
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 lg:grid-cols-6">
          {TAGS_TABS.map((t) => (
            <ToggleButton
              key={t.id}
              id={t.id}
              selected={selected}
              setSelected={handleTabClick}
            >
              {t.title}
            </ToggleButton>
          ))}
        </div>
      </div>
    </>
  );
};

const ToggleButton = ({
  children,
  selected,
  setSelected,
  id,
}: {
  children: string;
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
  id: string;
}) => {
  return (
    <div
      className={`rounded-lg transition-colors ${
        selected === id ? "bg-black" : "bg-zinc-900"
      }`}
    >
      <button
        onClick={() => setSelected(id)}
        className={`w-full origin-top-left rounded-lg border py-3 text-xs font-medium transition-all md:text-base ${
          selected === id
            ? "-translate-y-1 border-black bg-white text-black"
            : "border-zinc-900 bg-white text-zinc-900 hover:-rotate-2"
        }`}
      >
        {children}
      </button>
    </div>
  );
};
