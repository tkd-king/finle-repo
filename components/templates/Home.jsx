import React from "react";
import WorkSection from "../orgnisms/WorkSection";
import Container from "../atoms/Container";
import Banner from "../orgnisms/Banner";
import Achivements from "../orgnisms/Achivements";
import Services from "../orgnisms/Services";
import ExperiencEducation from "../orgnisms/ExperiencEducation";
import StoriesCustomorSection from "../orgnisms/StoriesCustomorSection";
import RecentBlogs from "../orgnisms/RecentBlogs";
import SkillsSection from "../orgnisms/SkillsSection";
import ContactComponent from "../orgnisms/ContactComponent";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomeTemp = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <div className="overflow-x-hidden">
      <Banner />
      <Achivements />
      <Services />
      <Container>
        <WorkSection />
      </Container>
      <ExperiencEducation />
      <SkillsSection />
      <StoriesCustomorSection />
      <RecentBlogs />
      <ContactComponent />
    </div>
  );
};

export default HomeTemp;
