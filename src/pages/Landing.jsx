import stacks_pp from "../assets/images/stacks_pp.jpg";
import dash from "../assets/images/dash.jpg";
import report_grade from "../assets/images/report_grade.jpg";
import track_grade from "../assets/images/track_grade.jpg";

function LandingPage() {
  return (
    <div className="main">
      <div className="w-full h-full my-0 mx-auto">
        <div className="main1">
          <div className="col" style={{ marginLeft: 100 }}>
            <h2>Missing Grade Reporting System</h2>
            <h3>With Confidence & Assurance</h3>
            <p>
              Guaranteed to ensure that you are able to track and report grades
              that are not recorded in your academic Profile.
            </p>
            <button type="button">Get Started</button>
          </div>
          <div className="stacked">
            <img src={stacks_pp} alt={stacks_pp} width="250px" />
          </div>
        </div>

        <div className="main2">
          <div className="col-mg1">
            <img
              src={report_grade}
              alt={report_grade}
              width="250px"
              style={{ height: 185 }}
            />
            <div>
              <p>
                Report Grade that are not recorded in your academic profile.
              </p>
              <button
                type="button"
                className="btn-btn"
                style={{ marginTop: 20 }}
              >
                Get Started
              </button>
            </div>
          </div>
          <div className="col-mg1">
            <img src={dash} alt={dash} width="250px" />
            <div>
              <p>A Dashboard academic profile.</p>
              <button
                type="button"
                className="btn-btn"
                style={{ marginTop: 20 }}
              >
                Get Started
              </button>
            </div>
          </div>
          <div className="col-mg1">
            <img
              src={track_grade}
              alt={track_grade}
              width="250px"
              style={{ height: 183 }}
            />
            <div>
              <p>Keep track of your Grades.</p>
              <button
                type="button"
                className="btn-btn"
                style={{ marginTop: 20 }}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LandingPage;
