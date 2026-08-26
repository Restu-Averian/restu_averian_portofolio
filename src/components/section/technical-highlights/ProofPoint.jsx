const splitProofPoint = (text) => {
  const match = text.match(/^(\S+(?:\s(?:MB|KB|GB))?)(?:\s+(.+))?$/);
  return { metric: match?.[1] ?? text, label: match?.[2] ?? "" };
};

export const ProofPoint = ({ proofPoint, t, compact = false }) => {
  const text = t(proofPoint.textKey, proofPoint.textDefaultText);
  const { metric, label } = splitProofPoint(text);
  const ProofIcon = proofPoint.icon;

  return (
    <span
      className={`flex items-center rounded-[1.35rem] bg-background/40 text-porto-btn ${
        compact
          ? "min-w-24 justify-center px-3 py-2 text-center"
          : "min-h-14 gap-2.5 px-3 py-2"
      }`}
      title={text}
    >
      {ProofIcon && !compact && (
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-porto-accent/75">
          <ProofIcon className="h-4 w-4" />
        </span>
      )}

      <span className={compact ? "block" : "block text-left"}>
        <span className="block text-base font-black leading-none">
          {metric}
        </span>

        {label && (
          <span className="mt-1 block text-[10px] font-bold leading-tight">
            {label}
          </span>
        )}
      </span>
    </span>
  );
};
