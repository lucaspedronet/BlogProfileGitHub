import { SummaryAnchors, SummaryContainer, SummaryHeader } from "./styles";

import { ArrowUpRight, Buildings, GithubLogo, Users } from "phosphor-react";

import axios from 'axios';
import { useState, useEffect } from "react";

const instance = axios.create(
  {baseURL:`https://api.github.com/`}
)

interface GitHubUser {
  login: string;
  name: string | null;
  html_url: string;
  bio: string | null;
  avatar_url: string;
  company:string | null;
  followers: number | 0;
}

export function Summary() {
  const [data, setData] = useState<GitHubUser | null>(null);
    
  useEffect(() => {async function getAPI() {
    try {
      const response = await instance.get('users/lucaspedronet');
      setData(response.data)
    } catch (error) {
      console.error('Erro:', error);
    }
  }

  getAPI()

  }, []);

  return (
    <SummaryContainer>
      <img src={data?.avatar_url} />
      <section>
        <SummaryHeader>
          <h1>{data?.name}</h1>
          <a href={data?.html_url} target="_blank">
            GITHUB
            <ArrowUpRight size={12} />
          </a>
        </SummaryHeader>
        <p>{data?.bio}</p>
        <SummaryAnchors>
          <div>
            <GithubLogo size={18} />
            <span>{data?.login}</span>
          </div>

          <div>
            <Buildings size={18} />
            <span>{data?.company}</span>
          </div>

          <div>
            <Users size={18} />
            <span>{data?.followers}</span>
          </div>
        </SummaryAnchors>
      </section>
    </SummaryContainer>
  );
}
