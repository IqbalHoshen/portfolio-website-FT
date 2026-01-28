import Image from "next/image";
import Timeline from "@/components/TimelineDaisy";

import Link from "next/link";
import {
  FaFacebook,
  FaLinkedin,
  FaPinterest,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { FaGraduationCap } from "react-icons/fa6";
import {
  FaUniversity,
  FaSchool,
  FaBriefcase,
  FaBuilding,
} from "react-icons/fa";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  const education = [
    {
      year: "2016 – 2020",
      title: "Harvard University",
      subtitle: "B.A. and M.S., Computer Science",
      description:
        "Focused on machine learning, distributed systems, and human-computer interaction. Thesis on scalable real-time recommendation engines.",
      icon: FaUniversity,
    },
    {
      year: "2014 – 2016",
      title: "Helwan University",
      subtitle: "Bachelor Degree in Computer Engineering",
      description:
        "Graduated with honors. Active member of ACM student chapter and robotics club.",
      icon: FaSchool,
    },
  ];

  const work = [
    {
      year: "2016-2022",
      title: "UI/UX design",
      subtitle: "Web site design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aut commodi earum eligendi ipsum, laborum maiores mollitia, optio quam quis rerum totam voluptas.",
      icon: FaBriefcase,
    },
    {
      year: "2012-2016",
      title: "Junior Web  designers",
      subtitle: "Product designer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aut commodi earumeligendi ipsum, laborum maiores mollitia, optio quam quis rerum totam voluptas.",
      icon: FaBuilding,
    },
  ];

  const skills = [
    { name: "UI/UX Design", percentage: 95 },
    { name: "Photography", percentage: 90 },
    { name: "Creativity", percentage: 80 },
    { name: "Team Work", percentage: 95 },
    { name: "Web Design", percentage: 95 },
  ];
  return (
    <div className="lg:grid lg:grid-cols-10  ">
      <div className="lg:col-span-3">
        <Image src={"/assets/me.jpg"} width={368} height={504} alt="Image" />
        <div className="bg-black flex flex-row justify-center items-center gap-4 p-4 h-18">
          <Link
            href={"https://www.facebook.com/profile.php?id=100091789213821"}
            className="text-white hover:text-gray-400"
          >
            <FaFacebook size={24} />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/iqbal-hoshen-66483a239/"}
            className="text-white hover:text-gray-400"
          >
            <FaLinkedin size={24} />
          </Link>
          <Link href={"#"} className="text-white hover:text-gray-400">
            <FaPinterest size={24} />
          </Link>
          <Link href={"#"} className="text-white hover:text-gray-400">
            <FaInstagram size={24} />
          </Link>
          <Link href={"#"} className="text-white hover:text-gray-400">
            <FaTwitter size={24} />
          </Link>
        </div>
      </div>
      <div className="lg:col-span-7 space-y-5 p-10">
        <p className="bg-gradient-to-r from-[#F5BD4D] to-[#F89222] bg-clip-text text-transparent text-lg font-bold">
          INTRODUCTION
        </p>
        <h1 className="text-white font-bold text-[48px]">
          I'm a Creative Developer & UI/UX Design Expert
        </h1>
        <p className="text-white font-bold text-lg">
          24 years / Robert Smith / UK London
        </p>
        <p className="text-[#C6C6C6] font-medium text-lg">
          Prolific, full stack web developer with a passion for metrics and
          beating former "best-yets. Prototyped 25 new product features per year
          for Flexor, Inc. Decreased rework by 22% and costs by 15%.
          Consistently receive high user experience scores for all web
          development projects, including a 55% increase for Flexor, Inc.
          Passionate about building world class web applications. One of my
          sites received a 2020 Webby for Best Navigation and Structure.
        </p>
        <a
          href="/assets/Junior_Frontend.pdf"
          download="Junior_Frontend.pdf"
          className="btn font-bold text-white rounded-4xl btn-lg inline-flex items-center gap-2 mt-6"
          style={{
            background: "linear-gradient(90deg, #F5BD4D 0%, #F89222 100%)",
          }}
        >
          Download CV
          <IoMdDownload />
        </a>
        <div className="mt-10 space-y-4">
          <h1 className="text-white font-bold text-5xl mb-5">Resume</h1>
          <div className="flex flex-row">
            <FaGraduationCap color={"#F89222"} size={32} />
            <span className="text-white font-bold text-2xl ml-3">
              Education
            </span>
          </div>
          <Timeline items={education} />{" "}
        </div>
        <div className="mt-10 space-y-4">
          <div className="flex flex-row">
            <FaBuilding color={"#F89222"} size={32} />
            <span className="text-white font-bold text-2xl ml-3">
              Work History
            </span>
          </div>
          <Timeline items={work} />{" "}
        </div>

        <div className="w-full max-w-4xl mx-auto py-12 px-4 md:px-6">
          <h2 className="text-white font-bold text-5xl mb-5">Skills</h2>

          <div className="space-y-8">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                {/* Label + Percentage */}
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium text-base-content/90">
                    {skill.name}
                  </span>
                  <span className="text-lg font-semibold text-[#F89222]">
                    {skill.percentage}%
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="relative h-4 bg-base-700 rounded-full overflow-hidden">
                  <div
                    className="absolute h-full bg-gradient-to-r from-[#F5BD4D] to-[#F89222] rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <footer>
          <ContactForm />
        </footer>
      </div>
    </div>
  );
}
