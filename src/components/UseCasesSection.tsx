import { motion, useInView } from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

type UseCaseType = {
  id: number;
  title: string;
  description: string;
  image: string;
  contentPosition: "l" | "r";
};

const useCases: UseCaseType[] = [
  {
    id: 1,
    title: "1:1 meetings",
    description: "Contextor listens to the 1:1 meeting and gives you live, context-aware responses to questions, and recalls information from earlier in the discussion so you never lose the thread.",
    image: "https://cdn.prod.website-files.com/66b0861f12450487094f1c99/66f2769a7327d0855239f0ad_meeting-summaries-visual.avif",
    contentPosition: "r"
  },
  {
    id: 2,
    title: "Interviews",
    description: "Contextor listens to the interview and gives you live, context-aware responses to questions, and recalls information from earlier in the discussion so you never lose the thread.",
    image: "https://media.istockphoto.com/id/1405689267/photo/student-girl-in-headphones-making-video-call.jpg?s=612x612&w=0&k=20&c=X_tvHaDdKWS6OCgq0Z554gXzb3rjITtc6K3QPnzbY9E=",
    contentPosition: "l"
  },
  {
    id: 3,
    title: "Product demos",
    description: "Contextor listens to the demo and gives you live, context-aware responses to questions, and recalls information from earlier in the discussion so you never lose the thread.",
    image: "https://fireflies.ai/website/assets/_next/image?url=%2Fwebsite%2Fassets%2F_next%2Fstatic%2Fmedia%2Fcapture-meeting-extension-desktop.762dacf1.png&w=3840&q=75",
    contentPosition: "r"
  }
];

export const UseCasesSection = () => {
  const [useCaseInView, setUseCaseInView] = useState<UseCaseType>(useCases[0]);

  return (
    <section id="use-cases" className="relative mx-auto max-w-7xl pt-20 px-6 select-none">
      <h1 className="text-5xl font-medium max-w-full mb-8 text-gray-900">
        How Contextor changes how you think.
      </h1>

      <div className="-my-[20vh]">
        <SlidingUseCaseDisplay useCaseInView={useCaseInView} />

        {/* Offsets the height of SlidingUseCaseDisplay so that it renders on top of Content to start */}
        <div className="-mt-[100vh] hidden md:block" />

        {useCases.map((useCase) => (
          <Content
            key={useCase.id}
            useCaseInView={useCase}
            setUseCaseInView={setUseCaseInView}
            {...useCase}
          />
        ))}
        </div>
    </section>
  );
};

const SlidingUseCaseDisplay = ({
  useCaseInView,
}: {
  useCaseInView: UseCaseType;
}) => {
  return (
    <div
      style={{
        justifyContent:
          useCaseInView.contentPosition === "l" ? "flex-end" : "flex-start",
      }}
      className="pointer-events-none sticky top-0 z-10 hidden h-[90vh] w-full items-center justify-start md:flex"
    >
      <motion.div
        layout
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
        }}
        className="h-fit w-3/5 rounded-xl p-8"
      >
        <UseCaseDisplay useCaseInView={useCaseInView} />
      </motion.div>
    </div>
  );
};

const Content = ({
  setUseCaseInView,
  useCaseInView,
}: {
  setUseCaseInView: Dispatch<SetStateAction<UseCaseType>>;
  useCaseInView: UseCaseType;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-150px",
    amount: 0.5
  });

  useEffect(() => {
    if (isInView) {
      setUseCaseInView(useCaseInView);
    }
  }, [isInView, useCaseInView]);

  return (
    <section
      ref={ref}
      className="relative z-0 flex h-fit md:h-screen"
      style={{
        justifyContent:
          useCaseInView.contentPosition === "l" ? "flex-start" : "flex-end",
      }}
    >
      <div className="grid h-full w-full place-content-center px-4 py-12 md:w-2/5 md:px-8 md:py-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <span className="rounded-full bg-black px-2 py-1.5 text-xs font-medium text-white">
            {useCaseInView.title}
          </span>
          <p className="my-3 text-5xl font-bold text-black">{useCaseInView.title}</p>
          <p className="text-gray-600">{useCaseInView.description}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="mt-8 block md:hidden"
        >
          <UseCaseDisplay useCaseInView={useCaseInView} />
        </motion.div>
      </div>
    </section>
  );
};

const UseCaseDisplay = ({ useCaseInView }: { useCaseInView: UseCaseType }) => {
  return (
    <div className="relative h-96 w-full rounded-xl bg-black shadow-xl overflow-hidden">
      <div className="flex w-full gap-1.5 rounded-t-xl bg-gray-900 p-3">
        <div className="h-3 w-3 rounded-full bg-red-500" />
        <div className="h-3 w-3 rounded-full bg-yellow-500" />
        <div className="h-3 w-3 rounded-full bg-green-500" />
      </div>
      <div className="relative h-full">
        <img 
          src={useCaseInView.image} 
          alt={useCaseInView.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      </div>
    </div>
  );
};
