import React from 'react';
import styled from 'styled-components';
import { Container, Form } from './styles';



import logo from '../../assets/logo.png';

const Main = () => (
    <Container>
        <img src={logo} alt="GithubCompare" className="logo" />

        <Form>
            <input type="text" placeholder="Search" />
            <button type="submit">OK</button>
        </Form>
    </Container>
);

export default Main;
