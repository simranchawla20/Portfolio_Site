import React from "react";
import "./Education.css";

export default function Education() {
  return (
    <div className="edu-container">
      <div className="edu-parent">
          <div className="rw">
            <div className="edu-school">
                <span className="orange">
                <i class="fa fa-circle" aria-hidden="true"></i> Chitkara
                University, Punjab
                </span>
                <span className="cls" style={{ "margin-left": "20px", "font-size": 13 }}>
                Bachelor of Computer Science and Engineering
                </span>
            </div>
            <div className="edu-year">2019-2023</div>
            </div>
            <div className="rw">
            <div className="edu-school">
                <span className="orange">
                <i class="fa fa-circle" aria-hidden="true"></i> Lawerance Public Sen. Sec. School, Mohali
                </span>
                <span className="cls" style={{ "margin-left": "20px", "font-size": 13 }}>
                  High SChool (12th- 93%)
                </span>
            </div>
            <div className="edu-year">2017-2019</div>
            </div>
            <div className="rw">
            <div className="edu-school">
                <span className="orange">
                <i class="fa fa-circle" aria-hidden="true"></i>Lawerance Public Sen. Sec. School, Mohali
                </span>
                <span className="cls" style={{ "margin-left": "20px", "font-size": 13 }}>
                  Matrix (10th-10 CGPA)
                </span>
            </div>
            <div className="edu-year">2015-2017</div>
          </div>
      </div>
    </div>
  );
}
