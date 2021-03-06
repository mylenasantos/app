import React, { Component } from "react";
import api from "../../services/api";
import moment from "moment";

import { Container, Form } from "./styles";

import logo from "../../assets/logo.png";

import CompareList from "../../components/CompareList";

export default class Main extends Component {
    state = {
        loading: false,
        repositoryError: false,
        repositoryInput: "",
        repositories: [],
        msgError: {
            msg: "",
            show: false
        }
    };

    handleAddRepository = async e => {
        e.preventDefault();

        this.setState({ loading: true });

        try {
            const { data: repository } = await api.get(
                `/repos/${this.state.repositoryInput}`
            );

            repository.lastCommit = moment(repository.pushed_at).fromNow();

            this.setState({
                repositoryInput: "",
                repositories: [...this.state.repositories, repository],
                repositoryError: false,
                show: false,
                msg: ""
            });
        } catch (err) {
            this.setState(prevState => ({
                repositoryError: true,
                msgError: {
                    ...prevState.msgError,
                    show: true,
                    msg: "Not Found"
                }
            }));
        } finally {
            this.setState({ loading: false });
        }
    };
    render() {
        const { msgError } = this.state;
        return (
            <Container>
                <img src={logo} alt="GithubCompare" className="logo" />

                <Form
                    withError={this.state.repositoryError}
                    onSubmit={this.handleAddRepository}
                >
                    <input
                        type="text"
                        placeholder="Search"
                        error={msgError.show}
                        value={this.state.repositoryInput}
                        onChange={e =>
                            this.setState({
                                repositoryInput: e.target.value,
                                msgError: {
                                    msg: "",
                                    show: false
                                }
                            })
                        }
                    />

                    <button type="submit">
                        {this.state.loading ? (
                            <i className="fa fa spinner fa-pulse" />
                        ) : (
                            "OK"
                        )}
                    </button>

                    <p>{msgError.msg}</p>
                </Form>
                <CompareList repositories={this.state.repositories} />
            </Container>
        );
    }
}
