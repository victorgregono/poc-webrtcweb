import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useNavigateContext } from "../../Context/NavigateContext";

import Content from "../../Components/Content";

import logoBancoMercantilInverse from "../../Assets/logo_banco_mercantil_inverse.png";

import * as S from "../../Components/styles/styles";

import * as SS from "./styles";

export default function Login() {
  const navigate = useNavigate();
  const { setHeaderBack, setHeader } = useNavigateContext();

  useEffect(() => {
    setHeaderBack(false);
    setHeader(false);
  });

  return (
    <>
      {/* central content */}
      <Content login={"true"}>
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
                    onClick={() =>
                      navigate("/agendamento/titular-beneficiario")
                    }
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
      </Content>
    </>
  );
}
