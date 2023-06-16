import React, { useEffect } from "react";
import { useNavigateContext } from "../../Context/NavigateContext";
import { useNavigate, useLocation } from "react-router-dom";
import Camera, { FACING_MODES, IMAGE_TYPES } from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";

import Content from "../../Components/Content";

import faceShape from "../../Assets/combined-shape.svg";
import * as S from "../../Components/styles/styles";

export default function ReconhecimentoFacial() {
  const navigate = useNavigate();
  const location = useLocation();
  const { setHeaderBack, setIsOverlay, setTitleHeader } = useNavigateContext();

  const handleNavigate = () => {
    if (location.pathname === "/atendimento/reconhecimento-facial") {
      navigate("/atendimento/testeconexao");
    } else {
      // navigate("/agendamento/recomendacao-anexo")

      navigate("/agendamento/recomendacao-anexo");
    }
  };

  function handleTakePhoto(dataUri) {
    // Do stuff with the photo...
    console.log("takePhoto");
    handleNavigate();
  }

  useEffect(() => {
    setHeaderBack(true);
    setIsOverlay("true");
    setTitleHeader("Validação facial");

    return () => {
      setIsOverlay("false");
      setTitleHeader("");
    };
  });

  return (
    <>
      {/* central content */}
      <Content style={{
        overflow: "hidden"
      }}>
        <S.Row>
          <S.ValidateShape src={faceShape} alt="Face shape" />
          <S.Column>
            <Camera
              onTakePhoto={(dataUri) => {
                handleTakePhoto(dataUri);
              }}
              idealFacingMode={FACING_MODES.USER}
              idealResolution={{ width: 640, height: 480 }}
              imageType={IMAGE_TYPES.JPG}
              imageCompression={0.97}
              isMaxResolution={true}
              isImageMirror={false}
              isSilentMode={false}
              isDisplayStartCameraError={true}
              isFullscreen={true}
              sizeFactor={1}
            />
          </S.Column>
        </S.Row>
      </Content>
    </>
  );
}
