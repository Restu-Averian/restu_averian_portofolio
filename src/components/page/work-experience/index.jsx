import { Icon } from "@iconify/react";
import { memo } from "react";
import DataOnThumb from "@/assets/work-experiences/image-removebg-preview.png";
import MascottSticker from "@/assets/work-experiences/mascott-sticker.webp";

const WorkExperience_ = () => {
  return (
    <section className="rounded-3xl px-6 relative">
      {/* Header */}
      <div className="flex justify-between items-start">
        <h2 className="flex items-center gap-2 text-xl font-bold text-foreground">
          Work Journey
          <Icon
            icon="solar:stars-minimalistic-bold"
            className="text-yellow-400 h-5 w-5"
          />
        </h2>
        {/* Mascot */}
        <div className="w-16 h-16 shrink-0 relative -top-4 -right-2">
          <img
            src={MascottSticker}
            alt="Mascot"
            className="w-full h-full object-contain drop-shadow-sm"
            loading="lazy"
          />
        </div>
      </div>

      {/* Timeline */}
      <div className="relative pl-8 pr-2 py-2">
        {/* Vertical Line */}
        <div className="absolute left-[39px] top-6 bottom-6 w-0.5 bg-[#e5d0bd] z-0"></div>

        {/* Start Badge */}
        <div className="relative z-10 flex items-center mb-6 -ml-4">
          <span className="bg-porto-btn text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow-sm">
            Start
          </span>
        </div>

        {/* Node 1 */}
        <div className="relative z-10 flex items-start gap-4 mb-6 ml-[-5.5px]">
          <div className="w-4 h-4 rounded-full bg-white border-[3px] border-[#ff8e8e] mt-4 z-10 shrink-0"></div>
          <div className="flex-1 bg-white border border-[#f5e3d7] rounded-xl p-3 flex items-center gap-3 shadow-sm">
            <div className="w-10 h-10 rounded-full border border-gray-100 overflow-hidden shrink-0 flex items-center justify-center bg-white p-1">
              <img
                src={DataOnThumb}
                alt="Logo"
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
            <div>
              <p className="text-xs font-bold text-foreground leading-tight">
                Intern as Frontend Engineer
              </p>
              <p className="text-[10px] text-muted-foreground mt-0.5">
                at PT. Indodev Niaga Internet.
              </p>
              <div className="flex items-center gap-1 mt-1 text-[10px] font-medium text-foreground">
                <Icon icon="solar:calendar-linear" className="w-3 h-3" />
                2023 - 2024
              </div>
            </div>
          </div>
        </div>

        {/* Node 2 */}
        <div className="relative z-10 flex items-start gap-4 mb-6 ml-[-5.5px]">
          <div className="w-4 h-4 rounded-full bg-white border-[3px] border-[#ffcd72] mt-4 z-10 shrink-0"></div>
          <div className="flex-1 bg-white border border-[#f5e3d7] rounded-xl p-3 flex items-center gap-3 shadow-sm">
            <div className="w-10 h-10 rounded-full border border-gray-100 overflow-hidden shrink-0 flex items-center justify-center bg-white p-1">
              <img
                src={DataOnThumb}
                alt="Logo"
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
            <div>
              <p className="text-xs font-bold text-foreground leading-tight">
                Frontend Engineer (Staff)
              </p>
              <p className="text-[10px] text-muted-foreground mt-0.5">
                at PT. Indodev Niaga Internet.
              </p>
              <div className="flex items-center gap-1 mt-1 text-[10px] font-medium text-foreground">
                <Icon icon="solar:calendar-linear" className="w-3 h-3" />
                2024 - sekarang
              </div>
            </div>
          </div>
        </div>

        {/* Next Badge */}
        <div className="relative z-10 flex items-center -ml-4">
          <span className="bg-[#d4edd2] text-[#6db568] text-xs font-bold px-3 py-1 rounded-full z-10 flex items-center gap-1">
            Next
            <Icon
              icon="solar:stars-minimalistic-bold"
              className="text-yellow-400 h-3 w-3"
            />
          </span>
        </div>
      </div>
    </section>
  );
};

const WorkExperience = memo(WorkExperience_);
export default WorkExperience;
