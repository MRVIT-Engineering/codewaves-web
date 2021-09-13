import { useState } from 'react';
import styled from 'styled-components';
import { IoChevronDownOutline } from 'react-icons/io5';
import { AiOutlineClose } from 'react-icons/ai';

import { PROGRAMING_LANGUAGES, ProgrammingLanguage } from '../../constants/languages/Languages';
import { Colors } from '../../constants/style/Colors';

import { TextInput } from '../control/TextInput';
import Icon from '../icon/Icon';

const SelectContainer = styled.div`
  width: 100%;
  height: 60px;
  position: relative;
`;

const IconContainer = styled.span`
  position: absolute;
  height: 16px;
  overflow: hidden;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
`;

const OptinosContainer = styled.div<{ height: number }>`
  width: 100%;
  height: ${props => props.height + 'px'};
  background-color: ${Colors.backgroundGrey};
  box-shadow: var(--lighter-shadow);
  position: absolute;
  top: 72px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  transition: height 0.4s;
  overflow: auto;
  z-index: 222;
`;

const OptionContainer = styled.div`
  width: 100%;
  height: 60px;
  background-color: ${Colors.backgroundGrey};
  padding: 0 16px;
  transition: background-color 0.4s;
  cursor: pointer;
  display: flex;
  align-items: center;

  :hover {
    background-color: #eceff3;
  }
`;

const Grey = styled.span`
  margin-left: auto;
  font-size: 12px;
  color: ${Colors.placeholderGrey};
`;

const Title = styled.h4`
  color: ${Colors.customblack};
  margin: 0;
`;

interface LanguagesSelectProps {
  value: string;
  setTextValue: (newValue: string) => void;
  onValueChange: (option: ProgrammingLanguage) => void;
  placeholder?: string;
}

const LanguagesSelect = ({ value, setTextValue, onValueChange, placeholder }: LanguagesSelectProps) => {
  const [open, setOpen] = useState(false);

  return (
    <SelectContainer>
      <TextInput
        onChange={e => {
          setTextValue(e.target.value);
        }}
        onFocus={() => {
          setOpen(true);
        }}
        placeholder={placeholder ? placeholder : 'Select language'}
        value={value}
      />
      <IconContainer
        onClick={() => {
          setOpen(prev => !prev);
        }}
      >
        {open ? (
          <Icon icon={<AiOutlineClose />} color={Colors.placeholderGrey} />
        ) : (
          <Icon icon={<IoChevronDownOutline />} color={Colors.placeholderGrey} />
        )}
      </IconContainer>
      <OptinosContainer height={open ? 180 : 0}>
        {PROGRAMING_LANGUAGES.map(pl => (
          <OptionContainer
            key={pl.name}
            onClick={() => {
              setTextValue(`${pl.name} - ${pl.compilers[0].name}`);
              onValueChange(pl);
              setOpen(false);
            }}
          >
            {pl.icon} <Title>{pl.name}</Title> <Grey>{pl.compilers[0].name}</Grey>
          </OptionContainer>
        ))}
      </OptinosContainer>
    </SelectContainer>
  );
};

export default LanguagesSelect;
