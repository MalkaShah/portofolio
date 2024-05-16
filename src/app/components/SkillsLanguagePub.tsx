'use client'
import React from 'react';
import skill from '@/app/assets/skill.png';
import Image from 'next/image';
import {  useTransition, useState } from 'react';
import TabButton from './TabButton';
import { title } from 'process';
import { Content } from 'next/font/google';


const Tab_DATA = [
  {
    title: "skills",
    id: "skills",
    content: (
      <ul>
        <li> + Python </li>
        <li> + Next.js</li>
        <li> + C++ </li>
        <li> + Typescript </li>
        <li> + Android/kotlin</li>
      </ul>
    )
  },
  {
    title: "languages",
    id: "languages",
    content: (
      <ul>
        <li> + English </li>
        <li> + Urdu</li>
        <li> + Pashto </li>
        <li> + Persian </li>
        <li> + Hindi</li>
      </ul>
    )
  },
  {
    title: "certificates",
    id: "certificates",
    content: (
      <ul>
        <li> + Machine Learning Coursera Online </li>
        <li> + Panaverse Cloud Engineer Gen-AI</li>
        <li> + Data Analytics and Business Intelligence</li>
        <li> + Programming in Kotlin by Meta </li>
        <li> + Version Control by Meta</li>
      </ul>
    )
  },
  {
    title: "intrests",
    id: "intrests",
    content: (
      <ul>
        <li> + Machine Learning & Generative AI</li>
        <li> + Hiking and Dancing</li>
      </ul>
    )
  }
]


const SkillsLanguagePub = () => {
  const [tab, setTab] = useState("skills");
  const [ isPeding, startTansition] = useTransition();
  const handleTabChage = (id:any) => {
      startTansition(()=>{
        setTab(id);
      })
    }



  return (
    <section className='text-white flex justify-center items-center' id='SkillsLanguagePub'>
  <div className='flex-col justify-center'>
   <div className='text-2xl flex flex-row mt-16'>
      <TabButton selectTab={()=> handleTabChage("skills")} active = {tab === "skills"}>{" "}Skills {" "}</TabButton>
      <TabButton selectTab={()=> handleTabChage("languages")} active = {tab === "languages"}> {" "}Languages {" "}</TabButton>
      <TabButton selectTab={()=> handleTabChage("certificates")} active = {tab === "certificates"}> {" "}Certificates {" "}</TabButton>
      <TabButton selectTab={()=> handleTabChage("intrests")} active = {tab === "intrests"}> {" "}Intrests {" "}</TabButton>
    </div>

    <div className='mt-8'> {Tab_DATA.find((t) => t.id === tab)?.content} </div>
    
    </div>
   

    </section>
  )
}

export default SkillsLanguagePub