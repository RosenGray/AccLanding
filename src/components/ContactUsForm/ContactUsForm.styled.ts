import styled, { css } from "styled-components";
import { ContainerWrapper } from "../Container/Container.styled";
import Button from "../Button/Button.styled";

const commonInput = css`
  padding: 20px 12px;
  border-radius: 0.25rem;
  border: 1px solid rgb(148, 163, 184);
  font-family: inherit;
  font-size: inherit;
`;

export const ContactUsFormWrapper = styled.section`
  flex: 1;
  display: flex;
  padding: 50px 0;
  ${ContainerWrapper} {
    flex: 1;
  }
  form {
    width: 100%;
    max-width: 500px;
    margin: auto;
    display: flex;
    flex-direction: column;
  }
`;

export const Content = styled.div`

  flex:1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h2`
  font-size: 50px;
  text-align: center;
/* 
  padding: 20px; */
  /* margin-bottom: 50px; */
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;

export const Label = styled.label`
  font-size: 18px;
  font-weight: bold;
`;

export const Input = styled.input`
  ${commonInput}
`;
export const Textarea = styled.textarea`
  ${commonInput}
`;

export const SubmitButton = styled(Button)`
  background-color: #08334b;
  color: #fff;
  &:hover {
    background-color: #fff;
    color: #08334b;
  }
`;

export const Loader = styled.div`
  width: 200px;
  aspect-ratio: 1;
  border: 15px solid #ddd;
  border-radius: 50%;
  position: relative;
  transform: rotate(45deg);

  &:before {
    content: "";
    position: absolute;
    inset: -15px;
    border-radius: 50%;
    border: 15px solid #08334b;
    animation: l18 2s infinite linear;
  }
  @keyframes l18 {
    0% {
      clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);
    }
    25% {
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);
    }
    50% {
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);
    }
    75% {
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);
    }
    100% {
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);
    }
  }
`;
