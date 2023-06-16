import React, { useEffect,  } from "react"
import { useNavigate } from "react-router-dom";
import { useNavigateContext } from "../../Context/NavigateContext"

import Footer from "../../Components/Footer";
import Content from "../../Components/Content";


import casal from "../../Assets/casal-tela-inicial.png";
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
          <S.Casal src={casal} alt="Casal" loading="lazy"/>
        </S.Row>
        <S.Row>
          <S.Title>Vídeo Chamada</S.Title>
        </S.Row>
        <S.Row>
          <p>Lorem Ipsum is simply dummy text of.....</p>
        </S.Row>
      </Content>

      {/* footer content */}
      <Footer>
        <S.Row>
          <S.Column>
            <S.ButtonSecondary onClick={() => navigate("/atendimento/orientacoes")}>Já agendei</S.ButtonSecondary>
          </S.Column>
          <S.Column>
            <S.ButtonPrimary fullwidth={"true"} onClick={() => navigate("/agendamento/titular-beneficiario")}>Primeiro acesso</S.ButtonPrimary>
          </S.Column>
        </S.Row>
      </Footer>
    </>
  )
}