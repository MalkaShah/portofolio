import Image from "next/image";
import React from 'react'
import Titlesection from "./components/Titlesection";
import Navbar from "./components/Navbar";
import Projectsection from "./components/Projectsection";
import SkillsLanguagePub from "./components/SkillsLanguagePub";
import EducationExp from "./components/EducationExp";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
    <div>
    <Navbar></Navbar>
    </div>
    <div className=" container mx-auto py-4 px-12 mt-24">
    <Titlesection/>
    <EducationExp></EducationExp> 
    <SkillsLanguagePub></SkillsLanguagePub>
    <Projectsection></Projectsection>
    <EmailSection></EmailSection>
    <Footer></Footer>
    </div>
    </main>
  );
}
