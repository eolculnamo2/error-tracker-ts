import styled from "styled-components";

export const MainSection = styled.div`
  height: 100vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
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
  border: 1px solid #999;
`;

export const InputStyling = styled.div`
  padding: 0.6rem;
  align-items: center;

  input {
    outline: none;
    border: none;
    height: 1.3rem;
    width: 16rem;
    font-size: 0.8rem;
    placeholder: {
      padding-left: 1rem;
    }
  }
`;

export const InputDiv = styled.div`
  border: 0.01rem solid #999;
`;

export const LoginBtnsDiv = styled.div`
  display: flex;
  padding-top: 1rem;
  align-items: center;

  button {
    font-size: 0.8rem;
    width: 9rem;
    background-color: transparent;
    outline: none;
    border: none;
    cursor: pointer;
  }
`;
