// import { dateFormatter } from "../../../../utils/formatter";
import { IssuesContainer, StyledNavLink } from "./styles";

export function Issues({number, title, body, created_at} : {number: number, title: string, body: string, created_at: string}) {
  return (
    <IssuesContainer>
      <StyledNavLink to={`post/{number}`}>
        <div>
          <h2>{title}</h2>
          <span>Há {number} dia(s)</span>
        </div>
        <p>{body}</p>
        <h3>{created_at}</h3>

      </StyledNavLink>
    </IssuesContainer>
  );
}
