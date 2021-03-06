import styled from 'styled-components';
import { ScreenSize } from '../../../constants/media-queries/mediaQueris';

const ButtonReplica = styled.div`
  height: 60px;
  width: 120px;
  background-color: var(--primary);
  color: white;
  border: none;
  outline: none;
  border-radius: var(--border-radius);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  position: absolute;
  top: -20px;
  right: -25px;
  transition: position 0.4s opacity 0.4s;
  box-shadow: var(--light-shadow);

  ${ScreenSize} {
    height: 50px;
    width: 100px;
  }
`;

export const ButtonReplicaComp = (props: { children?: any }) => <ButtonReplica>{props.children}</ButtonReplica>;
