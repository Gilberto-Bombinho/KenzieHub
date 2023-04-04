import styled from 'styled-components'

export const StyledDashboard = styled.main`
  min-height: 100vh;
  height: auto;
  background-color: #121214;
  display: flex;
  flex-direction: column;
  align-items: center;

  header {
    width: 100vw;
    display: flex;
    padding-top: 2rem;
    align-items: center;
    justify-content: center;
    gap: 95px;
    padding-bottom: 2rem;
    border-bottom: solid 1px var(--color-grey);

    img {
      width: 120px;
      height: 20px;
    }

    button {
      width: 55px;
      height: 33px;
      color: var(--color-text);
      font-family: 'Inter';
      background-color: var(--color-box);
      border-radius: 4px;
      border: none;
      cursor: pointer;
    }
    @media (min-width: 769px) {
      gap: 500px;

    }
  }

  h1 {
    margin-top: 2rem;
    font-size: 22px;
    font-family: 'Inter';
    font-weight: 700;
    margin-left: -140px;
    display: flex;
    justify-content: center;
    color: var(--color-text);

    @media (min-width: 769px) {
      margin-left: 0px;
      margin-top: 3rem;
    }
  }

  h2 {
    width: 100vw;
    margin-top: 1rem;
    font-size: 13px;
    font-family: 'Inter';
    font-weight: 600;
    margin-left: -8px;
    display: flex;
    justify-content: center;
    color: var(--color-grey);
    padding-bottom: 2rem;
    border-bottom: solid 0.1px var(--color-grey);

    @media (min-width: 769px) {
      width: auto;
      border-bottom: none;
      padding-bottom: 0;
      margin-left: 0px;
    }
  }

  .tech_add{
    width: 33px;
    height: 33px;
    background-color: var(--color-box);
    color: var(--color-text);
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  div{
    @media (min-width: 769px){
      width: 100vw;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 290px;
      padding-bottom: 2rem;
      border-bottom: solid 0.1px var(--color-grey)
    }
  }

  .tecnologys{
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 120px;

    @media (min-width: 769px){
      gap: 520px;
    }

  }

  .tecnology_title{
    margin-left: 0;
    margin-top: 0;
  }

  section{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--color-box);
    width: 265px;
    margin-top: 1rem;
    margin-bottom: 1rem;
    display: flex;
    border-radius: 4px;
    padding-left: 10px;
    padding-right: 10px;
    border-bottom: solid 10px var(--color-box);

    @media (min-width: 769px){
      width: 670px;
    }

    span{
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
      
      width: 100%;
      background-color: #121214;
      font-family: 'Inter';

      cursor: pointer;

      .tech_title{
        color: var(--color-text);
        margin-left: 10px;
      }

      .tech_status{
        color: var(--color-grey);
        margin-right: 10px;
      }
    }
  }
  
`
