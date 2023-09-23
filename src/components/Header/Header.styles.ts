import React from "react";
import styled from "styled-components";

export const Wrapper = styled.div`
    background: var(--lightBlue);
    padding: 0 20px;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: var(--maxWidth);
    padding: 20px 0;
    margin: 0 auto;

    span {
        padding: 0 20px;
        font-size: 1.1rem;
    }
`;

export const LogoImg = styled.img`
    width: 100px;

    @media screen and (max-width: 500px) {
        width: 150px;
    }
`;