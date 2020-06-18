import styled from "styled-components";

export const MainSection = styled.div`
  margin-top: 15rem; //not perfectly centered when working with different resolutions
  background-color: #999;
  align-items: center;
`;

export const LoginHeader = styled.div`
  align-self: flex-start;
  width: 100vh;
`;

export const SecondarySection = styled.div`
  display: flex;
  justify-content: center;
`;

export const LoginBox = styled.div`
  height: 14rem;
  width: 30rem;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 0.2rem solid black;

  i {
    font-size: 0.9rem;
  }
`;

export const InputStyling = styled.div`
  padding: 0.6rem;
  align-items: center;

  input {
    outline: none;
    border: none;
    height: 1.3rem;
    font-size: 0.8rem;
  }
`;

export const IconStyling = styled.span`
  font-size: 0.8em;
  padding-right: 0.2rem;
`;

export const InputDiv = styled.div`
  border: 0.01rem solid #999;
  padding: 0.2rem;
  width: 18rem;
`;

export const LoginBtnsDiv = styled.div`
  display: flex;
  padding-top: 1rem;
  align-items: center;

  button {
    font-size: 0.8rem;
    width: 8rem;
    background-color: transparent;
    outline: none;
    border: none;
    cursor: pointer;
  }
`;

export const LoginBtnnsSpacer1 = styled.span`
  padding-right: 1rem;
`;

export const LoginBtnnsSpacer2 = styled.span`
  padding-left: 1rem;
`;
