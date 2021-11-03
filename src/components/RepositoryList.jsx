import { useEffect, useState } from "react";
import { RepositoryItem } from "./RepositoryItem";
import "../styles/repositorie.scss";

const repository = {
    name: "teste",
    description: " descrição ",
    link: "meu link",
};
// https://api.github.com/users/victor-magaldi
//https://api.github.com/users/victor-magaldi/repos
export function RepositoryList() {
    const [repositories, setRepositories] = useState([]);
    useEffect(() => {
        if (repositories.length === 0) {
            fetch("https://api.github.com/users/victor-magaldi/repos")
                .then((data) => data.json())
                .then((repos) => setRepositories(repos));
        }
    }, [repositories]);
    return (
        <section className="respository-list">
            <h1>Lista de repositórios</h1>
            <ul>
                {repositories.map((repo) => (
                    <RepositoryItem key={repo?.id} repository={repo} />
                ))}
            </ul>
        </section>
    );
}
