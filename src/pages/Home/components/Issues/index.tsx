import { IssuesContainer, StyledNavLink, IssuesGrid } from "./styles";

import axios from 'axios';
import { useState, useEffect } from "react";

const instance = axios.create(
  {baseURL:`https://api.github.com/`}
)

interface Issue {
  id: number;
  title: string;
  created_at: string;
  body: string;
  number: number;
}

export function Issues() {
  const [issues, setIssues] = useState<Issue[]>([]);
      
    useEffect(() => {async function getAPI() {
      try {
        const response = await instance.get('search/issues?q=repo:lucaspedronet/BlogProfileGitHub');
        setIssues(response.data.items)
      } catch (error) {
        console.error('Erro:', error);
      }
    }
  
    getAPI()
  
    }, []);

    return (
      <IssuesGrid>
        {issues.map((issue) => (
          <IssuesContainer key={issue.id}>
            <StyledNavLink to={`/issue/${issue.number}`}>
              <div>
                <h2>{issue.title}</h2>
                <span>{new Date(issue.created_at).toLocaleDateString("pt-BR")}</span>
              </div>
              <p>{issue.body || 'Sem Mensagem'}</p>
            </StyledNavLink>
          </IssuesContainer>
        ))}
      </IssuesGrid>
    );
}
