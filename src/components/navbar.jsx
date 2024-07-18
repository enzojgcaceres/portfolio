"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./navLink";
import { motion } from "framer-motion";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contacto" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  const MotionLink = motion(Link);

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">

      {/* LOGO */}
      <div 
       className=" hidden md:flex lg:flex xl:w-1/3 xl:justify-start"
      // className="md:hidden lg:flex xl:w-1/3 xl:justify-center"
      >
        <MotionLink
          href="/"
          className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center" whileHover={{
            scale: 1.5,
            backgroundColor:["#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#121212"],
            transition: {duration: 1, repeat: Infinity}
          }}
        >
          <span className="text-white mr-1 hover:text-black">Enzo</span>
          <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center hover:bg-black hover:text-white">
            .code
          </span>
        </MotionLink>
      </div>

      {/* LINKS */}
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>
      
      {/* SOCIAL */}
      <div className="hidden md:flex gap-6 w-1/3 justify-end">
        <Link href="https://github.com/enzojgcaceres">
          <Image src="/github.png" alt="" width={24} height={24} />
        </Link>
        {/* <Link href="/">
          <Image src="/dribbble.png" alt="" width={24} height={24} />
        </Link> */}
        <Link href="https://www.instagram.com/teleraiders_ok/?hl=es">
          <Image src="/instagram.png" alt="" width={24} height={24} />
        </Link>
        {/* <Link href="/">
          <Image src="/facebook.png" alt="" width={24} height={24} />
        </Link> */}
        {/* <Link href="/">
          <Image src="/pinterest.png" alt="" width={24} height={24} />
        </Link> */}
        <Link href="https://www.linkedin.com/in/enzo-caceres-5aa944269/">
          <Image src="/linkedin.png" alt="" width={24} height={24} />
        </Link>
      </div>
      {/* RESPONSIVE MENU */}
      <div className="md:hidden">
        {/* MENU BUTTON */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>
        {/* MENU LIST */}
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
          >
            {links.map((link) => (
              <motion.div
                variants={listItemVariants}
                className=""
                key={link.title}
              >
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
