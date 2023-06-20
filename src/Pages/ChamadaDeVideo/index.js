import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useNavigateContext } from "../../Context/NavigateContext";
import { useUserContext } from "../../Context/UserContext";

import '@vonage/video-publisher/video-publisher.js';
import '@vonage/video-subscribers/video-subscribers.js';
import '@vonage/screen-share/screen-share.js';

import buttonVideo from "../../Assets/button/button-video.svg";
import buttonMic from "../../Assets/button/button-mic.svg";
import buttonEndCall from "../../Assets/button/button-end-call.svg";
import buttonShare from "../../Assets/button/button-share.svg";

import FooterVideo from "../../Components/FooterVideo";
import Content from "../../Components/Content";


import * as S from '../../Components/styles/styles';
import * as C from "./styles";
import './style.css';

export default function ChamadaDeVideo() {
  // Get references to Web Components
  const publisher = useRef(null);
  const subscribers = useRef(null);
  // const screenshare = useRef(null);

  // These values normally come from the backend in a production application, but for this demo, they are hardcoded
  const apiKey = process.env.REACT_APP_API_KEY;
  const sessionId = process.env.REACT_APP_SESSION_ID;
  const token = process.env.REACT_APP_TOKEN;

  const navigate = useNavigate();
  const { user, cliente, handleGetUserSession, handleGetClienteSession } = useUserContext();
  const { setHeaderBack, setIsOverlay } = useNavigateContext();
  const [session, setSession] = useState(null);
  const [publisherState, setPublisherState] = useState(null);
  const [isSharing, setIsSharing] = useState(false);

  useEffect(() => {
    handleGetUserSession("usuariologado");
    handleGetClienteSession("cliente");
  }, [])
  
  useEffect(() => {
    setHeaderBack(true)
    setIsOverlay("true")

    return () => {
      setIsOverlay("false")
    }
  })
  
  

  const toggleVideo = () => {
    publisher.current.toggleVideo();
  };

  const toggleAudio = () => {
    publisher.current.toggleAudio();
  };

  const __handleStartScreenshare = async () => {
    const OT = window.OT;
    const publisherOptions = {
      insertMode: 'append',
      width: "100%",
      height: "100%",
      videoSource: 'screen'
    };
    if (window.OT){
      const publisher = OT.initPublisher(document.querySelector('screen-share'),publisherOptions, (error) => {
        
        if(error){
          console.error("error: ", error)
        } else {
          session.publish(publisher, (pubError) => {
            if(pubError){
              console.error("session error: ", pubError.message);
            }
          });
        }
      });
    } else {
      console.error("Please load Vonage Video library.");
    }
  }

  useEffect(() => {
    const OT = window.OT;

    // Initialize an OpenTok Session object
    const session = OT.initSession(apiKey, sessionId);
    setSession(session);

    // Set session and token for Web Components
    publisher.current.session = session;
    publisher.current.token = token;
    subscribers.current.session = session;
    subscribers.current.token = token;
    // screenshare.current.session = session;
    // screenshare.current.token = token;
    session.connect(token);

    return () => {
      session.disconnect();
    }
  });

  return (
  <>
    {/* central content */}
    <Content>
      <C.CardRow>
          <video-publisher ref={publisher}>
            <C.CardRound />
            <C.CardRoundSubtitle>{user?.nome?.split(" ")[0]}</C.CardRoundSubtitle>
          </video-publisher>
          <video-subscribers ref={subscribers}>
            <C.CardRound />
            <C.CardRoundSubtitle>{cliente?.nome?.split(" ")[0]}</C.CardRoundSubtitle>
          </video-subscribers>
          
          {/* <screen-share start-text="start" stop-text="stop" width="300px" height="240px" ref={screenshare}></screen-share> */}
      </C.CardRow>
    </Content>

    {/* footer content */}
    <FooterVideo>
      <S.Row>
        <S.Column>
          <C.ButtonGroup>
            <C.ButtonMedia onClick={toggleAudio}><img src={buttonMic} alt="Microfone" /></C.ButtonMedia>
            <C.ButtonMedia onClick={toggleVideo}><img src={buttonVideo} alt="Vídeo" /></C.ButtonMedia>
            <C.ButtonMedia onClick={() => __handleStartScreenshare()} className='screen-share'><img src={buttonShare} alt="Compartilhar" /></C.ButtonMedia>
            <C.ButtonMedia onClick={() => navigate(-1)}><img src={buttonEndCall} alt="Encerrar" /></C.ButtonMedia>
          </C.ButtonGroup>
        </S.Column>

        <S.Column>
          <C.ButtonGroup>
            <C.FooterButton>Ver documentos</C.FooterButton>
            <C.FooterButton>Enviar contratos</C.FooterButton>
          </C.ButtonGroup>
        </S.Column>
      </S.Row>
    </FooterVideo>
  </>
  );
}
