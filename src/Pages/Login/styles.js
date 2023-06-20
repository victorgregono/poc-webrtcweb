import { styled } from "styled-components";

import LoginFundo from "../../Assets/LoginFundo.svg";

export const Location = styled.div`
  background-image: url(${LoginFundo});

  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
`;

export const Login = styled.div`
  background-color: #ffffff;
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 30px;
  left: 0px;
  width: 400px;
  height: 426px;
  margin: auto;
  box-shadow: 0px 0px 10px black;
  padding: 20px;
  box-sizing: border-box;
`;

export const Title = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;

  color: #ffffff;
  margin-top: 1rem;

  display: block;
`;

export const PP = styled.p`
  color: #ffffff;
  text-align: right;
`;

export const Inputt = styled.input`
  border: 2px solid #000000;
  border-radius: 4px;
  height: 70px;
  padding-left: 1rem;

  &::-webkit-input-placeholder {
    /* Edge */
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
  }

  &:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
  }

  &::placeholder {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
  }
`;
