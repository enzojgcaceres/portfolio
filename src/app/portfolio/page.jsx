"use client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import project from "../../../public/travel.png"
import project1 from "../../../public/Captura de pantalla (5).png"
import project2 from "../../../public/typeportfolio.png"
import project3 from "../../../public/teleraiders.png"
import project4 from "../../../public/smartJuana.png"
import project5 from "../../../public/4vientos-tiendanube.png"
import project6 from "../../../public/mama-app.png"
import project7 from "../../../public/conversorRomano.png"
import project8 from "../../../public/meridaTap2.png"

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex flex-col md:flex-row items-center justify-between rounded-3xl border border-solid border-dark bg-gradient-radial-tornasol shadow-2xl p-6 md:p-12 mb-4">
      <Link 
        href={link} 
        target="_blank" 
        className="w-full md:w-1/2 cursor-pointer overflow-hidden rounded-lg mb-4 md:mb-0"
      >
        <Image src={img} alt={title} width={400} height={200} className="w-full h-auto" />
      </Link>

      <div className="w-full md:w-1/2 flex flex-col items-start justify-between pl-0 md:pl-6">
        <span className="text-black font-medium text-xl">{type}</span>
        <Link href={link} target="_blank" className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-3xl md:text-4xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-light">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <FaGithub size={24} />
          </Link>
          <Link href={link} target="_blank" className="ml-4 rounded-lg bg-dark text-light p-2 px-4 md:px-6 text-lg font-semibold">
            Demo
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({title, type, img, link, github}) => {
  return(
    <article className="w-full flex flex-col items-center justify-between rounded-3xl border border-solid border-dark bg-dark shadow-2xl p-6 md:p-12 relative mb-4">
      <Link 
        href={link} 
        target="_blank" 
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} width={400} height={200} className="w-full h-auto" />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-light font-medium text-xl">{type}</span>
        <Link href={link} target="_blank" className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-light text-left text-2xl md:text-3xl font-bold">{title}</h2>
        </Link>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <FaGithub size={24} />  
          </Link>
          <Link href={link} target="_blank" className="ml-4 rounded-lg bg-dark text-light p-2 px-4 md:px-6 text-lg font-semibold"> 
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
        <div className="grid grid-cols-12 gap-8 md:gap-24 w-full max-w-screen-xl p-4">
          <div className="col-span-12">
            <FeaturedProject
              title="e-commerce"
              summary="E-commerce desarrollado con Node.js, React, Redux, Express, PostgreSQL, Tailwind CSS, plataforma de pagos, login y muchas más funcionalidades."
              type="Featured Project"
              img={project1}
              link="https://shoe-kingdom-ae164.web.app/index.html"
              github="https://github.com/PF-grupo2/pf-henry-backend"
            />
          </div>
          <div className="col-span-12 md:col-span-6">
            <Project
              title="e-travel"
              type="Project"
              img={project}
              link="https://www.youtube.com/watch?v=rREa9L_dQ_M"
              github="https://github.com/enzojgcaceres"
            />
          </div>
          <div className="col-span-12 md:col-span-6">
            <Project
              title="English Portfolio - Typescript"
              type="Project"
              img={project2}
              link="https://type-portfolio-six.vercel.app/"
              github="https://github.com/enzojgcaceres/type-portfolio"
            />
          </div>
          <div className="col-span-12 md:col-span-6">
            <Project
              title="TeleRaiders website"
              type="Project"
              img={project3}
              link="https://teleraiders.com.ar/"
              github="https://github.com/enzojgcaceres/teleraiders"
            />
          </div>
          <div className="col-span-12 md:col-span-6">
            <Project
              title="Juana Mart pasterleria"
              type="Project"
              img={project4}
              link="https://juana-smart.vercel.app/"
              github="https://github.com/enzojgcaceres/juana-smart"
            />
          </div>
          <div className="col-span-12 md:col-span-6">
            <Project
              title="4 Vientos - Tienda"
              type="Project"
              img={project5}
              link="https://sites.google.com/view/somos4vientos/inicio?authuser=0"
              github="https://github.com/enzojgcaceres"
            />
          </div>
          <div className="col-span-12 md:col-span-6">
            <Project
              title="María Julia Gómez - Abogada"
              type="Project"
              img={project6}
              link="https://mama-app-enzos-projects-a85fc39b.vercel.app/"
              github="https://github.com/enzojgcaceres/mama-app"
            />
          </div>
          <div className="col-span-12 md:col-span-6">
            <Project
              title="Conversor de números romanos"
              type="Project"
              img={project7}
              link="https://roman-converter-pied.vercel.app/"
              github="https://github.com/enzojgcaceres/roman-converter"
            />
          </div>
          <div className="col-span-12 md:col-span-6">
            <Project
              title="Merida tapices"
              type="Project"
              img={project8}
              link="https://sites.google.com/view/merida-tapices/inicio?authuser=1"
              github="https://github.com/enzojgcaceres"
            />
          </div>

        </div>
      </main>
    </>
  );
};

export default PortfolioPage;