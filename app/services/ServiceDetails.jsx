import { motion } from "framer-motion";

const colors = {
  red: "#c72229",
  purple: "#775090",
  blue: "#45487a",
  green: "#169e44",
};

export default function ServiceDetails({ service, isExpanded }) {
  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{
        height: isExpanded ? "auto" : 0,
        opacity: isExpanded ? 1 : 0,
      }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden"
    >
      {isExpanded && (
        <div className="bg-white rounded-xl shadow-lg p-6 mt-4">
          <h3
            className="text-2xl font-bold mb-4"
            style={{ color: colors[service.color] }}
          >
            {service.title}
          </h3>
          <div className="space-y-4">
            {service.details.map((detail, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start"
              >
                <motion.svg
                  className="w-5 h-5 mr-3 flex-shrink-0 mt-1"
                  style={{ color: colors[service.color] }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  whileHover={{ scale: 1.2 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </motion.svg>
                <p className="text-gray-600">{detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}
