import React from "react";
import {
  MainSection,
  SecondarySection,
  LoginBox,
  LoginBtnnsSpacer1,
  LoginBtnnsSpacer2,
  InputStyling,
  LoginBtnsDiv,
  InputDiv,
} from "../styling/NewOrgStyling";

const NewOrg = () => {
  return (
    <MainSection>
      <SecondarySection>
        <LoginBox>
          <InputStyling>
            <InputDiv>
              <input type="text" placeholder="Enter your email address" />
            </InputDiv>
          </InputStyling>
          <InputStyling>
            <InputDiv>
              <input type="text" placeholder="First name" />
            </InputDiv>
          </InputStyling>
          <InputStyling>
            <InputDiv>
              <input type="text" placeholder="Last name" />
            </InputDiv>
          </InputStyling>
          <InputStyling>
            <InputDiv>
              <input type="text" placeholder="Organization name" />
            </InputDiv>
          </InputStyling>
          <InputStyling>
            <InputDiv>
              <input type="text" placeholder="Website URL" />
            </InputDiv>
          </InputStyling>
          <InputStyling>
            <InputDiv>
              <input type="password" placeholder="Password" />
            </InputDiv>
          </InputStyling>
          <InputStyling>
            <InputDiv>
              <input type="password" placeholder="Confirm password" />
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

export default NewOrg;
