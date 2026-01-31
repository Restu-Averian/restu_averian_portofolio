import { memo } from "react";

const ExternalLink = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M9.367 2.25H9.4a.75.75 0 0 1 0 1.5c-1.132 0-1.937 0-2.566.052c-.62.05-1.005.147-1.31.302a3.25 3.25 0 0 0-1.42 1.42c-.155.305-.251.69-.302 1.31c-.051.63-.052 1.434-.052 2.566v5.2c0 1.133 0 1.937.052 2.566c.05.62.147 1.005.302 1.31a3.25 3.25 0 0 0 1.42 1.42c.305.155.69.251 1.31.302c.63.051 1.434.052 2.566.052h5.2c1.133 0 1.937 0 2.566-.052c.62-.05 1.005-.147 1.31-.302a3.25 3.25 0 0 0 1.42-1.42c.155-.305.251-.69.302-1.31c.051-.63.052-1.434.052-2.566v-1.1a.75.75 0 0 1 1.5 0v1.133c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057M13.5 3a.75.75 0 0 1 .75-.75H21a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-1.5 0V4.81l-6.97 6.97a.75.75 0 1 1-1.06-1.06l6.97-6.97h-4.94A.75.75 0 0 1 13.5 3"
      />
    </svg>
  );
};

const ArrowRight = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="11"
      viewBox="0 0 16 9"
    >
      <path
        fill="currentColor"
        d="M12.5 5h-9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9c.28 0 .5.22.5.5s-.22.5-.5.5"
      />
      <path
        fill="currentColor"
        d="M10 8.5a.47.47 0 0 1-.35-.15c-.2-.2-.2-.51 0-.71l3.15-3.15l-3.15-3.15c-.2-.2-.2-.51 0-.71s.51-.2.71 0l3.5 3.5c.2.2.2.51 0 .71l-3.5 3.5c-.1.1-.23.15-.35.15Z"
      />
    </svg>
  );
};

const ArrowDown = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="9"
      height="16"
      viewBox="0 0 9 16"
    >
      <path
        fill="currentColor"
        d="M4.5 13c-.28 0-.5-.22-.5-.5v-9c0-.28.22-.5.5-.5s.5.22.5.5v9c0 .28-.22.5-.5.5"
      />
      <path
        fill="currentColor"
        d="M4.5 14a.47.47 0 0 1-.35-.15l-3.5-3.5c-.2-.2-.2-.51 0-.71s.51-.2.71 0l3.15 3.15l3.15-3.15c.2-.2.51-.2.71 0s.2.51 0 .71l-3.5 3.5c-.1.1-.23.15-.35.15Z"
      />
    </svg>
  );
};

const Home = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M19.5 10a.5.5 0 0 0-1 0zm-14 0a.5.5 0 0 0-1 0zm15.146 2.354a.5.5 0 0 0 .708-.708zM12 3l.354-.354a.5.5 0 0 0-.708 0zm-9.354 8.646a.5.5 0 0 0 .708.708zM7 21.5h10v-1H7zM19.5 19v-9h-1v9zm-14 0v-9h-1v9zm15.854-7.354l-9-9l-.708.708l9 9zm-9.708-9l-9 9l.708.708l9-9zM17 21.5a2.5 2.5 0 0 0 2.5-2.5h-1a1.5 1.5 0 0 1-1.5 1.5zm-10-1A1.5 1.5 0 0 1 5.5 19h-1A2.5 2.5 0 0 0 7 21.5z"
      />
    </svg>
  );
};

const Folder = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M5 5h4l3 3h6a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3m0 1a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-6.41l-3-3z"
      />
    </svg>
  );
};

/**
 * @typedef TIcons
 * @property {"external-link"
 * | "arrow-right"
 * | "arrow-down"
 * | "home"
 * | "folder"} type
 */

/**
 *
 * @param {TIcons} props
 * @returns
 */
const Icons_ = ({ type, ...props }) => {
  const icon = {
    "external-link": <ExternalLink {...props} />,
    "arrow-right": <ArrowRight {...props} />,
    "arrow-down": <ArrowDown {...props} />,
    home: <Home />,
    folder: <Folder />,
  };

  if (typeof icon[type] !== "undefined") {
    return icon[type];
  }

  return null;
};

const Icons = memo(Icons_);
export default Icons;
