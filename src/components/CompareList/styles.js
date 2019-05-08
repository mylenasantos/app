import styled from "styled-components";
import { screen } from "../../assets/variables";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 60px;

    margin-top: 10px;

    @media (min-width: 900px) {
        /* para 900px em diante */
        flex-direction: row;
        align-items: center;
        padding-top: 60px;
    }
`;

export const Repository = styled.div`
    width: 250px;
    background: #fff;
    border-radius: 3px;
    flex-direction: column;
    margin: 10px 10px;

    header {
        padding: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;

        img {
            width: 60px;
        }

        strong {
            font-size: 24px;
            margin-top: 10px;
        }

        small {
            font-size: 14px;
            color: #666;
        }
    }

    ul {
        list-style: none;
        li {
            font-weight: bold;
            padding: 12px 20px;
            small {
                font-weight: normal;
                font-size: 12px;
                color: #999;
                font-style: italic;
            }

            &:nth-child(2n -1) {
                background: #f5f5f5;
            }
        }
    }
`;
