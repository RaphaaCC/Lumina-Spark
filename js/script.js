/* Inicializa a navegação, o carregamento de mídias e o lightbox. */
(() => {
    'use strict';

    const enderecoScript = document.currentScript?.src;
    const raiz = enderecoScript ? new URL('../', enderecoScript) : new URL('./', document.baseURI);

    function criarCabecalho() {
        const container = document.getElementById('header-container');
        if (!container) return;

        container.innerHTML = `
            <header class="cabecalho">
                <div class="marca-cabecalho">
                    <a class="logo" data-rota="index.html">Lumina Spark</a>
                    <p class="assinatura-cabecalho">by Raphael Cherfem Carlini &amp; Christopher Roberto Messias</p>
                </div>
                <nav class="menu-superior" aria-label="Menu do site">
                    <a data-rota="index.html">Início</a>
                    <a data-rota="p/historia_da_fotografia.html">História</a>
                    <a data-rota="p/galeria.html">Galeria</a>
                    <a data-rota="p/sobre.html">Sobre</a>
                </nav>
            </header>`;

        container.querySelectorAll('[data-rota]').forEach(link => {
            link.href = new URL(link.dataset.rota, raiz).href;
        });
    }

    function criarRodape() {
        const container = document.getElementById('footer-container');
        if (!container) return;

        container.innerHTML = `
            <footer class="rodape">
                <p class="rodape-escola">Etec Prof. Armando Bayeux da Silva</p>
                <p>Professores Valdeci Ansanello e Débora Regina de Paula Vazzoler</p>
                <p><small>© Raemi Labs</small></p>
            </footer>`;
    }

    function inicializarMidias() {
        const registro = new WeakMap();
        let lightbox = null;
        let quadroLightbox = null;
        let midiaLightbox = null;
        let focoAnterior = null;

        function status() {
            const elemento = document.createElement('span');
            elemento.className = 'lumina-status';
            elemento.hidden = true;
            elemento.setAttribute('role', 'status');
            elemento.innerHTML = `
                <span class="lumina-spinner" aria-hidden="true" hidden></span>
                <span class="lumina-falha" hidden>
                    <span class="lumina-falha-icone" aria-hidden="true">×</span>
                    Não foi possível carregar
                </span>`;
            return elemento;
        }

        function quadro(midia) {
            let conteudo = midia;
            if (midia.parentElement?.tagName === 'PICTURE') {
                conteudo = midia.parentElement;
            }

            let contorno = conteudo.parentElement;
            if (!contorno?.classList.contains('lumina-midia')) {
                contorno = document.createElement('span');
                contorno.className = 'lumina-midia';
                conteudo.before(contorno);
                contorno.appendChild(conteudo);
            }

            if (!contorno.querySelector(':scope > .lumina-status')) {
                contorno.appendChild(status());
            }
            return contorno;
        }

        function mudarEstado(contorno, estado) {
            if (!contorno?.isConnected) return;
            contorno.classList.remove('lumina-pendente', 'lumina-carregando', 'lumina-pronta', 'lumina-erro');
            contorno.classList.add(`lumina-${estado}`);
            const carregando = estado === 'carregando';
            const erro = estado === 'erro';
            contorno.setAttribute('aria-busy', String(carregando));
            const indicador = contorno.querySelector(':scope > .lumina-status');
            if (indicador) {
                indicador.querySelector('.lumina-spinner').hidden = !carregando;
                indicador.querySelector('.lumina-falha').hidden = !erro;
                indicador.hidden = !carregando && !erro;
            }
        }

        function origem(midia) {
            return midia.currentSrc || midia.src || midia.querySelector('source')?.src || '';
        }

        function prepararImagem(img) {
            if (!img.isConnected || img.closest('.lightbox')) return;
            const fonte = `${img.getAttribute('src') || ''}|${img.getAttribute('srcset') || ''}`;
            if (fonte === '|') return; // Imagens com data-src ainda não devem iniciar carga.

            const contorno = quadro(img);
            if (!registro.has(img)) {
                const atualizar = () => {
                    if (!img.complete) return;
                    const atual = img.closest('.lumina-midia');
                    mudarEstado(atual, img.naturalWidth ? 'pronta' : 'erro');
                };

                img.addEventListener('load', atualizar);
                img.addEventListener('error', atualizar);
            }

            if (registro.get(img) === fonte) return;
            registro.set(img, fonte);
            mudarEstado(contorno, 'carregando');

            // O evento pode ter ocorrido antes da inicialização, por exemplo com cache.
            queueMicrotask(() => {
                if (registro.get(img) !== fonte || !img.complete) return;
                if (img.naturalWidth || img.loading !== 'lazy') {
                    mudarEstado(contorno, img.naturalWidth ? 'pronta' : 'erro');
                }
            });
        }

        function prepararVideo(video) {
            if (!video.isConnected || video.closest('.lightbox') || !origem(video)) return;
            if (registro.has(video)) return;

            const contorno = quadro(video);
            registro.set(video, { video: true });

            // A prévia não baixa o vídeo: a transferência ocorre só ao ampliar.
            video.pause();
            video.removeAttribute('autoplay');
            video.preload = 'none';
            video.controls = false;
            video.muted = true;
            mudarEstado(contorno, 'pronta');

            const botao = document.createElement('button');
            botao.type = 'button';
            botao.className = 'video-play-indicator';
            botao.setAttribute('aria-label', 'Expandir vídeo');
            botao.textContent = '▶';
            botao.addEventListener('click', event => {
                event.stopPropagation();
                abrirLightbox('video', origem(video), 'Vídeo ampliado');
            });
            contorno.appendChild(botao);
        }

        function fecharLightbox() {
            if (!lightbox?.classList.contains('is-open')) return;
            if (midiaLightbox?.tagName === 'VIDEO') {
                midiaLightbox.pause();
                midiaLightbox.removeAttribute('src');
                midiaLightbox.load();
            }
            quadroLightbox?.replaceChildren();
            midiaLightbox = null;
            lightbox.classList.remove('is-open');
            lightbox.setAttribute('aria-hidden', 'true');
            document.body.style.removeProperty('overflow');
            focoAnterior?.focus?.({ preventScroll: true });
        }

        function criarLightbox() {
            if (lightbox) return;
            lightbox = document.createElement('div');
            lightbox.className = 'lightbox';
            lightbox.setAttribute('aria-hidden', 'true');
            lightbox.innerHTML = `
                <div class="lightbox__backdrop"></div>
                <div class="lightbox__conteudo" role="dialog" aria-modal="true" aria-label="Mídia ampliada">
                    <button class="lightbox__fechar" type="button" aria-label="Fechar mídia">×</button>
                    <div class="lightbox__media-wrap"></div>
                </div>`;
            quadroLightbox = lightbox.querySelector('.lightbox__media-wrap');
            lightbox.querySelector('.lightbox__fechar').addEventListener('click', fecharLightbox);
            lightbox.addEventListener('click', event => {
                if (event.target === lightbox || event.target.classList.contains('lightbox__backdrop')) {
                    fecharLightbox();
                }
            });
            document.addEventListener('keydown', event => {
                if (event.key === 'Escape' && lightbox.classList.contains('is-open')) fecharLightbox();
            });
            document.body.appendChild(lightbox);
        }

        function abrirLightbox(tipo, fonte, descricao) {
            if (!fonte) return;
            criarLightbox();
            focoAnterior = document.activeElement;

            if (midiaLightbox?.tagName === 'VIDEO') midiaLightbox.pause();
            quadroLightbox.replaceChildren(status());
            mudarEstado(quadroLightbox, 'carregando');

            const video = tipo === 'video';
            const media = document.createElement(video ? 'video' : 'img');
            media.className = video ? 'lightbox__video' : 'lightbox__imagem';
            midiaLightbox = media;
            quadroLightbox.appendChild(media);
            lightbox.classList.add('is-open');
            lightbox.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
            lightbox.querySelector('.lightbox__fechar').focus({ preventScroll: true });

            if (video) {
                media.controls = true;
                media.playsInline = true;
                media.preload = 'auto';
                media.addEventListener('loadeddata', () => {
                    if (midiaLightbox === media) mudarEstado(quadroLightbox, 'pronta');
                });
                media.addEventListener('canplay', () => {
                    if (midiaLightbox === media) mudarEstado(quadroLightbox, 'pronta');
                });
                media.addEventListener('error', () => {
                    if (midiaLightbox === media) mudarEstado(quadroLightbox, 'erro');
                });
                media.src = fonte;
                media.play().catch(() => {});
            } else {
                media.alt = descricao || 'Imagem ampliada';
                media.decoding = 'async';
                media.addEventListener('load', () => {
                    if (midiaLightbox === media) mudarEstado(quadroLightbox, 'pronta');
                });
                media.addEventListener('error', () => {
                    if (midiaLightbox === media) mudarEstado(quadroLightbox, 'erro');
                });
                media.src = fonte;
            }
        }

        function prepararMidia(midia) {
            if (!midia.isConnected || midia.closest('.lightbox')) return;
            const fonte = origem(midia) || midia.getAttribute('srcset');
            if (!fonte) return;

            if (midia.tagName === 'IMG') prepararImagem(midia);
            if (midia.tagName === 'VIDEO') prepararVideo(midia);
            if (midia.dataset.lightboxBound === 'true') return;

            midia.dataset.lightboxBound = 'true';
            midia.tabIndex = 0;
            const abrir = () => {
                if (midia.closest('.lumina-midia')?.classList.contains('lumina-erro')) return;
                abrirLightbox(
                    midia.tagName === 'VIDEO' ? 'video' : 'imagem',
                    midia.dataset.fullSrc || origem(midia),
                    midia.alt || 'Mídia ampliada'
                );
            };
            midia.addEventListener('click', abrir);
            midia.addEventListener('keydown', event => {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    abrir();
                }
            });
        }

        function examinar(raizAtual) {
            if (!(raizAtual instanceof Element || raizAtual === document)) return;
            if (raizAtual.matches?.('img, video')) prepararMidia(raizAtual);
            if (raizAtual.matches?.('video source')) prepararMidia(raizAtual.closest('video'));
            raizAtual.querySelectorAll?.('img[src], img[srcset], video[src], video source')
                .forEach(elemento => {
                    if (elemento.tagName === 'SOURCE') {
                        prepararMidia(elemento.closest('video'));
                    } else {
                        prepararMidia(elemento);
                    }
                });
        }

        examinar(document);

        // Um único processamento agrupado para múltiplas inserções (evita loops de reflow).
        const pendentes = new Set();
        let agendado = false;
        function agendar(raizAtual) {
            if (!raizAtual || raizAtual.nodeType !== 1) return;
            if (raizAtual.matches?.('.lumina-status, .video-play-indicator, .lightbox')) return;
            if (raizAtual.closest?.('.lightbox')) return;
            pendentes.add(raizAtual);
            if (agendado) return;
            agendado = true;
            queueMicrotask(() => {
                agendado = false;
                for (const item of pendentes) examinar(item);
                pendentes.clear();
            });
        }

        const observer = new MutationObserver(mutacoes => {
            for (const mutacao of mutacoes) {
                if (mutacao.type === 'attributes') {
                    agendar(mutacao.target);
                } else {
                    mutacao.addedNodes.forEach(agendar);
                }
            }
        });
        observer.observe(document.body, {
            subtree: true,
            childList: true,
            attributes: true,
            attributeFilter: ['src', 'srcset']
        });

        // A galeria chama explicitamente após definir src; evita esperar pelo observer.
        window.LuminaMedia = { preparar: prepararMidia };
    }

    document.addEventListener('DOMContentLoaded', () => {
        criarCabecalho();
        criarRodape();
        inicializarMidias();
    });
})();
