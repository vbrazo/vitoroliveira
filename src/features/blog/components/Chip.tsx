import { motion } from "framer-motion";

const Chip = ({
    text,
    selected,
    setSelected,
    }: {
    text: string;
    selected: boolean;
    setSelected: (value: string) => void;
}) => {
    return (
        <button
        onClick={() => setSelected(text)}
        className={`${
            selected
            ? "text-white"
            : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
        } text-sm transition-colors px-2.5 py-0.5 rounded-md relative`}
        >
        <span className="relative z-10">{text}</span>
        {selected && (
            <motion.span
            layoutId="pill-tab"
            transition={{ type: "spring", duration: 0.5 }}
            className="absolute inset-0 z-0 bg-black rounded-md"
            ></motion.span>
        )}
        </button>
    );
};

export default Chip;
