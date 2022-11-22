import styled from 'styled-components';
import Twemoji from 'react-twemoji';

export const CustomEmoji = styled(Twemoji)`
  img {
    height: 1em;
    width: 1em;
    margin: 0 0.05em 0 0.1em;
    vertical-align: -0.1em;
  }
`;