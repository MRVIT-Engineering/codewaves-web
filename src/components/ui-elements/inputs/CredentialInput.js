import styled from "styled-components";

const PrimaryInput = styled.input`
    width: 100%;
    margin-bottom: 5px;
    height: 62px;
    background-color: var(--customGrey);
    color: var(--placeholderColor);
    margin-top: 20px;
    padding-left: 30px;
    border: none;
    border-radius: 5px;
    border: 2px solid transparent;
    font-family: "PT Mono", sans-serif;
    font-size: 1.6rem;
    transition: all 0.4s linear;
    font-weight: 700;

    &:focus {
        outline: none;
        border: 2px solid var(--primary);
    }

    ::-webkit-input-placeholder {
      /* Chrome/Opera/Safari */
      color: var(--placeholderColor);
    }
    
    ::-moz-placeholder {
      /* Firefox 19+ */
      color: var(--placeholderColor);
    }
    
    :-ms-input-placeholder {
      /* IE 10+ */
      color: var(--placeholderColor);
    }
    
    :-moz-placeholder {
      /* Firefox 18- */
      color: var(--placeholderColor);
    }
  
`;

export default function CredentialInput(props) {
  return (
    <PrimaryInput type={props.inputType} placeholder={props.placeholderText}></PrimaryInput>
  );
}