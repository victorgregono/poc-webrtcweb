import { styled } from "styled-components";

export const CardRow = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: start;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 62px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
  border: 2px solid #E1E2E0;
  border-radius: 4px;
  padding: 22px;

  max-width: 398px;
`;

export const ContentCard = styled.div`
  padding: 0 22px;
  line-height: 2rem;
`;

export const FooterCard = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  background: #E1E2E0;
  border-radius: 4px 0px 3px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #000000;
  padding: 1rem 2rem;
`;