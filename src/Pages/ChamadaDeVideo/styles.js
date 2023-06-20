import { styled } from "styled-components";

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
`;

export const Button = styled.button`
  width: 100%;
  height: 60px;
  background: #000000;
  border-radius: 4px;
  border: none;
  color: #fff;
`;

export const FooterButton = styled.button`
  background: #4A4A4A;
  border: none;
  border-radius: 4px;
  padding: 2vh 3vw;

  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  color: #FFFFFF;
`;

export const ButtonMedia = styled.span`
  border: none;
  img {
    height: 8vh;
  }
`;

export const CardRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 16px;
`;

export const CardRoundSubtitle = styled.div`
  position: absolute;
  bottom: 20px;
  right: 25px;
  z-index: 99;

  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 38px;
  text-align: right;
  color: #FFFFFF;
  text-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
`;

export const CardRound = styled.div`
  width: 100%;
  height: 78px;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 9;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
  border-radius: 0px 0px 6px 6px;
`;