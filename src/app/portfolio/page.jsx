"use client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import project from "../../../public/travel.png"
import project1 from "../../../public/Captura de pantalla (5).png"
import project2 from "../../../public/4vientos.png"
import project3 from "../../../public/teleraiders.png"
import project4 from "../../../public/rick.png"

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-gradient-radial-tornasol shadow-2xl p-12 mb-4">
      <Link 
      href={link} 
      target="_blank" 
      className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} width={400} height={200} className="w-full h-auto" />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-black font-medium text-xl" >{type}</span>
        <Link href={link} target="_blank" className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-light">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <FaGithub size={24} />  {/* Aquí se añade el ícono de GitHub */}
          </Link>
          <Link href={link} target="_blank" className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold">
            Demo
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({title, type, img, link, github}) => {
  return(
    <article className="w-full flex flex-col items-center justify-between rounded-3xl border border-solid border-dark bg-dark  shadow-2xl p-12 relative">
      <Link href={link} target="_blank" 
      className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} width={400} height={200} className="w-full h-auto" />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-light font-medium text-xl" >{type}</span>
        <Link href={link} target="_blank" className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-light text-left text-3xl font-bold">{title}</h2>
        </Link>
        {/* <p className="my-2 font-medium text-dark">{summary}</p> */}
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <FaGithub size={24} />  
          </Link>
          <Link href={link} target="_blank" className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold"> 
            Demo
          </Link>
        </div>
      </div>

    </article>
  )
}

const PortfolioPage = () => {
  return (
    <>
      <Head>
        <title>Portfolio | Enzo Code + </title>
        <meta name="description" content="Enzo Code + Portfolio" />
      </Head>
      <main className="w-screen flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-200 to-blue-700 mb-12">
        <div className="grid grid-cols-12 gap-24  w-full max-w-screen-xl">
          <div className="col-span-12 mr-1">
            <FeaturedProject
              title="e-commerce"
              summary="E-commerce desarrollado con Node.js, React, Redux, Express, PostgreSQL, Tailwind CSS, plataforma de pagos, login y muchas mas funcionalidades."
              type="Featured Project"
              img={project1}
              link="https://shoe-kingdom-ae164.web.app/index.html"
              github="https://github.com/PF-grupo2/pf-henry-backend"
            />
          </div>
          <div className="col-span-6">
          <Project
              title="e-travel"
              // summary="E-commerce desarrollado con Node.js, React, Redux, Express, PostgreSQL, Tailwind CSS, plataforma de pagos, login y muchas mas funcionalidades."
              type="Project"
              img={project}
              link="https://www.youtube.com/watch?v=rREa9L_dQ_M"
              github="https://github.com/enzojgcaceres"
            />
          </div>
          <div className="col-span-6">
          <Project
              title="4 Vientos"
              // summary="E-commerce desarrollado con Node.js, React, Redux, Express, PostgreSQL, Tailwind CSS, plataforma de pagos, login y muchas mas funcionalidades."
              type="Project"
              img={project2}
              link="https://your-demo-link.com"
              github="https://github.com/enzojgcaceres/4vientos"
            />
          </div>
          <div className="col-span-6">
          <Project
              title="TeleRaiders website"
              // summary="E-commerce desarrollado con Node.js, React, Redux, Express, PostgreSQL, Tailwind CSS, plataforma de pagos, login y muchas mas funcionalidades."
              type="Project"
              img={project3}
              link="https://teleraiders.com.ar/"
              github="https://github.com/enzojgcaceres/teleraiders"
            />
          </div>
          <div className="col-span-6">
          <Project
              title="Rick & Morty App"
              // summary="E-commerce desarrollado con Node.js, React, Redux, Express, PostgreSQL, Tailwind CSS, plataforma de pagos, login y muchas mas funcionalidades."
              type="Project"
              img={project4}
              link="https://your-demo-link.com"
              github="https://github.com/enzojgcaceres/ricardo-ft-45a"
            />
          </div>
          {/* <div className="col-span-12">
            Featured Project
          </div> */}
        </div>
      </main>
    </>
  );
};

export default PortfolioPage;