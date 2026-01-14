import { useLocation } from "react-router-dom";
import iotelligenceLogo from "../assets/iotelligence.png"
import ufiLogo from "../assets/ufi-filters.png"
import { pageTitle } from "../lib/data";
const Navbar = () => {
  const location = useLocation();
  return (
    <>
      <div>
        <img src={iotelligenceLogo} alt="" />
      </div>
      <div>
        <h1>{pageTitle.map((title) => {
          if (title.page === location.pathname) {
            return title.title.toUpperCase()
          } else {
            return
          }
        })}</h1>
      </div>
      <div>
        <img src={ufiLogo} alt="" />
      </div>
    </>
  );
}

export default Navbar;