import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Privacy() {
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
        <h1>Política de Privacidade</h1>
        <p className="legal__meta">Última atualização: junho de 2026</p>

        <p>A <strong>Stopa Design</strong> valoriza a privacidade dos seus visitantes e clientes. Esta Política descreve como coletamos, utilizamos, armazenamos e protegemos suas informações pessoais, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD).</p>

        <h2>1. Dados que coletamos</h2>
        <p>Coletamos as informações que você nos fornece voluntariamente, por exemplo, ao preencher nosso formulário de contato:</p>
        <ul>
          <li>Nome completo;</li>
          <li>Telefone / WhatsApp;</li>
          <li>Endereço de e-mail;</li>
          <li>Informações sobre o projeto ou ambiente de interesse.</li>
        </ul>
        <p>Também podemos coletar dados de navegação automaticamente, como endereço IP, tipo de navegador e páginas visitadas, por meio de cookies e tecnologias semelhantes.</p>

        <h2>2. Como utilizamos seus dados</h2>
        <ul>
          <li>Responder a solicitações de orçamento e contato;</li>
          <li>Elaborar propostas e conduzir projetos;</li>
          <li>Aprimorar a experiência de navegação no site;</li>
          <li>Enviar comunicações relevantes, quando autorizado.</li>
        </ul>

        <h2>3. Cookies</h2>
        <p>Utilizamos cookies para melhorar a navegação e analisar o tráfego do site. Você pode gerenciar ou desativar os cookies nas configurações do seu navegador. Ao continuar navegando, você concorda com o uso de cookies conforme descrito nesta Política.</p>

        <h2>4. Compartilhamento de dados</h2>
        <p>Não vendemos nem alugamos seus dados pessoais. Suas informações poderão ser compartilhadas apenas com prestadores de serviço essenciais à operação (por exemplo, ferramentas de comunicação), sempre sob obrigações de confidencialidade, ou quando exigido por lei.</p>

        <h2>5. Armazenamento e segurança</h2>
        <p>Adotamos medidas técnicas e organizacionais para proteger seus dados contra acesso não autorizado, perda ou alteração. Mantemos as informações apenas pelo tempo necessário às finalidades descritas.</p>

        <h2>6. Seus direitos</h2>
        <p>Nos termos da LGPD, você pode solicitar a qualquer momento: confirmação da existência de tratamento, acesso, correção, anonimização, portabilidade ou exclusão dos seus dados, bem como a revogação do consentimento.</p>

        <h2>7. Contato</h2>
        <p>Para exercer seus direitos ou esclarecer dúvidas sobre esta Política, entre em contato pelo e-mail <a href="mailto:contato@stopadesign.com.br">contato@stopadesign.com.br</a>.</p>

        <h2>8. Alterações</h2>
        <p>Esta Política poderá ser atualizada periodicamente. A versão vigente estará sempre disponível nesta página.</p>
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
