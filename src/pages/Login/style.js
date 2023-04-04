import styled from "styled-components";

export const StyledLogin = styled.main`
  
  height: 100vh;
  background-color: var(--color-black);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1rem;

  img{
    margin-top: 2rem;
    margin-bottom: 1rem;
    width: 144px;
    height: 20px;
  }

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
      border: solid 1px #F8F9FA;
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
    }

    .form_footer{
      align-self: center;
      color: var(--color-grey)
    }

    .register{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 260px;
      height: 40px;
      align-self: center;
      color: var(--color-text);
      background-color: var(--color-grey);
      border-radius: 4px;
      border: none;
      text-decoration: none;
      cursor: pointer;
      margin-bottom: 1rem;
    }
  }



`