import styled from 'styled-components'

export const StyledFormUpdate = styled.main`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(0, 0, 0, 0.7);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .modal_container {
    @media (min-width: 769px) {
      width: 369px;
    }

    .register_form {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-family: 'Inter';

      @media (min-width: 769px) {
        width: 369px;
      }

      .div_title {
        display: flex;
        background-color: #343b41;
        border-radius: 4px 4px 0 0;
        align-items: center;
        gap: 70px;

        @media (min-width: 769px) {
          width: 388px;
          padding-bottom: 0px;
          border-bottom: none;
          gap: 150px;
        }

        .modal_title {
          background-color: #343b41;
          width: 183px;
          font-family: 'Inter';
          font-weight: 700;
          color: var(--color-text);
          margin-left: 10px;
        }

        .modal_close {
          color: var(--color-text);
          background-color: #343b41;
          border: none;
          cursor: pointer;
        }
      }

      p {
        color: var(--color-text);
        margin-left: 10px;
        align-self: start;
      }

      input {
        width: 260px;
        height: 38px;

        @media (min-width: 769px) {
          width: 347px;
        }
      }

      select {
        width: 268px;
        height: 38px;

        @media (min-width: 769px) {
          width: 353px;
        }
      }

      .buttons_update {
        display: flex;
        gap: 25px;

        @media (min-width: 769px) {
          border-bottom: none;
          padding-bottom: 0;
        }

        .button_save {
          font-family: 'Inter';
          margin: 1rem 0;
          width: 160px;
          height: 38px;
          background-color: #59323f;
          border-radius: 4px;
          border: none;
          color: var(--color-text);
          cursor: pointer;

          @media (min-width: 769px) {
            width: 230px;
          }
        }

        .button_delete {
          font-family: 'Inter';
          margin: 1rem 0;
          width: 80px;
          height: 38px;
          background-color: var(--color-grey);
          border-radius: 4px;
          border: none;
          color: var(--color-text);
          cursor: pointer;

          @media (min-width: 769px) {
            width: 100px;
          }
        }
      }
    }
  }
`
