import { cn } from "@/lib/utils";
import { memo } from "react";
import DataOnThumb from "../../../assets/work-experiences/image-removebg-preview.png";

const experiences = [
  {
    title: "Staff as Frontend Engineer at PT. Indodev Niaga Internet",
    period: "2024 - Now",
    logo: DataOnThumb,
  },
  {
    title: "Intern as Frontend Engineer at PT. Indodev Niaga Internet",
    period: "2023 - 2024",
    logo: DataOnThumb,
  },
];

const WorkExperienceMobile_ = () => {
  return (
    <div className="relative lg:hidden pl-6">
      {/* Vertical dashed line */}
      <div className="absolute left-2.75 top-2 bottom-8 w-0.5 border-l-2 border-dashed border-primary/50" />

      {experiences.map((exp, i) => (
        <div key={i} className="relative mb-6 last:mb-0">
          {/* Dot */}
          <div className="absolute -left-4.75 top-4 h-4 w-4 rounded-full bg-card border-[3px] border-primary z-10" />

          {/* Card */}
          <div
            className="flex items-center gap-3 rounded-xl bg-card px-4 py-3 w-full"
            style={{ border: "3px solid var(--primary)" }}
          >
            {/* Logo */}
            <div
              className="shrink-0 w-10 h-10 overflow-hidden rounded-full"
              style={{ border: "3px solid var(--primary)" }}
            >
              <img
                src={exp.logo}
                alt="Company logo"
                loading="lazy"
                className="h-full w-full object-contain"
              />
            </div>

            {/* Text */}
            <div className="flex-1">
              <p className="text-xs font-semibold leading-snug text-foreground">
                {exp.title}
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                {exp.period}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Start dot di bawah */}
      <div className="relative flex items-center gap-3 mt-2">
        <div className="h-5 w-5 rounded-full bg-card border-[3px] border-primary ml-[-1.4rem] z-10 shrink-0" />
        <span className="text-xs text-muted-foreground">Start</span>
      </div>
    </div>
  );
};

const WorkExperienceMobile = memo(WorkExperienceMobile_);
export default WorkExperienceMobile;
