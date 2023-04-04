import styled from "styled-components";

export const StyledHeader = styled.header`

margin-top: 2rem;
margin-bottom: 1rem;
display: flex;
align-items: center;
justify-content: center;
gap: 50px;

img{
  width: 144px;
  height: 20px;
}

button{
  width: 80px;
  height: 32px;
  font-family: 'Inter', sans-serif;
  background-color: var(--color-box);
  color: var(--color-text);
  border-radius: 4px;
  border: none;
  cursor: pointer;
}

@media(min-width: 769px){
  gap: 170px;
}

`