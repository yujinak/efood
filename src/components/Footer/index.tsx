import logo from '../../assets/images/logo.png'
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'

import { Descricao, FooterSection, Logo, Redes } from './styles'

const Footer = () => (
  <FooterSection>
    <Logo src={logo} alt="" />
    <Redes>
      <li>
        <a href="">
          <img src={instagram} alt="" />
        </a>
      </li>
      <li>
        <a href="">
          <img src={facebook} alt="" />
        </a>
      </li>
      <li>
        <a href="">
          <img src={twitter} alt="" />
        </a>
      </li>
    </Redes>
    <Descricao>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </Descricao>
  </FooterSection>
)

export default Footer
