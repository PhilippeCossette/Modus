import { NavLink } from "react-router-dom";
import { AnimatedTitle } from "./AnimatedTitle";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

export function Navigation() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? <MobileNavigation /> : <DesktopNavigation />;
}

export function DesktopNavigation() {
  return (
    <nav className="p-6  bg-background rounded-t-md border-b border-grid-line">
      <div className="grid grid-cols-12">
        <div className="col-span-3">
          <AnimatedTitle>
            <NavLink to="/">MODUS</NavLink>
          </AnimatedTitle>
        </div>
        <div className="flex flex-col gap-1 col-span-3 col-start-4 ml-[-10px]">
          <DesktopNavigationItem to="/about">ABOUT</DesktopNavigationItem>
          <DesktopNavigationItem to="/projects">PROJECTS</DesktopNavigationItem>
        </div>
        <div className="flex flex-col gap-1 col-span-3 col-start-7">
          <DesktopNavigationItem to="/services">SERVICES</DesktopNavigationItem>
          <DesktopNavigationItem to="/contact">
            CONTACT US
          </DesktopNavigationItem>
        </div>
        <div className="flex gap-2 max-w-[150px] col-span-3 col-start-10 ml-[14px]">
          <span className="mt-1.5 bg-primary h-[7px] w-[12px]" />
          <NavLink to="/about" className="text-sm text-secondary font-medium">
            <p>1015 CROCKER ST, LOS ANGELES, USA</p>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

function MobileNavigation() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);
  return (
    <div className="relative z-30">
      <nav className="relative z-20 flex border-b border-grid-line justify-between items-center bg-background px-6 py-4 rounded-t-md">
        <AnimatedTitle>
          <NavLink to="/" className="text-lg text-primary">
            MODUS
          </NavLink>
        </AnimatedTitle>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="text-sm text-primary hover:text-primary/70 transition-all"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.span
                key="close"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <IoClose size={20} />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                MENU
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </nav>
      <div className="absolute w-full overflow-hidden">
        <MenuDrawer isOpen={isOpen} />
      </div>
    </div>
  );
}

const MotionNavLink = motion(NavLink);

function DesktopNavigationItem({
  children,
  to,
}: {
  children: React.ReactNode;
  to: string;
}) {
  return (
    <MotionNavLink
      className="flex items-center text-sm text-secondary font-medium"
      to={to}
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      <motion.span
        variants={{
          rest: { width: 0, opacity: 0, marginRight: 0 },
          hover: {
            width: "5px",
            opacity: 1,
            marginRight: "8px",
            transition: { duration: 0.1 },
          },
        }}
        className="h-[5px] bg-primary"
      />
      {/* TEXT */}
      <span>{children}</span>
    </MotionNavLink>
  );
}

function MenuDrawer({ isOpen }: { isOpen: boolean }) {
  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          transition={{ type: "tween", ease: "easeOut", duration: 0.3 }}
          exit={{ y: "-100%" }}
          className="z-20 h-screen p-6 rounded-b-md bg-background top-full w-full left-0 flex flex-col gap-8"
        >
          <div className="flex flex-col text-xl gap-3 text-secondary">
            <NavLink
              className="hover:text-secondary/40 transition-all"
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              className="hover:text-secondary/40 transition-all"
              to="/projects"
            >
              Projects
            </NavLink>
            <NavLink
              className="hover:text-secondary/40 transition-all  "
              to="/services"
            >
              Services
            </NavLink>
            <NavLink
              className="hover:text-secondary/40 transition-all"
              to="/contact"
            >
              Contact Us
            </NavLink>
          </div>
          <NavLink
            to="/about"
            className="flex items-start gap-2 text-sm text-secondary font-medium"
          >
            <div className="w-1.5 h-1.5 mt-1.5 bg-secondary" />
            <p className="w-[15ch]">1015 CROCKER ST, LOS ANGELES, USA</p>
          </NavLink>
          <div className="flex-grow">
            <img
              className="h-[90%] w-full object-cover rounded-md"
              src="BentoPreview.avif"
              alt=""
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
