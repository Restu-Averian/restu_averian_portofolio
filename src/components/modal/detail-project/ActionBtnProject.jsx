import { memo } from "react";
import { Home } from "lucide-react";
import { Icon } from "@iconify/react";

const ActionBtnProject_ = ({ demoUrl = "#", githubUrl = "#" }) => {
  return (
    <div className="flex flex-col gap-3">
      {/* Live Demo — ghost */}
      <a
        href={demoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full items-center justify-center gap-2 rounded-full border-2 border-primary bg-background px-6 py-4 text-xl font-semibold text-primary transition-all hover:bg-porto-accent active:scale-[0.98]"
      >
        <Icon icon="majesticons:open" width="24" height="24" />
        Live Demo
      </a>

      {/* View on Github — solid */}
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-4 text-lg font-semibold text-primary-foreground transition-all hover:bg-porto-btn-hover active:scale-[0.98]"
      >
        <Icon icon="mdi:github" width="24" height="24" />
        View on Github
      </a>
    </div>
  );
};

const ActionBtnProject = memo(ActionBtnProject_);
export default ActionBtnProject;
