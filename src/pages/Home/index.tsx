import { useState, useEffect } from "react";
import { Issues } from './components/Issues';
import { Summary } from './components/Summary';
import { HomeContainer, IssuesAside } from "./styles";
import { axiosInstance } from '../../axios'
 
interface Issue {
  number: number;
  title: string;
  body: string;
  created_at: string
}

export function Home() {
  const [issue, setIssue] = useState <Issue[]>([])

  async function buscaIssues() {
    const response = await axiosInstance.get('/search/issues?q=repo:lucaspedronet/BlogProfileGitHub') 
      setIssue(response.data.items);
  }

  useEffect(() => {
    buscaIssues()
  }, [])

  return (
    <HomeContainer>
      <Summary/>

      <IssuesAside>
        {
          issue.map(data => {
            return(
              <Issues
                number={data.number}
                title={data.title}
                body={data.body}
                created_at={data.created_at} 
              />)
          })
        }
      </IssuesAside>
    </HomeContainer>
  );
}
