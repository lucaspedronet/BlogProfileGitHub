import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
`;

export const IssuesContainer = styled.div`
  max-width: 26rem;
  height: 16.25rem;
  width: 100%;
  overflow: hidden;
  background-color: ${(props) => props.theme["blue-600"]};
  padding: 2rem;
  border-radius: 10px;


  div {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 1.25rem;

    h2 {
      width: 80%;
      font-size: 1.25rem;
      font-weight: bold;
      color: ${(props) => props.theme["blue-100"]};
    }

    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme["gray-400"]};
    }
  }

  p {
    color: ${(props) => props.theme["gray-300"]};
    max-height: 5rem; 
    overflow: auto;
    padding-right: 10px;
    margin-bottom: 10px
  }
`;
