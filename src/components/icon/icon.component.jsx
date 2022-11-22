import {CustomEmoji} from './icon.styles'

const Emoji = ({ children }) => {
  return <CustomEmoji noWrapper={true} options={{ className: 'twemoji' }}>{children}</CustomEmoji>;
}

export default Emoji;