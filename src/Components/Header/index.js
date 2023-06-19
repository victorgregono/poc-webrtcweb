import React from "react";

import logo from "../../Assets/logo-mercantil-oficial-branca.svg";
import * as S from '../../Components/styles/styles';
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    // header
    <S.Header>
      <S.Row>

        <S.Column>
          <S.Logo src={logo} alt="Logo" />
        </S.Column>

        {/* <S.Column></S.Column> */}

        <S.Column>
            <div style={{
              display: "inherit",
              justifyContent: "end",
              gap: '5rem',
            }}>
                <S.HeaderTitle onClick={() => navigate(`/lista-de-espera`)}>List de espera</S.HeaderTitle>
                <S.HeaderTitle onClick={() => navigate(`/`)}>Sair</S.HeaderTitle>
            </div>
        </S.Column>

      </S.Row>
    </S.Header>
  )
}