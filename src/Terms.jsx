import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Terms() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <div className="grain" aria-hidden="true"></div>

      <header className="header is-scrolled" style={{ position: 'fixed' }}>
        <Link to="/" className="header__logo" aria-label="Stopa Design — início">
          <img src="/assets/brand/logo-dourado.svg" alt="Stopa Design" />
        </Link>
        <nav className="nav"><a href="/#contato" className="nav__cta">Solicitar projeto</a></nav>
      </header>

      <main className="legal">
        <Link to="/" className="legal__back">← Voltar ao site</Link>
        <h1>Termos de Uso</h1>
        <p className="legal__meta">Última atualização: junho de 2026</p>

        <p>Bem-vindo ao site da <strong>Stopa Design</strong>. Ao acessar e utilizar este site, você concorda com os Termos de Uso descritos a seguir. Caso não concorde, recomendamos que não utilize o site.</p>

        <h2>1. Objeto</h2>
        <p>Este site tem caráter institucional e informativo, apresentando os serviços de marcenaria de alto padrão e móveis planejados sob medida da Stopa Design, bem como um portfólio de projetos executados.</p>

        <h2>2. Uso do site</h2>
        <ul>
          <li>O conteúdo deve ser utilizado apenas para fins lícitos e pessoais;</li>
          <li>É vedada qualquer tentativa de comprometer a segurança, a integridade ou o funcionamento do site;</li>
          <li>As informações de contato fornecidas devem ser verdadeiras e atualizadas.</li>
        </ul>

        <h2>3. Propriedade intelectual</h2>
        <p>Todo o conteúdo deste site — incluindo textos, imagens, fotografias de projetos, logotipo, identidade visual e layout — é de propriedade da Stopa Design ou utilizado mediante autorização, e está protegido pela legislação aplicável. É proibida a reprodução, total ou parcial, sem autorização prévia e por escrito.</p>

        <h2>4. Portfólio e imagens</h2>
        <p>As imagens apresentadas referem-se a projetos reais executados pela Stopa Design. Variações de acabamento, materiais e medidas podem ocorrer conforme cada projeto e disponibilidade de insumos.</p>

        <h2>5. Orçamentos e propostas</h2>
        <p>As solicitações realizadas pelo formulário ou pelos canais de contato não constituem contrato. Valores, prazos e condições serão formalizados em proposta específica para cada projeto.</p>

        <h2>6. Limitação de responsabilidade</h2>
        <p>A Stopa Design empenha-se para manter as informações deste site corretas e atualizadas, mas não garante a ausência de eventuais imprecisões. O site pode conter links para terceiros, sobre cujos conteúdos não nos responsabilizamos.</p>

        <h2>7. Privacidade</h2>
        <p>O tratamento de dados pessoais coletados neste site é regido pela nossa <Link to="/politica-privacidade">Política de Privacidade</Link>.</p>

        <h2>8. Alterações</h2>
        <p>Estes Termos podem ser modificados a qualquer momento. A versão atualizada estará sempre disponível nesta página.</p>

        <h2>9. Contato</h2>
        <p>Dúvidas sobre estes Termos podem ser encaminhadas para <a href="mailto:contato@stopadesign.com.br">contato@stopadesign.com.br</a>.</p>
      </main>

      <footer className="footer">
        <div className="footer__bottom" style={{ borderTop: 'none' }}>
          <p>© <span>{new Date().getFullYear()}</span> Stopa Design. Todos os direitos reservados.</p>
          <p className="footer__dev">Desenvolvido por: <a href="https://outboxgroup.framer.ai/" target="_blank" rel="noopener">OutBox Group</a></p>
        </div>
      </footer>
    </>
  )
}
