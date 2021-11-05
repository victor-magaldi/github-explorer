interface RepositoryItemProps{
    repository:{
        name:string,
        description:string,
        html_url: string
    }
  
}

export function RepositoryItem({ repository}:RepositoryItemProps) {
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
