import "./index.css";

const Skill = () => {
    return (
      <>
        <div className="wrapper1">
          <h1 className="skills">SKILLS</h1>
          <hr className="hr1" />
          <div className="container2">
            <div className="frontend">
              <i class="fa-brands fa-html5 fa-3x"></i>
              <i class="fa-brands fa-css3 fa-3x"></i>
              <i class="fa-brands fa-js fa-3x"></i>
              <i class="fa-brands fa-react fa-3x"></i>
            </div>
            <div className="backend">
              <i class="fa-solid fa-database fa-3x"></i>
              <i class="fa-brands fa-php fa-3x"></i>
            </div>
            <div className="versioncontrol">
              <i class="fa-brands fa-git-alt fa-3x"></i>
              <i class="fa-brands fa-github fa-3x"></i>
            </div>
          </div>
        </div>
      </>
    );
};
export default Skill;