import { ArrowLeft, ArrowRight } from "lucide-react";
import { memo } from "react";

const MobileSwitcher_ = ({ prev, next }) => {
  return (
    <div className="mt-6 flex items-center gap-3 xl:hidden">
      <button
        type="button"
        onClick={prev?.onClick}
        className="flex flex-1 items-center justify-center gap-2 rounded-2xl border-2 border-porto-btn/60 bg-card px-4 py-3 text-sm font-medium text-porto-text"
      >
        <ArrowLeft className="h-4 w-4" />
        Prev
      </button>

      <div className="min-w-0 flex-1 text-center text-xs leading-tight text-porto-muted">
        <div className="truncate">Prev: {prev?.label}</div>
        <div className="truncate">Next: {next?.label}</div>
      </div>

      <button
        type="button"
        onClick={next?.onClick}
        className="flex flex-1 items-center justify-center gap-2 rounded-2xl border-2 border-porto-btn/60 bg-card px-4 py-3 text-sm font-medium text-porto-text"
      >
        Next
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
};

const MobileSwitcher = memo(MobileSwitcher_);
export default MobileSwitcher;
