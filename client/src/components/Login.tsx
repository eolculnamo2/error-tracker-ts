import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  MainSection,
  LoginHeader,
  SecondarySection,
  LoginBox,
  LoginBtnnsSpacer1,
  LoginBtnnsSpacer2,
  InputStyling,
  IconStyling,
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
              <IconStyling>
                <FontAwesomeIcon icon="user-alt" />
              </IconStyling>
              <input type="text" placeholder="Email Address" />
            </InputDiv>
          </InputStyling>
          <InputStyling>
            <InputDiv>
              <IconStyling>
                <FontAwesomeIcon icon="key" />
              </IconStyling>
              <input type="password" placeholder="Password" />
            </InputDiv>
          </InputStyling>
          <LoginBtnsDiv>
            <LoginBtnnsSpacer1>
              <button>Sign In</button>
            </LoginBtnnsSpacer1>
            <LoginBtnnsSpacer2>
              <button>New Organization</button>
            </LoginBtnnsSpacer2>
          </LoginBtnsDiv>
        </LoginBox>
      </SecondarySection>
    </MainSection>
  );
};

export default Login;
