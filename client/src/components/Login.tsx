import React, { useState } from "react";

import {
  MainSection,
  SecondarySection,
  LoginBox,
  InputStyling,
  LoginBtnsDiv,
  InputDiv,
} from "../styling/LoginStyling";

const Login = () => {
  return (
    <MainSection>
      <SecondarySection>
        <LoginBox>
          <InputStyling>
            <InputDiv>
              {" "}
              <i className="fa fa-user" aria-hidden="true"></i>
              <input type="text" placeholder="Email Address" />
            </InputDiv>
          </InputStyling>
          <InputStyling>
            <InputDiv>
              <i className="fa fa-key" aria-hidden="true"></i>
              <input type="password" placeholder="Password" />
            </InputDiv>
          </InputStyling>
          <LoginBtnsDiv>
            <button>Sign In</button>
            <button>New Organization</button>
          </LoginBtnsDiv>
        </LoginBox>
      </SecondarySection>
    </MainSection>
  );
};

export default Login;
