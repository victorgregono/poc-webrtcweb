import React from "react";

import * as S from '../../Components/styles/styles';

export default function Content({ children, ...props }) {

  return (
    // content
    <S.Content login={props.login}>
      { children }
    </S.Content>
  )
}