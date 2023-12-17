import useResponsive from "../hooks/useResponsive";
import "../style/loading.css";

const Loading = () => {
  const { sm } = useResponsive();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: sm ? "65vh" : "50vh",
        alignItems: "center",
      }}
    >
      <span className="loader" />
    </div>
  );
};
export default Loading;
