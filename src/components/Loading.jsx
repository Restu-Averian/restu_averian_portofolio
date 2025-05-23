import useResponsive from "../hooks/useResponsive";
import "../style/loading.css";

const Loading = () => {
  const { xs } = useResponsive();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: xs ? "65vh" : "50vh",
        alignItems: "center",
      }}
    >
      <span className="loader" />
    </div>
  );
};
export default Loading;
