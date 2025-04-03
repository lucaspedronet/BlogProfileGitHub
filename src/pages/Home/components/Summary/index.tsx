import { SummaryAnchors, SummaryContainer, SummaryHeader } from "./styles";
import { useState, useEffect } from 'react';
import { axiosInstance } from '../../../../axios'
import { ArrowUpRight, Buildings, GithubLogo, Users } from "phosphor-react";


interface UserData {
    avatar_url: string;
    nome_completo: string;
    bio: string;
    login: string;
    company: string;
    followers: number;
    public_repos: number;
    html_url: string;
}
  

  
  // "https://api.github.com/users", "/lucaspedronet"
  // "https://api.github.com/search"
  // "https://api.github.com/repos/lucaspedronet/TudoLista/issues"


  export function Summary() {
    const [userData, setUserData] = useState<UserData | null>(null);
    const username = 'analaress'; 

    async function catchUser() {
      const response = await axiosInstance.get(`/users/${username}`);
      setUserData(response.data);

    }
      
      useEffect(() => {
          catchUser()
      }, [])



    return (
      <SummaryContainer>
        <img src={userData?.avatar_url} alt="Avatar" />
        <section>
          <SummaryHeader>
            <h1>{userData?.nome_completo}</h1>
            <a href={userData?.html_url} target="_blank" rel="noopener noreferrer"> 
              GITHUB
              <ArrowUpRight size={12} />
            </a>
          </SummaryHeader>
          <p>{userData?.bio || "Sem bio disponível"}</p> 
          <SummaryAnchors>
            <div>
              <GithubLogo size={18} />
              <span>{userData?.login}</span> 
            </div>
  
            <div>
              <Buildings size={18} />
              <span>{userData?.company || 'Indisponível'}</span> 
            </div>
  
            <div>
              <Users size={18} />
              <span>{userData?.followers}</span> 
            </div>
          </SummaryAnchors>
        </section>
      </SummaryContainer>
    );
  }
