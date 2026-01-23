import CardCtx from "./CardCtx";

const CardCtxProvider = ({ children, ...props }) => {
  return <CardCtx.Provider value={{ ...props }}>{children}</CardCtx.Provider>;
};

export default CardCtxProvider;
