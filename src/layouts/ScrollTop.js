import { useEffect } from "react";
import { scroll_to_top } from "../scroll_to_top";

const ScrollTop = () => {
  useEffect(() => {
    scroll_to_top();
  }, []);

  return (
    <div className="progress">
      <svg
        className="progress-svg"
        width="100%"
        height="100%"
        viewBox="-1 -1 102 102"
      >
        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
      </svg>
    </div>
  );
};
export default ScrollTop;
