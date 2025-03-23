import { SummaryAnchors, SummaryContainer, SummaryHeader } from "./styles";

import { ArrowUpRight, Buildings, GithubLogo, Users } from "phosphor-react";


export interface UserData {
    avatar: string;
    nome_completo: string;
    bio: string;
    login: string;
    profissao: string;
    seguidores: number;
    public_repos: number;
    html_url: string;
}
  
  interface SummaryProps {
    userData: UserData; 
  }
  
  // "https://api.github.com/users", "/lucaspedronet"
  // "https://api.github.com/search"
  // "https://api.github.com/repos/lucaspedronet/TudoLista/issues"


  export function Summary({ userData }: SummaryProps) {
    return (
      <SummaryContainer>
        <img src={userData.avatar} alt="Avatar" />
        <section>
          <SummaryHeader>
            <h1>{userData.nome_completo}</h1>
            <a href={userData.html_url} target="_blank" rel="noopener noreferrer"> 
              GITHUB
              <ArrowUpRight size={12} />
            </a>
          </SummaryHeader>
          <p>{userData.bio || "Sem bio disponível"}</p> 
          <SummaryAnchors>
            <div>
              <GithubLogo size={18} />
              <span>{userData.login}</span> 
            </div>
  
            <div>
              <Buildings size={18} />
              <span>{userData.profissao}</span> 
            </div>
  
            <div>
              <Users size={18} />
              <span>{userData.seguidores}</span> 
            </div>
          </SummaryAnchors>
        </section>
      </SummaryContainer>
    );
  }
