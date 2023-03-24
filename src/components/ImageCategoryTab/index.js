import './index.css'

const GameListTab = props => {
  const {eachTab, selectedTabId, onToggleTab} = props
  const {tabId, displayText} = eachTab

  const selectedTabIdClass = tabId === selectedTabId ? 'selected-tab' : ''

  const onClickTab = () => {
    onToggleTab(tabId)
  }

  return (
    <li>
      <button
        className={`tab-button ${selectedTabIdClass}`}
        type="button"
        onClick={onClickTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default GameListTab
