import { useEffect } from "react";

const Helmet = ({ title, children }) => {
  useEffect(() => {
    document.title = `${title} | Restu's Portofolio`;
  }, [title]);

  return children;
};
export default Helmet;
