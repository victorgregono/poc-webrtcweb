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
    setHeader(true);
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
          </S.Row>
          <S.Row>
            <SS.PP>Atendimento</SS.PP>
          </S.Row>

          <S.Row>
            <SS.Login>
              <S.Row>
                <S.InputContent>
                  <S.InputGroup>
                    <S.Label>Usuário</S.Label>
                    <SS.Inputt name="usuario" placeholder="Informe o usuário" />
                  </S.InputGroup>

                  <S.InputGroup>
                    <S.Label>Senha</S.Label>
                    <SS.Inputt
                      style={{ type: "hidden" }}
                      name="senha"
                      placeholder="Informe a senha"
                    />
                  </S.InputGroup>
                </S.InputContent>
              </S.Row>

              <S.Row>
                <S.Column>
                  <S.ButtonPrimary
                    style={{ marginTop: "-85px", cursor: "pointer" }}
                    fullwidth={"true"}
                    onClick={() => navigate("/lista-de-espera")}
                  >
                    Acessar
                  </S.ButtonPrimary>
                  <S.Row>
                    <p style={{ cursor: "pointer" }}>Esqueci minha senha</p>
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
