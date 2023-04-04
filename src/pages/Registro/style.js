import styled from "styled-components";

export const StyledRegister = styled.main`
background-color: var(--color-black);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 1rem;

  form{
    width: 90%;
    max-width: 400px;
    background-color: var(--color-box);
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    margin-bottom: 1rem;
    font-family: 'Inter', sans-serif;

    h2{
      align-self: center;
      color: var(--color-text);
      font-weight: 700;
    }

    span{
      align-self: center;
      color: var(--color-grey)
    }

    p{
      font-weight: 400;
      margin-left: 10px;
      color: var(--color-text);
    }

    input{
      margin-left: 10px;
      margin-right: 10px;
      height: 40px;
      border-radius: 4px;
      border: none;
      background-color: #343B41;
      color: white;
    }
  

    select{
      margin-left: 10px;
      margin-right: 10px;
      height: 40px;
      color: var(--color-text);
      border-radius: 4px;
      border: none;
      background-color: #343B41;
    }

    button{
      width: 260px;
      height: 40px;
      align-self: center;
      color: var(--color-text);
      background-color: var(--color-pink);
      border-radius: 4px;
      border: none;
      margin-bottom: 1rem;
    }

  }

`