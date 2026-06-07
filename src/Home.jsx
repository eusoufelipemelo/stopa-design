import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { initInteractions } from './interactions.js'

export default function Home() {
  useEffect(() => {
    const cleanup = initInteractions()
    return cleanup
  }, [])

  return (
    <>
      {/* GRAIN / ATMOSPHERE */}
      <div className="grain" aria-hidden="true"></div>
      <div className="cursor-dot" aria-hidden="true"></div>

      {/* PROGRESS BAR */}
      <div className="scroll-progress" aria-hidden="true"><span></span></div>

      {/* COOKIE BANNER */}
      <div className="cookie" id="cookieBanner" role="dialog" aria-label="Política de Cookies">
        <div className="cookie__inner">
          <div className="cookie__text">
            <strong>Sua privacidade importa.</strong>{' '}
            Utilizamos cookies para aprimorar sua experiência de navegação e analisar nosso tráfego.
            Ao continuar, você concorda com nossa <Link to="/politica-privacidade">Política de Privacidade</Link>.
          </div>
          <div className="cookie__actions">
            <button className="btn-ghost-sm" id="cookieDecline">Recusar</button>
            <button className="btn-gold-sm" id="cookieAccept">Aceitar cookies</button>
          </div>
        </div>
      </div>

      {/* HEADER */}
      <header className="header" id="header">
        <a href="#hero" className="header__logo" aria-label="Stopa Design — início">
          <img src="/assets/brand/logo-dourado.svg" alt="Stopa Design" />
        </a>
        <nav className="nav" id="nav">
          <a href="#sobre">Atelier</a>
          <a href="#especialidades">Especialidades</a>
          <a href="#galeria">Projetos</a>
          <a href="#numeros">Excelência</a>
          <a href="#depoimentos">Clientes</a>
          <a href="#faq">FAQ</a>
          <a href="#contato" className="nav__cta">Solicitar projeto</a>
        </nav>
        <button className="burger" id="burger" aria-label="Abrir menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </header>

      {/* HERO */}
      <section className="hero" id="hero">
        <div className="hero__media" data-parallax="0.25">
          <img src="/assets/img/living-adega.jpg" alt="Living com painel amadeirado e adega embutida iluminada — projeto Stopa Design" />
        </div>
        <div className="hero__veil"></div>

        <div className="hero__content">
          <p className="hero__eyebrow reveal">Marcenaria de alto padrão · sob medida</p>
          <h1 className="hero__title">
            <span className="line"><span className="word">Cada</span> <span className="word">ambiente,</span></span>
            <span className="line"><em><span className="word">uma</span> <span className="word">assinatura.</span></em></span>
          </h1>
          <p className="hero__sub reveal">
            Projetamos e executamos móveis planejados que transformam o espaço em legado.
            Madeiras nobres, engenharia milimétrica e um acabamento que se sente no toque.
          </p>
          <div className="hero__actions reveal">
            <a href="#galeria" className="btn-gold">Ver projetos</a>
            <a href="#contato" className="btn-outline">Iniciar meu projeto</a>
          </div>
        </div>

        <a href="#sobre" className="hero__scroll" aria-label="Rolar para baixo">
          <span className="hero__scroll-line"></span>
          <span className="hero__scroll-text">descubra</span>
        </a>

        <div className="hero__corner hero__corner--tr"></div>
        <div className="hero__corner hero__corner--bl"></div>
      </section>

      {/* MARQUEE */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          <span>Cozinhas Gourmet</span><i>✦</i>
          <span>Closets</span><i>✦</i>
          <span>Painéis Ripados</span><i>✦</i>
          <span>Home Theater</span><i>✦</i>
          <span>Varandas Gourmet</span><i>✦</i>
          <span>Home Office</span><i>✦</i>
          <span>Cozinhas Gourmet</span><i>✦</i>
          <span>Closets</span><i>✦</i>
          <span>Painéis Ripados</span><i>✦</i>
          <span>Home Theater</span><i>✦</i>
          <span>Varandas Gourmet</span><i>✦</i>
          <span>Home Office</span><i>✦</i>
        </div>
      </div>

      {/* SOBRE */}
      <section className="sobre" id="sobre">
        <div className="sobre__grid">
          <div className="sobre__media reveal" data-parallax="0.12">
            <img src="/assets/img/sala-painel-ripado.jpg" alt="Painel ripado em nogueira com home theater assinado pela Stopa Design" />
            <div className="sobre__badge">
              <span className="sobre__badge-num">2008</span>
              <span className="sobre__badge-lbl">desde</span>
            </div>
          </div>

          <div className="sobre__text">
            <p className="section-eyebrow reveal">O Atelier</p>
            <h2 className="section-title reveal">
              Marcenaria autoral, <em>feita para durar gerações.</em>
            </h2>
            <p className="lead reveal">
              A Stopa Design nasceu da obsessão por detalhes que a maioria não percebe — mas todos sentem.
              Unimos o ofício tradicional da marcenaria à precisão da tecnologia para entregar ambientes
              que respiram sofisticação e funcionam com perfeição no dia a dia.
            </p>
            <p className="reveal">
              Do primeiro esboço à instalação final, cada projeto é conduzido com curadoria de materiais,
              engenharia de produção própria e um padrão de acabamento que se tornou nossa assinatura.
              Não fazemos móveis em série. Fazemos o seu.
            </p>

            <ul className="sobre__pillars">
              <li className="reveal"><span>01</span><strong>Projeto autoral</strong>Desenho exclusivo para o seu espaço e seu modo de viver.</li>
              <li className="reveal"><span>02</span><strong>Madeiras nobres</strong>Curadoria de lâminas e materiais de procedência selecionada.</li>
              <li className="reveal"><span>03</span><strong>Acabamento impecável</strong>Tolerâncias milimétricas e ajuste fino em obra.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ESPECIALIDADES */}
      <section className="espec" id="especialidades">
        <div className="espec__head">
          <p className="section-eyebrow reveal">O que criamos</p>
          <h2 className="section-title reveal">Especialidades <em>da casa</em></h2>
        </div>

        <div className="espec__grid">
          <article className="espec__card reveal" style={{ '--img': "url('/assets/img/cozinha-ilha.jpg')" }}>
            <div className="espec__card-bg"></div>
            <div className="espec__card-body">
              <span className="espec__card-idx">01</span>
              <h3>Cozinhas Gourmet</h3>
              <p>Ilhas imponentes, integração total e ergonomia pensada para quem vive a cozinha.</p>
            </div>
          </article>
          <article className="espec__card reveal" style={{ '--img': "url('/assets/img/closet-u.jpg')" }}>
            <div className="espec__card-bg"></div>
            <div className="espec__card-body">
              <span className="espec__card-idx">02</span>
              <h3>Closets &amp; Dormitórios</h3>
              <p>Organização sob medida, iluminação cênica e espelhos que ampliam o espaço.</p>
            </div>
          </article>
          <article className="espec__card reveal" style={{ '--img': "url('/assets/img/sala-painel-ripado.jpg')" }}>
            <div className="espec__card-bg"></div>
            <div className="espec__card-body">
              <span className="espec__card-idx">03</span>
              <h3>Painéis &amp; Home Theater</h3>
              <p>Painéis ripados em madeira nobre que transformam a sala em peça central.</p>
            </div>
          </article>
          <article className="espec__card reveal" style={{ '--img': "url('/assets/img/varanda-gourmet.jpg')" }}>
            <div className="espec__card-bg"></div>
            <div className="espec__card-body">
              <span className="espec__card-idx">04</span>
              <h3>Varandas Gourmet</h3>
              <p>Áreas de convívio com churrasqueira, marcenaria resistente e estética refinada.</p>
            </div>
          </article>
          <article className="espec__card reveal" style={{ '--img': "url('/assets/img/office-escritorio.jpg')" }}>
            <div className="espec__card-bg"></div>
            <div className="espec__card-body">
              <span className="espec__card-idx">05</span>
              <h3>Home Office</h3>
              <p>Estações de trabalho elegantes, com nichos iluminados e cabeamento oculto.</p>
            </div>
          </article>
          <article className="espec__card reveal" style={{ '--img': "url('/assets/img/hall-espelhado.jpg')" }}>
            <div className="espec__card-bg"></div>
            <div className="espec__card-body">
              <span className="espec__card-idx">06</span>
              <h3>Boiserie &amp; Detalhes</h3>
              <p>Portas espelhadas, boiseries clássicas e marcenaria de hall com requinte.</p>
            </div>
          </article>
        </div>
      </section>

      {/* GALERIA */}
      <section className="galeria" id="galeria">
        <div className="galeria__head">
          <div>
            <p className="section-eyebrow reveal">Projetos executados</p>
            <h2 className="section-title reveal">Galeria <em>de obras</em></h2>
          </div>
          <p className="galeria__intro reveal">
            Uma seleção de ambientes reais entregues pela Stopa Design. Toque em qualquer imagem para ampliar.
          </p>
        </div>

        <div className="galeria__filters reveal" id="filters">
          <button className="chip is-active" data-filter="all">Todos</button>
          <button className="chip" data-filter="cozinha">Cozinhas</button>
          <button className="chip" data-filter="sala">Salas &amp; Painéis</button>
          <button className="chip" data-filter="closet">Closets</button>
          <button className="chip" data-filter="office">Home Office</button>
          <button className="chip" data-filter="varanda">Varandas</button>
        </div>

        <div className="galeria__grid" id="grid">
          <figure className="gitem reveal" data-cat="sala" data-cap="Painel ripado em nogueira com home theater suspenso">
            <img src="/assets/img/sala-painel-ripado.jpg" alt="Painel ripado em nogueira com home theater" loading="lazy" />
            <figcaption><span>Sala</span> Painel ripado · Home theater</figcaption>
          </figure>
          <figure className="gitem reveal" data-cat="cozinha" data-cap="Ilha gourmet com coifa central e painel ripado">
            <img src="/assets/img/cozinha-ilha.jpg" alt="Cozinha com ilha gourmet" loading="lazy" />
            <figcaption><span>Cozinha</span> Ilha gourmet</figcaption>
          </figure>
          <figure className="gitem reveal" data-cat="closet" data-cap="Closet em U planejado com prateleiras e gavetas">
            <img src="/assets/img/closet-u.jpg" alt="Closet em U planejado" loading="lazy" />
            <figcaption><span>Closet</span> Planejado em U</figcaption>
          </figure>
          <figure className="gitem reveal" data-cat="sala" data-cap="Living com painel amadeirado e adega embutida iluminada">
            <img src="/assets/img/living-adega.jpg" alt="Living com adega embutida" loading="lazy" />
            <figcaption><span>Living</span> Painel · Adega</figcaption>
          </figure>
          <figure className="gitem reveal" data-cat="office" data-cap="Home office com marcenaria, nichos iluminados e boiserie">
            <img src="/assets/img/office-escritorio.jpg" alt="Home office planejado" loading="lazy" />
            <figcaption><span>Office</span> Escritório iluminado</figcaption>
          </figure>
          <figure className="gitem reveal" data-cat="varanda" data-cap="Varanda gourmet com churrasqueira e marcenaria grafite">
            <img src="/assets/img/varanda-gourmet.jpg" alt="Varanda gourmet com churrasqueira" loading="lazy" />
            <figcaption><span>Varanda</span> Gourmet</figcaption>
          </figure>
          <figure className="gitem reveal" data-cat="closet" data-cap="Hall com portas espelhadas e boiserie clássica">
            <img src="/assets/img/hall-espelhado.jpg" alt="Hall com portas espelhadas e boiserie" loading="lazy" />
            <figcaption><span>Hall</span> Espelhos · Boiserie</figcaption>
          </figure>
          <figure className="gitem reveal" data-cat="cozinha" data-cap="Cozinha integrada com vista para a piscina">
            <img src="/assets/img/cozinha-piscina.jpg" alt="Cozinha integrada com vista para piscina" loading="lazy" />
            <figcaption><span>Cozinha</span> Integrada</figcaption>
          </figure>
          <figure className="gitem reveal" data-cat="office" data-cap="Painel ripado escuro para TV em home office">
            <img src="/assets/img/office-ripado.jpg" alt="Painel ripado escuro em home office" loading="lazy" />
            <figcaption><span>Office</span> Painel ripado</figcaption>
          </figure>
          <figure className="gitem reveal" data-cat="closet" data-cap="Closet com boiserie cinza e portas espelhadas">
            <img src="/assets/img/closet-boiserie.jpg" alt="Closet com boiserie cinza espelhado" loading="lazy" />
            <figcaption><span>Closet</span> Boiserie cinza</figcaption>
          </figure>
          <figure className="gitem reveal" data-cat="sala" data-cap="Detalhe de painel ripado com nichos e prateleiras">
            <img src="/assets/img/ripado-nichos.jpg" alt="Detalhe de painel ripado com nichos" loading="lazy" />
            <figcaption><span>Detalhe</span> Ripado · Nichos</figcaption>
          </figure>
          <figure className="gitem reveal" data-cat="closet" data-cap="Closet aberto planejado com amplo espaço de prateleiras">
            <img src="/assets/img/closet-aberto.jpg" alt="Closet aberto planejado" loading="lazy" />
            <figcaption><span>Closet</span> Aberto</figcaption>
          </figure>
        </div>
      </section>

      {/* PROCESSO */}
      <section className="processo" id="processo">
        <div className="processo__grid">
          <div className="processo__video reveal">
            <div className="processo__phone">
              <video src="/assets/video/atelier.mp4" autoPlay muted loop playsInline></video>
              <div className="processo__phone-glow"></div>
            </div>
            <span className="processo__video-tag">Do nosso atelier</span>
          </div>

          <div className="processo__text">
            <p className="section-eyebrow reveal">Como trabalhamos</p>
            <h2 className="section-title reveal">Um processo <em>sem atalhos.</em></h2>
            <ol className="steps">
              <li className="reveal">
                <span className="steps__n">01</span>
                <div><h4>Briefing &amp; visita técnica</h4><p>Entendemos seu estilo de vida, medimos o espaço e alinhamos expectativas e investimento.</p></div>
              </li>
              <li className="reveal">
                <span className="steps__n">02</span>
                <div><h4>Projeto 3D autoral</h4><p>Desenhamos cada ambiente em detalhe, com curadoria de materiais e acabamentos.</p></div>
              </li>
              <li className="reveal">
                <span className="steps__n">03</span>
                <div><h4>Produção própria</h4><p>Fabricação com maquinário de precisão e controle de qualidade em todas as etapas.</p></div>
              </li>
              <li className="reveal">
                <span className="steps__n">04</span>
                <div><h4>Instalação &amp; entrega</h4><p>Montagem com ajuste fino em obra e a assinatura Stopa em cada detalhe.</p></div>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* NÚMEROS / GRÁFICOS */}
      <section className="numeros" id="numeros">
        <div className="numeros__head">
          <p className="section-eyebrow reveal">Excelência em números</p>
          <h2 className="section-title reveal">O que nos <em>diferencia</em></h2>
        </div>

        <div className="numeros__counters">
          <div className="counter reveal">
            <span className="counter__num" data-target="16" data-suffix="+">0</span>
            <span className="counter__lbl">anos de atelier</span>
          </div>
          <div className="counter reveal">
            <span className="counter__num" data-target="540" data-suffix="+">0</span>
            <span className="counter__lbl">ambientes entregues</span>
          </div>
          <div className="counter reveal">
            <span className="counter__num" data-target="98" data-suffix="%">0</span>
            <span className="counter__lbl">clientes satisfeitos</span>
          </div>
          <div className="counter reveal">
            <span className="counter__num" data-target="100" data-suffix="%">0</span>
            <span className="counter__lbl">produção própria</span>
          </div>
        </div>

        <div className="numeros__charts">
          <div className="chart-card reveal">
            <h3>Padrão de entrega</h3>
            <div className="rings">
              <div className="ring" data-value="98">
                <svg viewBox="0 0 120 120"><circle className="ring__bg" cx="60" cy="60" r="52" /><circle className="ring__fg" cx="60" cy="60" r="52" /></svg>
                <div className="ring__center"><b>98%</b><small>no prazo</small></div>
              </div>
              <div className="ring" data-value="95">
                <svg viewBox="0 0 120 120"><circle className="ring__bg" cx="60" cy="60" r="52" /><circle className="ring__fg" cx="60" cy="60" r="52" /></svg>
                <div className="ring__center"><b>95%</b><small>recompra/indicação</small></div>
              </div>
            </div>
          </div>

          <div className="chart-card reveal">
            <h3>Curadoria de materiais</h3>
            <div className="bars">
              <div className="bar"><span className="bar__lbl">Madeiras nobres &amp; lâminas</span><div className="bar__track"><i style={{ '--w': '96%' }}></i></div><span className="bar__val">96%</span></div>
              <div className="bar"><span className="bar__lbl">Ferragens premium</span><div className="bar__track"><i style={{ '--w': '92%' }}></i></div><span className="bar__val">92%</span></div>
              <div className="bar"><span className="bar__lbl">Iluminação integrada</span><div className="bar__track"><i style={{ '--w': '88%' }}></i></div><span className="bar__val">88%</span></div>
              <div className="bar"><span className="bar__lbl">Acabamento sob medida</span><div className="bar__track"><i style={{ '--w': '100%' }}></i></div><span className="bar__val">100%</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="depo" id="depoimentos">
        <div className="depo__head">
          <p className="section-eyebrow reveal">Quem viveu a experiência</p>
          <h2 className="section-title reveal">Palavra dos <em>clientes</em></h2>
        </div>

        <div className="depo__viewport">
          <div className="depo__track" id="depoTrack">
            <blockquote className="depo__card">
              <div className="depo__quote">“</div>
              <p>Superou tudo o que imaginávamos. O painel ripado da sala virou a estrela do apartamento — visitas sempre param para admirar o acabamento.</p>
              <footer><strong>Carolina &amp; Rafael</strong><span>Apartamento · Jardins</span></footer>
              <div className="depo__stars">★★★★★</div>
            </blockquote>
            <blockquote className="depo__card">
              <div className="depo__quote">“</div>
              <p>Profissionalismo do briefing à instalação. O closet ficou milimétrico e a equipe cuidou de cada detalhe sem deixar nada por menos.</p>
              <footer><strong>Mariana Stein</strong><span>Casa · Alphaville</span></footer>
              <div className="depo__stars">★★★★★</div>
            </blockquote>
            <blockquote className="depo__card">
              <div className="depo__quote">“</div>
              <p>A cozinha gourmet mudou a forma como recebemos em casa. Qualidade de madeira e ferragens impecável. Recomendo de olhos fechados.</p>
              <footer><strong>Eduardo Vasques</strong><span>Cobertura · Moema</span></footer>
              <div className="depo__stars">★★★★★</div>
            </blockquote>
            <blockquote className="depo__card">
              <div className="depo__quote">“</div>
              <p>Contratar a Stopa foi a melhor decisão da reforma. Projeto 3D fiel ao resultado, prazo cumprido e um acabamento de outro nível.</p>
              <footer><strong>Patrícia Lemos</strong><span>Apartamento · Brooklin</span></footer>
              <div className="depo__stars">★★★★★</div>
            </blockquote>
          </div>
        </div>

        <div className="depo__nav">
          <button className="depo__btn" id="depoPrev" aria-label="Anterior">←</button>
          <div className="depo__dots" id="depoDots"></div>
          <button className="depo__btn" id="depoNext" aria-label="Próximo">→</button>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq" id="faq">
        <div className="faq__head">
          <p className="section-eyebrow reveal">Tire suas dúvidas</p>
          <h2 className="section-title reveal">Perguntas <em>frequentes</em></h2>
        </div>

        <div className="faq__list">
          <details className="faq__item reveal">
            <summary>Qual o prazo médio de um projeto?</summary>
            <div className="faq__a"><p>Depende da complexidade e do número de ambientes, mas projetos residenciais costumam levar de 30 a 60 dias entre a aprovação do projeto e a instalação. Definimos um cronograma claro logo no início.</p></div>
          </details>
          <details className="faq__item reveal">
            <summary>Vocês atendem projetos completos ou ambientes isolados?</summary>
            <div className="faq__a"><p>Ambos. Fazemos desde um único painel ou closet até o planejamento de todos os ambientes da residência, sempre com a mesma curadoria e padrão de acabamento.</p></div>
          </details>
          <details className="faq__item reveal">
            <summary>É possível ver o projeto antes da execução?</summary>
            <div className="faq__a"><p>Sim. Entregamos um projeto 3D detalhado com materiais, cores e acabamentos definidos, para que você visualize cada ambiente antes de qualquer fabricação.</p></div>
          </details>
          <details className="faq__item reveal">
            <summary>Quais materiais e ferragens vocês utilizam?</summary>
            <div className="faq__a"><p>Trabalhamos com curadoria de lâminas e madeiras nobres, MDF de alta densidade e ferragens premium com amortecimento. Indicamos as melhores opções para cada uso e investimento.</p></div>
          </details>
          <details className="faq__item reveal">
            <summary>A Stopa oferece garantia?</summary>
            <div className="faq__a"><p>Sim. Todos os nossos móveis contam com garantia e suporte pós-instalação. Prezamos por um relacionamento de longo prazo com cada cliente.</p></div>
          </details>
          <details className="faq__item reveal">
            <summary>Como solicito um orçamento?</summary>
            <div className="faq__a"><p>Pelo formulário desta página ou pelo WhatsApp. Após o contato, agendamos uma conversa para entender seu projeto e, quando necessário, uma visita técnica.</p></div>
          </details>
        </div>
      </section>

      {/* CONTATO */}
      <section className="contato" id="contato">
        <div className="contato__grid">
          <div className="contato__aside">
            <p className="section-eyebrow reveal">Vamos conversar</p>
            <h2 className="section-title reveal">Comece o seu <em>projeto.</em></h2>
            <p className="lead reveal">Conte um pouco sobre o ambiente dos seus sonhos. Nossa equipe retorna com os próximos passos.</p>

            <ul className="contato__info">
              <li className="reveal"><span>WhatsApp</span><a href="https://wa.me/55XXXXXXXXXXX" target="_blank" rel="noopener">+55 (XX) XXXXX-XXXX</a></li>
              <li className="reveal"><span>E-mail</span><a href="mailto:contato@stopadesign.com.br">contato@stopadesign.com.br</a></li>
              <li className="reveal"><span>Atendimento</span>Seg a Sex · 9h às 18h</li>
            </ul>
          </div>

          <form className="form reveal" id="contactForm" noValidate>
            <div className="form__row">
              <div className="field">
                <input type="text" id="nome" name="nome" required placeholder=" " />
                <label htmlFor="nome">Nome completo</label>
              </div>
              <div className="field">
                <input type="tel" id="telefone" name="telefone" required placeholder=" " />
                <label htmlFor="telefone">Telefone / WhatsApp</label>
              </div>
            </div>
            <div className="form__row">
              <div className="field">
                <input type="email" id="email" name="email" required placeholder=" " />
                <label htmlFor="email">E-mail</label>
              </div>
              <div className="field">
                <select id="ambiente" name="ambiente" required defaultValue="">
                  <option value="" disabled hidden></option>
                  <option>Cozinha Gourmet</option>
                  <option>Closet / Dormitório</option>
                  <option>Painel / Home Theater</option>
                  <option>Varanda Gourmet</option>
                  <option>Home Office</option>
                  <option>Projeto completo</option>
                </select>
                <label htmlFor="ambiente" className="label-float">Ambiente de interesse</label>
              </div>
            </div>
            <div className="field">
              <textarea id="mensagem" name="mensagem" rows="4" placeholder=" "></textarea>
              <label htmlFor="mensagem">Conte sobre o seu projeto</label>
            </div>
            <label className="consent">
              <input type="checkbox" id="consent" required />
              <span>Li e concordo com a <Link to="/politica-privacidade">Política de Privacidade</Link> e os <Link to="/termos-de-uso">Termos de Uso</Link>.</span>
            </label>
            <button type="submit" className="btn-gold btn-block">Enviar solicitação</button>
            <p className="form__feedback" id="formFeedback" role="status"></p>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer" id="footer">
        <div className="footer__top">
          <div className="footer__brand">
            <img src="/assets/brand/logo-branco.svg" alt="Stopa Design" />
            <p>Marcenaria de alto padrão. Móveis planejados sob medida que transformam o espaço em legado.</p>
          </div>
          <nav className="footer__nav">
            <h5>Navegação</h5>
            <a href="#sobre">Atelier</a>
            <a href="#especialidades">Especialidades</a>
            <a href="#galeria">Projetos</a>
            <a href="#depoimentos">Clientes</a>
            <a href="#faq">FAQ</a>
          </nav>
          <nav className="footer__nav">
            <h5>Institucional</h5>
            <Link to="/politica-privacidade">Política de Privacidade</Link>
            <Link to="/termos-de-uso">Termos de Uso</Link>
            <a href="#contato">Contato</a>
          </nav>
          <div className="footer__contact">
            <h5>Contato</h5>
            <a href="https://wa.me/55XXXXXXXXXXX" target="_blank" rel="noopener">WhatsApp</a>
            <a href="mailto:contato@stopadesign.com.br">contato@stopadesign.com.br</a>
            <p className="footer__cnpj">CNPJ: 00.000.000/0001-00</p>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© <span id="year"></span> Stopa Design. Todos os direitos reservados.</p>
          <p className="footer__dev">
            Desenvolvido por:{' '}
            <a href="https://www.outboxgroup.framer.ai" target="_blank" rel="noopener">OutBox Group</a>
          </p>
        </div>
      </footer>

      {/* WHATSAPP FLOAT */}
      <a href="https://wa.me/55XXXXXXXXXXX?text=Ol%C3%A1%21%20Gostaria%20de%20um%20or%C3%A7amento%20de%20m%C3%B3veis%20planejados."
        className="wpp" target="_blank" rel="noopener" aria-label="Fale conosco no WhatsApp">
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path d="M16.04 4C9.93 4 4.97 8.96 4.97 15.07c0 2.13.6 4.11 1.64 5.81L4.5 28l7.32-2.06a11 11 0 0 0 4.22.84h.01c6.11 0 11.07-4.96 11.07-11.07S22.15 4 16.04 4z" fill="#25D366" />
          <path d="M21.95 18.46c-.32-.16-1.9-.94-2.2-1.05-.29-.11-.5-.16-.72.16-.21.32-.82 1.05-1.01 1.26-.19.21-.37.24-.69.08-.32-.16-1.36-.5-2.59-1.6-.96-.85-1.6-1.91-1.79-2.23-.19-.32-.02-.5.14-.66.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.73-.99-2.37-.26-.62-.52-.54-.72-.55l-.61-.01c-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.66s1.14 3.08 1.3 3.29c.16.21 2.25 3.43 5.45 4.81.76.33 1.36.53 1.82.68.76.24 1.46.21 2.01.13.61-.09 1.9-.78 2.17-1.53.27-.75.27-1.39.19-1.53-.08-.13-.29-.21-.61-.37z" fill="#fff" />
        </svg>
      </a>

      {/* LIGHTBOX */}
      <div className="lightbox" id="lightbox" aria-hidden="true">
        <button className="lightbox__close" id="lbClose" aria-label="Fechar">×</button>
        <button className="lightbox__nav lightbox__prev" id="lbPrev" aria-label="Anterior">←</button>
        <figure className="lightbox__fig">
          <img id="lbImg" src="" alt="" />
          <figcaption id="lbCap"></figcaption>
        </figure>
        <button className="lightbox__nav lightbox__next" id="lbNext" aria-label="Próximo">→</button>
      </div>
    </>
  )
}
