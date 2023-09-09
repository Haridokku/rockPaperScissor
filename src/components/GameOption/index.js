import {ImageContainer, ImageElement, ButtonElement} from './styledComponent'

const GameOption = props => {
  const {optionDetails, changeImageView} = props
  const {imageUrl, id} = optionDetails
  const onChangeImage = () => {
    changeImageView(id)
  }
  return (
    <ImageContainer>
      <ButtonElement onClick={onChangeImage} data-testid={`${id}Button`}>
        <ImageElement>
          src={imageUrl} alt={id}
        </ImageElement>
      </ButtonElement>
    </ImageContainer>
  )
}
export default GameOption
