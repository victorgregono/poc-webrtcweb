import React, { useEffect,  } from "react"
import { useNavigate } from "react-router-dom";
import { useNavigateContext } from "../../Context/NavigateContext"

import Content from "../../Components/Content";

import * as S from '../../Components/styles/styles';

export default function ListaDeEspera() {
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
          <S.Column>
            <div style={{
                display: "inherit",
                flexDirection: 'column',
                gap: '0.5rem',
              }}>
                  <S.Title>Lista de espera</S.Title>
                  <S.Subtitle>10 clientes na fila de espera</S.Subtitle>
              </div>
          </S.Column>
          <S.Column>

            <div style={{
              display: "inherit",
              justifyContent: "end",
            }}>
                <S.ButtonPrimary onClick={() => navigate(`/chamada-de-video`)}>Próximo atendimento</S.ButtonPrimary>
            </div>
          </S.Column>
        </S.Row>

        <S.Row>
          <div>

          </div>
        </S.Row>
      </Content>
    </>
  )
}