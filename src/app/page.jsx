"use client";

import  Link  from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Homepage = () => {

  const MotionLink = motion(Link);
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row gap-4 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative hidden lg:block">
          <Link href="/testanimation">
          <Image src="/robot.png" alt="" fill className="object-contain" />
          </Link>
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold">
          Creando Experiencias Digitales.
          </h1>
          {/* DESC */}
          <p className="md:text-xl">
          Bienvenido a mi lienzo web, donde la innovación y la creatividad son la unica regla.  
          Mi portafolio muestra 
          una colección diversa de proyectos que reflejan mi compromiso con la excelencia, con la estética y con el dominio del codigo.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <MotionLink href="/portfolio" whileHover={{
              backgroundColor:["#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#121212"],
              transition: {duration: 1, repeat: Infinity}
            }}>
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white hover:bg-gradient-radial-tornasol hover:text-black hover:font-bold">
              Mira mis trabajos!
            </button>
            </MotionLink>
            <MotionLink href="/contact" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
            <button className="p-4 rounded-lg ring-1 ring-black hover:bg-white hover:text-black hover:font-bold">
              Contactame
            </button>
            </MotionLink>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
