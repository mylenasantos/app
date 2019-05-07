import React from "react";
import { Container, Repository } from "./styles";

const CompareList = ({ repositories }) => (
    <Container>
        {repositories.map(repository => (
            <Repository>
                <header>
                    <img
                        src={repository.owner.avatar_url}
                        alt={repository.owner.login}
                    />
                    <strong>{repository.name}</strong>
                    <small>{repository.owner.login}</small>
                </header>
                <ul>
                    <li>
                        95,019 <small>stars</small>
                    </li>
                    <li>
                        95,019 <small>forks</small>
                    </li>
                    <li>
                        95,019 <small>issues</small>
                    </li>
                    <li>
                        3 days ago <small>last commit</small>
                    </li>
                </ul>
            </Repository>
        ))}
    </Container>
);

export default CompareList;
