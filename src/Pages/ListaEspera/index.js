import React, { useEffect,  } from "react"
import { useNavigate } from "react-router-dom";
import { useNavigateContext } from "../../Context/NavigateContext"
import { useUserContext } from "../../Context/UserContext";

import Content from "../../Components/Content";

import * as S from '../../Components/styles/styles';
import * as C from './styles';

export default function ListaDeEspera() {
  const navigate = useNavigate();
  const { setHeaderBack } = useNavigateContext();
  const { handleCreateClienteSession } = useUserContext();

  const pessoas = [
    {
      nome: "GILVANA MARIA DE FREITAS GONCALVES",
      cpf: "001.257.636-03",
      telefone: "(31) 99937-2137",
      idade: "46",
      beneficio: "AUXILIO DOENCA",
      possivelpersona: "PRATICA",
      contacorrente: "NÃO",
      obs: "FEZ AGENDAMENTO PELO WHATSAPP E COMPARECEU NO DIA DO AGENDAMENTO",
      urlImage: "./users/idosa.png"
    },
    {
      nome: "EDILSON RAMOS DAS DORES",
      cpf: "009.569.306-89",
      telefone: "(31) 98718-6258",
      idade: "49",
      beneficio: "AUXILIO DOENCA",
      possivelpersona: "PRATICA",
      contacorrente: "SIM",
      obs: "FEZ AGENDAMENTO PELO WHATSAPP E COMPARECEU NO DIA DO AGENDAMENTO",
      urlImage: "./users/edilson.png"
    },
    {
      nome: "ENI DE FATIMA RIBEIRO",
      cpf: "375.069.436-20",
      telefone: "(31) 98887-8401",
      idade: "63",
      beneficio: "APOSENTADORIA POR IDADE",
      possivelpersona: "MODERNA",
      contacorrente: "SIM",
      obs: "-",
      urlImage: "./users/eni.png"
    },
    {
      nome: "NELSON ANTONIO GONCALVES",
      cpf: "295.064.846-00",
      telefone: "(31) 98918-3748",
      idade: "65",
      beneficio: "APOSENTADORIA POR IDADE",
      possivelpersona: "TRADICIONAL",
      contacorrente: "NÃO",
      obs: "-",
      urlImage: "./users/nelson.png"
    },
    {
      nome: "OVIMAR DOS REIS SOUTO",
      cpf: "268.547.836-15",
      telefone: "(31) 98747-2616",
      idade: "68",
      beneficio: "APOSENTADORIA POR IDADE",
      possivelpersona: "TRADICIONAL",
      contacorrente: "SIM",
      obs: "-",
      urlImage: "./users/ovimar.png"
    },
    {
      nome: "EDILENE MARTINS LOPES FRAGA",
      cpf: "041.519.476-80",
      telefone: "(31) 99798-8063",
      idade: "62",
      beneficio: "PENSAO POR MORTE",
      possivelpersona: "RECEOSA",
      contacorrente: "SIM",
      obs: "-",
      urlImage: "./users/edilene.png"
    },
    {
      nome: "MARIA DA PENHA DE SOUZA",
      cpf: "057.982.336-93",
      telefone: "(31) 98965-8017",
      idade: "75",
      beneficio: "AMPARO SOCIAL AO IDOSO",
      possivelpersona: "MODERNA",
      contacorrente: "SIM",
      obs: "-",
      urlImage: "./users/maria.png"
    },
  ];

  const handleUserToChatVideo = (pessoa) => {
    handleCreateClienteSession("cliente", pessoa)
    navigate(`/chamada-de-video`)
  }

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

        <C.CardRow>
          { pessoas.map(p => {
            return (
              <C.Card key={p.cpf} onClick={() => handleUserToChatVideo(p)}>
                <div>
                  <img src={p.urlImage} alt="Mulher" width={"118"} height={"133"} />
                </div>
                <C.ContentCard>
                  <div><S.Subtitle><b>Cliente</b></S.Subtitle></div>
                  <div><S.Subtitle>{p.nome.substring(0, 17)}...</S.Subtitle></div>
                  <div><S.Subtitle><b>CPF</b></S.Subtitle></div>
                  <div><S.Subtitle>{p.cpf}</S.Subtitle></div>
                </C.ContentCard>
                <C.FooterCard>Aguardando</C.FooterCard>
              </C.Card>
            )
          })}
        </C.CardRow>
      </Content>
    </>
  )
}