import { SummaryAnchors, SummaryContainer, SummaryHeader } from "./styles";

import { useState } from "react";

import { ArrowUpRight, Buildings, GithubLogo, Users } from "phosphor-react";

interface User {
  avatar_url: string;
  name: string;
  bio: string;
  login: string;
  company: string;
  followers: number;
}

export function Summary() {
  const [user, setUser] = useState<User | undefined>(undefined);

  // "https://api.github.com/users", "/lucaspedronet"
  // "https://api.github.com/search"
  // "https://api.github.com/repos/lucaspedronet/TudoLista/issues"

  return (
    <SummaryContainer>
      <img src={user?.avatar_url} />
      <section>
        <SummaryHeader>
          <h1>{user?.name}</h1>
          <a href="http://github.com/Lucaspedronet" target="_blank">
            GITHUB
            <ArrowUpRight size={12} />
          </a>
        </SummaryHeader>
        <p>{user?.bio}</p>
        <SummaryAnchors>
          <div>
            <GithubLogo size={18} />
            <span>{user?.login}</span>
          </div>

          <div>
            <Buildings size={18} />
            <span>{user?.company}</span>
          </div>

          <div>
            <Users size={18} />
            <span>{user?.followers}</span>
          </div>
        </SummaryAnchors>
      </section>
    </SummaryContainer>
  );
}
