import { Container, Links, Content } from './styles'

import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'
import { ButtonText } from '../../components/ButtonText'

export function Details(){
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title='Excluir Nota'/>
        
          <Section title='Links úteis'>
            <Links>
              <li><a href="#">https://www.rocketseat.com.br/</a></li>
              <li><a href="#">https://www.rocketseat.com.br/</a></li>
            </Links>
          </Section>

          <Section title='Marcadores'>
            <Tag title='express' />
            <Tag title='nodejs' />
          </Section>
        
          <Button title='Back' />
        </Content>
      </main>
    </Container>
  )
}