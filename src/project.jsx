import "./index.css";
import felixtech from './felixtech.png'
import kidstech from "./kidstech.png";
import mercycare from "./mercycare.png";
import nkfootwear from "./nkfootwear.png";

const Project = () => {
    return (
      <>
        <div className="wrapper2">
          <h1 className="projects">PROJECTS</h1>
          <hr className="hr2" /> <br />
          <br />
          <div className="pictures">
            <div className="picture1">
              <h2>
                <a href="https://felixtechglobal.netlify.app" target="_blank">
                  FELIXTECH GLOBAL
                </a>
              </h2>
              <br />
              <img src={felixtech} alt="" className="pic1" />
            </div>

            <div className="picture2">
              <h2>
                <a href="https://kidstechglobal.netlify.app" target="_blank">
                  KIDSTECH GLOBAL
                </a>
              </h2>
              <br />
              <img src={kidstech} alt="" className="pic2" />
            </div>

            <div className="picture3">
              <h2>
                <a
                  href="https://www.mercycareconceptual.com.ng"
                  target="_blank"
                >
                  MERCY CARE CONCEPTUALS
                </a>
              </h2>
              <br />
              <br />
              <img src={mercycare} alt="" className="pic3" />
            </div>

            <div className="picture4">
              <h2>
                <a href="https://nkfootwear.netlify.app" target="_blank">
                  NK-FOOTWEARS
                </a>
              </h2>
              <br />

              <img src={nkfootwear} alt="" className="pic4" />
            </div>
          </div>
        </div>
      </>
    );
};
export default Project