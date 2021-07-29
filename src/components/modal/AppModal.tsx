import styled from 'styled-components';
import Modal from '@material-ui/core/Modal';
import { HeadlineSmall } from '../typography/Headlines';

const StyledContainer = styled.div`
  width: 550px;
  height: 500px;
  background-color: white;
  border-radius: 8px;
  box-shadow: var(--light-shadow);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  display: flex;
  flex-flow: column;
  border: none;
  outline: none;
  overflow: hidden;
`;

const StyledHeader = styled.div`
  width: 100%;
  height: 60px;
  background-color: var(--background-grey);
  display: flex;
  align-items: center;
  padding-left: 16px;
`;

const Padding = styled.div`
  padding: 16px;
`;

interface AppModalProps {
  opened: boolean;
  handleClose: () => void;
  children: any;
  title: string;
}

export const AppModal = ({ opened, handleClose, children, title }: AppModalProps) => {
  return (
    <Modal open={opened} onClose={handleClose}>
      <StyledContainer>
        <StyledHeader>
          <HeadlineSmall>{title}</HeadlineSmall>
        </StyledHeader>
        <Padding>{children}</Padding>
      </StyledContainer>
    </Modal>
  );
};
