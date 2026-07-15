import { memo } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";

const TooltipBase_ = ({ children, content }) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        {/* <SideNavButton
          direction="left"
          label={prevProject?.title || "Previous Project"}
          onClick={goPrev}
        /> */}
        {children}
      </TooltipTrigger>
      <TooltipContent
        side="bottom"
        className="bg-transparent"
        classNameArrow="bg-none rotate-none size-0"
      >
        {content}
        {/* <span className="min-w-60 rounded-[20px] border-[3px] border-porto-btn/60 bg-[#f7e8dd] px-6 py-4 text-center text-[18px] leading-[1.2] text-porto-text shadow-[0_10px_30px_rgba(0,0,0,0.12)] transition-all duration-200 hover:bg-porto-bg">
                <span className="inline-flex items-center gap-3">
                  <ArrowLeft className="h-5 w-5 shrink-0" />
                  <span>Prev {prevProject?.title || "Previous Project"}</span>
                </span>
              </span> */}
      </TooltipContent>
    </Tooltip>
  );
};

const TooltipBase = memo(TooltipBase_);
export default TooltipBase;
