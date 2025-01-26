import { motion } from "framer-motion";

const Title = ({ title, subTitle }: { title: string; subTitle: string }) => {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-center"
    >
      <div className="flex flex-col items-center justify-center">
        <span className="text-gray-500 font-semibold text-lg">{subTitle}</span>
        <span className="text-white font-semibold text-4xl">{title}</span>
      </div>
    </motion.div>
  );
};

export default Title;
