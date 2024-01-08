"use client";

import { technologies } from "@/lib/constants";
import Section from "./Section";
import { BallCanvas } from ".";

const Tech = () => {
  return (
    <Section>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Tech;
