import React, { useEffect,  } from "react"
import { useNavigate } from "react-router-dom";
import { useNavigateContext } from "../../Context/NavigateContext"

import Footer from "../../Components/Footer";
import Content from "../../Components/Content";

import * as S from '../../Components/styles/styles';

export default function Home() {
  const navigate = useNavigate();
  const { setHeaderBack } = useNavigateContext();

  useEffect(() => {
    setHeaderBack(false)
  })

  return (
    <>
      {/* central content */}
      <Content>
        <S.Row>
          <S.Title>Vídeo Chamada</S.Title>
        </S.Row>
      </Content>

      {/* footer content */}
      <Footer>
        <S.Row>
          <S.Column>
            <S.ButtonPrimary fullwidth={"true"}>LOGIN</S.ButtonPrimary>
          </S.Column>
        </S.Row>
      </Footer>
    </>
  )
}