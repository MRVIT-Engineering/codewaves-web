import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
  align-items: center;
`;

export const PrimaryText = styled.span`
  color: var(--primary);
`;

export const GreyText = styled.span`
  color: var(--placeholder-grey);
`;

export const StyledTab = styled.div<{ active?: boolean }>`
  border-radius: 20px;
  height: 20px;
  padding: 15px;
  border: 1px solid lightgrey;
  display: flex;
  align-items: center;
  background-color: ${props => (props.active ? 'var(--primary)' : 'white')};
  color: ${props => (props.active ? 'white' : 'var(--custom-black)')};
  margin-right: 16px;

  &:hover {
    cursor: pointer;
  }
`;
