import { useEffect } from "react";
import { axo } from "../utils";

const PreLoader = () => {
  useEffect(() => {
    return () => {
      window.onload = () => {
        setTimeout(() => {
          axo.preloader();
        }, 2000);
      };
    };
  }, []);

  return (
    <div id="preloader">
      <div className="loader_line" />
    </div>
  );
};
export default PreLoader;
