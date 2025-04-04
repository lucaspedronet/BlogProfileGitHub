
import { Summary } from "./components/Summary";
import { Issues } from "./components/Issues";
import { HomeContainer } from "./styles";

export function Home() {

  return (
    <HomeContainer>
      <Summary />
      <br />
      <Issues />
    </HomeContainer>
  );
}
