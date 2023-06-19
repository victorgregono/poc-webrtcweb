import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useNavigateContext } from "../../Context/NavigateContext";

import Footer from "../../Components/Footer";
import Content from "../../Components/Content";

import logoBancoMercantilInverse from "../../Assets/logo_banco_mercantil_inverse.png";

import vectorMais from "../../Assets/vector+.svg";
import vectorM from "../../Assets/vectorM.svg";

import * as S from "../../Components/styles/styles";

import * as SS from "./styles";

export default function Login() {
  const navigate = useNavigate();
  const { setHeaderBack } = useNavigateContext();

  useEffect(() => {
    setHeaderBack(false);
  });

  return (
    <>
      {/* central content */}

      <SS.Location>
        <S.Row>
          <img
            src={logoBancoMercantilInverse}
            alt="Logo banco mercantil inverse"
          />
        </S.Row>

        <S.Row>
          <SS.Title>Vídeo chamada</SS.Title>
          <S.Row>
            <SS.P>Atendimento</SS.P>
          </S.Row>
        </S.Row>

        <S.Row>
          <SS.Login>
            <S.InputContent>
              <S.InputGroup>
                <S.Label>Usuário</S.Label>
                <S.Input name="usuario" placeholder="Usuário" />
              </S.InputGroup>

              <S.InputGroup>
                <S.Label>Senha</S.Label>
                <S.Input name="semha" placeholder="Senha" />
              </S.InputGroup>
            </S.InputContent>
            <S.Row>
              <S.Column>
                <S.ButtonPrimary
                  fullwidth={"true"}
                  onClick={() => navigate("/agendamento/titular-beneficiario")}
                >
                  Acessar
                </S.ButtonPrimary>
                <S.Row>
                  <p>Esqueci minha senha</p>
                </S.Row>
              </S.Column>
            </S.Row>
          </SS.Login>
        </S.Row>
       
      </SS.Location>

      {/* <Content>
        <S.Row>
          <S.Casal src={casal} alt="Casal" loading="lazy"/>
        </S.Row>
        <S.Row>
          <S.Title>Vídeo Chamada</S.Title>
        </S.Row>
        <S.Row>
          <p>Lorem Ipsum is simply dummy text of.....</p>
        </S.Row>
      </Content> */}

      {/* footer content */}
      {/* <Footer>
        <S.Row>
          <S.Column>
            <S.ButtonSecondary onClick={() => navigate("/atendimento/orientacoes")}>Já agendei</S.ButtonSecondary>
          </S.Column>
          <S.Column>
            <S.ButtonPrimary fullwidth={"true"} onClick={() => navigate("/agendamento/titular-beneficiario")}>Primeiro acesso</S.ButtonPrimary>
          </S.Column>
        </S.Row>
      </Footer> */}
    </>
  );
}
