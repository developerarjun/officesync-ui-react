import { useEffect } from "react";
import "./LoginPage.scss";

function LoginPage() {
  useEffect(() => {}, []);

  return (
    <div className="loginContainer">
      <div className="loginleftSideContainer">
        <div className="loginLeftSideContainerOverlay" />
        <div className="bgText">
          <label className="welcomeText">Welcome Back!</label>
          <label className="startText">
            Ready to
            <br />
            get Started
          </label>
        </div>
      </div>
      <div className="loginForm">This is form Page</div>
    </div>
  );
}

export default LoginPage;
