import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export function Footer() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="rounded-md p-6 overflow-hidden grid grid-cols-12 bg-background mt-1 gap-4 md:gap-0"
    >
      <div className="col-span-12 md:col-span-3 flex flex-col gap-2">
        <h3 className="flex gap-2">
          <img src="ModusLogo.svg" alt="" />
          Modus
        </h3>
        <p className="text-xs text-secondary max-w-[20ch]">
          WE CREATE INNOVATIVE ARCHITECTURAL SOLUTIONS THAT INSPIRE AND ENDURE.
        </p>
        <p className="text-xs text-secondary max-w-[20ch]">
          This site is for test purposes only. This isn't a real website.
        </p>
      </div>
      <div className="flex flex-col text-secondary col-span-12 md:col-span-3">
        <h4 className="text-xs mb-4">MENU</h4>
        <NavLink to="/about" className="text-lg">
          About
        </NavLink>
        <NavLink to="/projects" className="text-lg">
          Projects
        </NavLink>
        <NavLink to="/services" className="text-lg">
          Services
        </NavLink>
        <NavLink to="/contact" className="text-lg">
          Contact Us
        </NavLink>
      </div>
      <div className="flex flex-col text-secondary col-span-12 md:col-span-3">
        <h4 className="text-xs mb-4">FOLLOW US</h4>
        <a href="" className="text-lg">
          LinkedIn
        </a>
        <a href="" className="text-lg">
          X (Twitter)
        </a>
        <a href="" className="text-lg">
          Instagram
        </a>
      </div>
      <div className="flex flex-col text-secondary col-span-12 md:col-span-3">
        <h4 className="text-xs mb-4">ADDRESS</h4>
        <p>123 Architecture Street</p>
        <p>City, State 12345</p>
      </div>
      <div className="col-span-12 mt-12">
        <img src="LogoFooter.svg" alt="" />
      </div>
    </motion.div>
  );
}
