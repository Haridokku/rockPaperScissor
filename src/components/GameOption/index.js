const GameOption = props => {
  const {optionDetails, changeImageView} = props
  const {imageUrl, id} = optionDetails
  const onChangeImage = () => {
    changeImageView(id)
  }
  return (
    <ImageContainer>
      <ButtonElement
        onClick={onChangeImage}
        data-testid={`${id.lower()}Button`}
      >
        <ImageElement src={imageUrl} alt={id} />
      </ButtonElement>
    </ImageContainer>
  )
}
export default GameOption

