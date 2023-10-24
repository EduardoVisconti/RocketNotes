import { Container, Profile } from "./styles";

export function Header(){
  return(
    <Container>
      <Profile>
        <img src="http://github.com/EduardoVisconti.png" alt="Foto do Usuário" />
        
        <div>
          <span>Bem-vindo</span>
          <strong>Eduardo Visconti</strong>
        </div>
      </Profile>
    </Container>
  )

}