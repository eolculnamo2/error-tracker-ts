import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  MainSection,
  LoginHeader,
  SecondarySection,
  LoginBox,
  InputStyling,
  LoginBtnsDiv,
  InputDiv,
} from "../styling/LoginStyling";

const Login = () => {
  return (
    <MainSection>
      {/* <LoginHeader>CREATE HEADER HERE</LoginHeader> */}
      <SecondarySection>
        <LoginBox>
          <InputStyling>
            <InputDiv>
              <FontAwesomeIcon icon="user-alt" />

              <input type="text" placeholder="Email Address" />
            </InputDiv>
          </InputStyling>
          <InputStyling>
            <InputDiv>
              <FontAwesomeIcon icon="key" />
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
