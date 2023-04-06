import React, { useRef } from "react";
import { Outlet } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useScroll, useTransform, motion } from "framer-motion";

const About = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);
  const y = useTransform(scrollYProgress, [0.8, 1], ["0vh", "50vh"]);
  return (
    <div style={{ minHeight: "250vh" }}>
      <Outlet />
      <motion.div
        className="page__title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        About
      </motion.div>
      <motion.div ref={targetRef} style={{ opacity, y }}>
        <LazyLoadImage
          src={require("./../../assets/backgroundErik.jpg")} // use normal <img> attributes as props
          alt={"Erik Zurvalec"}
          effect="blur"
          placeholderSrc={require("./../../assets/backgroundErik.jpg")}
        />
      </motion.div>
      <hr className="divider" />
      <section>
        <div className="about__body--name-shadow">I am Erik Zurvalec</div>
        <div className="about__body--title">Software Developer</div>
        <div className="about__body--body">
          Hi, I am 23 years old. My software development experiences have
          started in primary school. I used to play programming games that time.
          The final decision of my future was made in my latest 15. I had
          studied at gymnazium of focus on computer sience. This was definitely
          beggining on my way to became software developer. Once I passed the
          high school, I was accepted at Faculty of Electrical Engineering and
          Informatics Technology. The course I had studied was targeted on
          Applied Informatics. IBM has employed me during last year of bachelor
          degree. I realized that finally become software developer. Since then
          I finished bachalor degree and accepted full-time offer as Full-stack
          developer at IBM.
          <br />
          <br /> Lets also mention my hobbies. My biggest pasion is sport. I do
          variety kind of sports. I have played table tennis as profesional for
          8 years. I also love mountain biking, football, hiking. running and I
          added fitness recently. The financial and economy are sectors which I
          am discovering as well in my rest time. The music is put as my last
          favaurite hobby.
        </div>
      </section>
      <hr className="divider" />
      <section>
        <div className="about__body--title">Skills training oriented</div>
        <div className="about__body--body">
          <b>Fronted: </b>
          <br />
          General information about using and customizing this Figma file
          Material
          <br />
          <b>Backend:</b>
          <br />
          Typography, color, elevation, and states
          <br /> <b>Devops:</b>
          <br />A collection of Baseline components
          <br />
          <b> Another tools:</b>
          <br />
          Figma page with the components used in this file
        </div>
      </section>
    </div>
  );
};

export default About;
