import { RepositoryItem } from "./RepositoryItem";

const repository = {
    name: "teste",
    description: " descrição ",
    link: "meu link",
};
export function RepositoryList() {
    return (
        <section className="respository-list">
            <h1>Lista de repositórios</h1>
            <ul>
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
            </ul>
        </section>
    );
}
