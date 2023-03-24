import './index.css'

const MatchGameThumbnail = props => {
  const {eachImage, onClickThumbnailImage} = props
  const {id, thumbnailUrl} = eachImage

  const onClickThumbnail = () => {
    onClickThumbnailImage(id)
  }

  return (
    <li>
      <button
        type="button"
        className="thumbnail-button"
        onClick={onClickThumbnail}
      >
        <img className="thumbnail" alt="thumbnail" src={thumbnailUrl} />
      </button>
    </li>
  )
}

export default MatchGameThumbnail
