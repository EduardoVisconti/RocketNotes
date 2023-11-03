import { Container, Profile, Logout } from "./styles";
import { RiShutDownLine } from 'react-icons/ri';

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
      <Logout>
        <RiShutDownLine/>
      </Logout>
    </Container>
  )

}