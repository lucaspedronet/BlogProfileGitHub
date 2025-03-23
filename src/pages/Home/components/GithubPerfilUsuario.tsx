// GitHubProfile.tsx
import { useState, useEffect } from 'react';
import axiosInstance from '../../../axios';
import {Summary, UserData} from './Summary/index';


export default function GithubPerfilUsuario() {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const username = 'analaress'; 

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get(`/users/${username}`);
        
        const mappedUserData: UserData = {
          avatar: response.data.avatar_url,
          nome_completo: response.data.name,
          bio: response.data.bio,
          login: response.data.login,
          profissao: response.data.company || 'Não especificada', 
          seguidores: response.data.followers,
          public_repos: response.data.public_repos,
          html_url: response.data.html_url
        };
        
        setUserData(mappedUserData);
      } catch (err) {
        setError('Erro ao buscar dados do usuário.');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [username]);

  return (
    <div>
      {loading && <p>Aguarde carregar os dados do GitHub</p>}
      {error && <p>{error}</p>}
      {userData && <Summary userData={userData} />}
    </div>
  );
}

