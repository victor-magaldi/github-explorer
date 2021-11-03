export function RepositoryItem({ repository }) {
    return (
        <li>
            <strong>{repository?.name ?? "defaut"}</strong>
            <p>{repository?.description ?? "description defaut"}</p>
            <a href={repository?.html_url ?? "link defaut"}>
                Acessar Repositório
            </a>
        </li>
    );
}
