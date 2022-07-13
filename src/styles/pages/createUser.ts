import styled from "styled-components";

export const FormContent=styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  form{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: 728px;

    input,label,button{
      width: 80%;
      height: 2rem;
      margin-bottom: 1rem;
    }
  }
`
