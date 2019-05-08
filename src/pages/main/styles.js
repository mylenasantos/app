import styled from "styled-components";
//import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 60px;

    .logo {
        width: 100%;
        max-width: 300px;
    }
`;

export const Form = styled.form`
    margin-top: 20px;
    width: 100%;
    max-width: 400px;
    display: flex;

    input {
        flex: 1;
        height: 55px;
        padding: 0 20px;
        background: #fff;
        font-size: 18px;
        color: #444;
        border-radius: 3px;

        border: ${props => (props.withError ? "2px solid #f00" : 0)};
    }

    p {
        color: #e75b5b;
        position: absolute;

        font-size: 14px;
        margin-top: 60px;
        position: center;
        margin-left: 130px;
    }

    button {
        width: 80px;
        height: 55px;
        padding: 0 20px;
        margin-left: 10px;
        background: #e8eaf6;
        color: #000;
        border: 0;
        font-size: 20px;
        font-weight: bold;
        border-radius: 3px;

        &:hover {
            background: #ef9a9a;
        }
    }
`;
