import { respPX } from "constants/styles";
import React from "react";
import Divyanshu from "assets/divyanshu.jpeg";
import Manan from "assets/manan.jpeg";
import Aditya from "assets/aditya.jpeg";
import Aman from "assets/aman.jpeg";

const team = [
  {
    name: "Manan Jain",
    role: "Frontend",
    image: Manan,
    github: "https://github.com/mananjain31/",
    linkedin: "https://github.com/mananjain31/",
    instagram: "https://github.com/mananjain31/",
  },
  {
    name: "Divyanshu Gour",
    role: "Machine Learning",
    image: Divyanshu,
    github: "https://github.com/mananjain31/",
    linkedin: "https://github.com/mananjain31/",
    instagram: "https://github.com/mananjain31/",
  },
  {
    name: "Aman Pandagre",
    role: "Frontend",
    image: Aman,
    github: "https://github.com/mananjain31/",
    linkedin: "https://github.com/mananjain31/",
    instagram: "https://github.com/mananjain31/",
  },
  {
    name: "Aditya Chaudhari",
    role: "Backend",
    image: Aditya,
    github: "https://github.com/mananjain31/",
    linkedin: "https://github.com/mananjain31/",
    instagram: "https://github.com/mananjain31/",
  },
];

const OurTeam = () => {
  return (
    <section
      className={`${respPX} py-14 bg-[#8DE78D] text-[#303030] text-center`}
    >
      <h2 className="text-4xl">Our Team</h2>
      <div className="flex justify-center mt-4">
        <p className="w-3/4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
          aliquam repellendus ad, deleniti tempora recusandae vel sint error
          voluptas cumque! Quae inventore suscipit reiciendis? Soluta accusamus
          blanditiis expedita consequuntur adipisci.
        </p>
      </div>
      <div className="sm:text-left flex flex-wrap sm:justify-evenly mt-10 gap-2 justify-center">
        {team.map((item, index) => {
          return (
            <div
              key={index}
              className="flex gap-6 w-full md:w-1/3 py-5 flex-wrap sm:flex-nowrap justify-center items-center sm:justify-stretch sm:items-stretch"
            >
              <img
                src={item.image}
                alt=""
                className="w-[200px] object-cover rounded-lg"
              />
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl sm:text-3xl">{item.name}</h3>
                <p className="texr-xl font-bold">{item.role}</p>
                <div className="flex gap-2 text-[#676464] flex-col">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={item.github}
                    className="hover:text-blue-600"
                  >
                    Github
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={item.linkedin}
                    className="hover:text-blue-600"
                  >
                    Linkedin
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={item.instagram}
                    className="hover:text-blue-600"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default OurTeam;
