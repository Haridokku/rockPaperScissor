import {Component} from 'react'

import {RiCloseLine} from 'react-icons/ri'
import Popup from 'reactjs-popup'
import GameOption from '../GameOption'
import 'reactjs-popup/dist/index.css'

import {
  OverallContainer,
  DisplayContainer,
  ScoreContainer,
  HeadingElement,
  Description,
  SmallHeading,
  CardContainer,
  UnorderedList,
  ResultContainer,
  ChoiceContainer,
  UserContainer,
  ImageElement,
  HeadingText,
  ButtonElement,
  GameResult,
  RulesImage,
  PopupContainer,
} from './styledComponent'

const gameStatusConstants = {
  in_progress: 'IN_PROGRESS',
  win: 'WIN',
  loss: 'LOSS',
  draw: 'DRAW',
}
class RockerPaperScissors extends Component {
  state = {
    gameResult: gameStatusConstants.in_progress,
    score: 0,
    userId: '',
    randomId: '',
  }

  changeImageView = id => {
    this.setState(
      {userId: id, randomId: this.getRandomImageId()},
      this.evaluateGame,
    )
  }

  getRandomImageId = () => {
    const {choicesList} = this.props
    const index = Math.floor(Math.random() * 3)
    const randomObject = choicesList[index]
    console.log(randomObject.id)
    return randomObject.id
  }

  evaluateGame = () => {
    const {userId, randomId} = this.state
    if (userId === randomId) {
      this.setState({gameResult: gameStatusConstants.draw})
    } else if (userId === 'ROCK') {
      if (randomId === 'SCISSORS') {
        this.setState(prevState => ({
          gameResult: gameStatusConstants.win,
          score: prevState.score + 1,
        }))
      } else {
        this.setState(prevState => ({
          gameResult: gameStatusConstants.loss,
          score: prevState.score - 1,
        }))
      }
    } else if (userId === 'SCISSORS') {
      if (randomId === 'PAPER') {
        this.setState(prevState => ({
          gameResult: gameStatusConstants.win,
          score: prevState.score + 1,
        }))
      } else {
        this.setState(prevState => ({
          gameResult: gameStatusConstants.loss,
          score: prevState.score - 1,
        }))
      }
    } else if (userId === 'PAPER') {
      if (randomId === 'ROCK') {
        this.setState(prevState => ({
          gameResult: gameStatusConstants.win,
          score: prevState.score + 1,
        }))
      } else {
        this.setState(prevState => ({
          gameResult: gameStatusConstants.loss,
          score: prevState.score - 1,
        }))
      }
    }
  }

  renderScoreContainer = () => {
    const {score} = this.state
    return (
      <ScoreContainer>
        <HeadingElement>
          ROCK <br /> PAPER <br /> SCISSORS
        </HeadingElement>
        <CardContainer>
          <Description>Score</Description>
          <SmallHeading>{score}</SmallHeading>
        </CardContainer>
      </ScoreContainer>
    )
  }

  onRenderPlayGame = () => {
    const {choicesList} = this.props
    return (
      <UnorderedList>
        {choicesList.map(each => (
          <GameOption
            key={each.id}
            optionDetails={each}
            changeImageView={this.changeImageView}
          />
        ))}
      </UnorderedList>
    )
  }

  renderPlay = () => {
    this.setState({gameResult: gameStatusConstants.in_progress})
  }

  onRenderDrawView = () => {
    const {userId, randomId} = this.state
    const {choicesList} = this.props
    const userObject = choicesList.filter(each => each.id === userId)
    const randomObject = choicesList.filter(item => item.id === randomId)
    return (
      <ResultContainer>
        <ChoiceContainer>
          <UserContainer>
            <HeadingElement>YOU</HeadingElement>
            <ImageElement src={userObject.imageUrl} alt="your choice" />
          </UserContainer>
          <UserContainer>
            <HeadingElement>OPPONENT</HeadingElement>
            <ImageElement src={randomObject.imageUrl} alt="opponent choice" />
          </UserContainer>
        </ChoiceContainer>
        <HeadingText>IT IS DRAW</HeadingText>
        <ButtonElement type="button" onClick={this.renderPlay}>
          Play Again
        </ButtonElement>
      </ResultContainer>
    )
  }

  onRenderWinView = () => {
    const {userId, randomId} = this.state
    const {choicesList} = this.props
    const userObject = choicesList.filter(each => each.id === userId)
    const randomObject = choicesList.filter(item => item.id === randomId)
    return (
      <ResultContainer>
        <ChoiceContainer>
          <UserContainer>
            <HeadingElement>YOU</HeadingElement>
            <ImageElement src={userObject.imageUrl} alt="your choice" />
          </UserContainer>
          <UserContainer>
            <HeadingElement>OPPONENT</HeadingElement>
            <ImageElement src={randomObject.imageUrl} alt="opponent choice" />
          </UserContainer>
        </ChoiceContainer>
        <HeadingText>YOU WON</HeadingText>
        <ButtonElement type="button" onClick={this.renderPlay}>
          Play Again
        </ButtonElement>
      </ResultContainer>
    )
  }

  onRenderLossView = () => {
    const {userId, randomId} = this.state
    const {choicesList} = this.props
    const userObject = choicesList.filter(each => each.id === userId)
    const randomObject = choicesList.filter(item => item.id === randomId)
    return (
      <ResultContainer>
        <ChoiceContainer>
          <UserContainer>
            <HeadingElement>YOU</HeadingElement>
            <ImageElement src={userObject.imageUrl} alt="your choice" />
          </UserContainer>
          <UserContainer>
            <HeadingElement>OPPONENT</HeadingElement>
            <ImageElement src={randomObject.imageUrl} alt="opponent choice" />
          </UserContainer>
        </ChoiceContainer>
        <HeadingText>YOU LOSE</HeadingText>
        <ButtonElement type="button" onClick={this.renderPlay}>
          Play Again
        </ButtonElement>
      </ResultContainer>
    )
  }

  renderGameResultView = () => {
    const {gameResult} = this.state
    switch (gameResult) {
      case gameStatusConstants.in_progress:
        return this.onRenderPlayGame()
      case gameStatusConstants.draw:
        return this.onRenderDrawView()
      case gameStatusConstants.win:
        return this.onRenderWinView()
      case gameStatusConstants.loss:
        return this.onRenderLossView()
      default:
        return null
    }
  }

  render() {
    return (
      <OverallContainer>
        <DisplayContainer>
          {this.renderScoreContainer()}
          {this.renderGameResultView()}
          <PopupContainer>
            <Popup
              modal
              trigger={<ButtonElement type="button">Rules</ButtonElement>}
            >
              {close => (
                <GameResult>
                  <ButtonElement type="button" onClick={() => close()}>
                    <RiCloseLine size={50} />
                  </ButtonElement>
                  <RulesImage
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                  />
                </GameResult>
              )}
            </Popup>
          </PopupContainer>
        </DisplayContainer>
      </OverallContainer>
    )
  }
}

export default RockerPaperScissors
