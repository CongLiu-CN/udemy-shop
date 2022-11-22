import {CustomEmoji} from './icon.styles'

const Emoji = ({ children, }) => {
  return <CustomEmoji tag='span' options={{ className: 'twemoji' }}>{children}</CustomEmoji>;
}

export default Emoji;