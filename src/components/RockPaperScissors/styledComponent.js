import styled from 'styled-components'

export const OverallContainer = styled.div`
  background-color: #223a5f;
  display: flex;
  min-height: 100vh;
`
export const DisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const ScoreContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 550px;
  width: 80%;
  border: 2px solid #ffffff;
  padding: 15px;
  @media screen and (min-width: 768px) {
    width: 90%;
  }
`
export const HeadingElement = styled.h1`
  color: #ffffff;
  font-size: 30px;
  font-family: 'Bree Serif';
  font-weight: bold;
`
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
  background-color: #ffffff;
`
export const Description = styled.p`
  color: #223a5f;
  font-size: 20px;
  font-weight: bold;
  font-family: 'Roboto';
`
export const SmallHeading = styled(Description)`
  color: #223a5f;
  font-size: 25px;
  font-family: 'Roboto';
`
export const UnorderedList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ChoiceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
`
export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ImageElement = styled.img`
  width: 150px;
  height: 150px;
`
export const HeadingText = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 32px;
`
export const ButtonElement = styled.button`
  color: #223a5f;
  background-color: #ffffff;
  border: none;
  border-radius: 8px;
  padding: 10px;
`
export const GameResult = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  padding: 15px;
  width: 80%;
`
export const RulesImage = styled.img`
  width: 80%;
  height: 40vh;
`
export const PopupContainer = styled.div`
  align-self: flex-end;
`
