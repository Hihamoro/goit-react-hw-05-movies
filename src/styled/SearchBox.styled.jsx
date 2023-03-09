import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-bottom: 30px;
`

export const Input = styled.input`
  padding: 7px;
  border-radius: 1px;
  font: inherit;
`;
export const Button = styled.button`
font-family: inherit;
 padding: 8px 16px;
  border-radius: 1px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  background-color: white;
  &:hover,
  &:focus {
    color: white;
    background-color: orangered;
  }
`