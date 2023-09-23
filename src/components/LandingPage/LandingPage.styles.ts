import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: var(--lightBlue);
    padding: 0 20px;
    display: flex;
    position: relative;
    `;

export const Content = styled.div`
    background-color: var(--lightBlue);
    max-width: var(--maxWidth);
    width: 50%;
    height: 550px;

    div h1, p {
        margin-top: 40px;
        padding-left: 60px;
        color: var(--darkGrey);
        font-weight: 400;
    }
    
    h1 {
        font-family: gt-super, Georgia, Cambria, "Times New Roman", Times, serif;
        font-size: 5rem;

        @media screen and (max-width: 768px) {
            font-size: var(--fontSuperBig);
        }
    }
    
    p {
        font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-size: var(--fontBig);        
        line-height: 1.5;

        @media screen and (max-width: 768px) {
            font-size: var(--fontSmall);
        }
    }
    
    button {
        background-color: var(--white);
        border-radius: 50px;
        margin-left: 60px;
        height: 50px;
        width: 150px;
        font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-size: var(--fontMed);        
        line-height: 1.5;

        @media screen and (max-width: 768px) {
            font-size: var(--fontSmall);
        }
    }
    
    `;

export const Image = styled.img`
    position: absolute;
    right: 100px;
    /* width: 100%; */
    
    @media screen and (max-width: 768px) {
        right: 20px;
        width: 50%;
    }
`;