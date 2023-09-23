import styled from "styled-components";

export const Wrapper = styled.div`
    /* max-width: var(--maxWidth); */
    margin: 0 auto;
    padding: 20px 100px;
    
    h1 {
        color: var(--medGrey);
        font-size: var(--fontMed);

        @media screen and (max-width: 768px) {
            font-size: var(--fontBig);
        }
    }
    `;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  
  @media screen and (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
  }
  
`;