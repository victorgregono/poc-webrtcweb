import React, { useEffect,  } from "react"
import { useNavigateContext } from "../../Context/NavigateContext"
import { useNavigate } from "react-router-dom";

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
          <S.ButtonPrimary onClick={() => navigate(`/lista-de-espera`)}>Lista de espera</S.ButtonPrimary>
        </S.Row>
      </Content>
    </>
  )
}