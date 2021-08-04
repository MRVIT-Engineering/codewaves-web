import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
  align-items: center;
`;

export const RowWithWrap = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
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

export const StyledCard = styled.div`
  width: 240px;
  border: 1px solid transparent;
  border-radius: 8px;
  margin: 0 16px 16px 0;
  padding: 16px;
  transition: border-color 0.4s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--background-grey);

  &:hover {
    border-color: var(--primary);
    cursor: pointer;
  }
`;
