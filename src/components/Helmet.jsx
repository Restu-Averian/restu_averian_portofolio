import { useEffect } from "react";

const Helmet = ({ title, children }) => {
  useEffect(() => {
    document.title = `${title} | Restu's Portofolio`;
  }, []);
  return children;
};
export default Helmet;
