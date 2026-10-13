// Gerador de cabeçalho para o site
function gerarCabecalho() {
    const script = document.currentScript;
    const cabecalho = `
        <header class="cabecalho">
            <a class="logo" data-rota="index.html">Lumina Spark</a>
            <nav class="menu-superior" aria-label="Menu do site">
                <a data-rota="index.html">Início</a>
                <a data-rota="p/historia_da_fotografia.html">História</a>
                <a data-rota="p/galeria.html">Galeria</a>
                <a data-rota="p/sobre.html">Sobre</a>
            </nav>
        </header>`;

    if (!script || !script.src) {
        console.error('Não foi possível determinar o caminho do script do cabeçalho.');
        return;
    }

    const raizDoSite = new URL('../', script.src);

    document.addEventListener('DOMContentLoaded', function () {
        const container = document.getElementById('header-container');

        if (!container) {
            console.error('Container do cabeçalho não encontrado.');
            return;
        }

        container.innerHTML = cabecalho;

        container.querySelectorAll('[data-rota]').forEach(link => {
            link.href = new URL(link.dataset.rota, raizDoSite);
        });
    });
}

gerarCabecalho();

// Visualizador de mídia - INÍCIO
document.addEventListener('DOMContentLoaded', () => {
    const videosNaPagina = document.querySelectorAll('video:not(.lightbox__video)');
    videosNaPagina.forEach((video) => {
        video.pause();
        video.removeAttribute('autoplay');
        video.muted = true;
        video.controls = false;
        video.preload = 'metadata';
    });

    let overlay = document.querySelector('.lightbox');
    let mediaWrap = null;
    let botaoFechar = null;
    let mediaAtiva = null;

    function criarOverlay() {
        if (overlay) {
            mediaWrap = overlay.querySelector('.lightbox__media-wrap');
            botaoFechar = overlay.querySelector('.lightbox__fechar');
            return;
        }

        overlay = document.createElement('div');
        overlay.className = 'lightbox';
        overlay.setAttribute('aria-hidden', 'true');
        overlay.innerHTML = `
            <div class="lightbox__backdrop"></div>
            <div class="lightbox__conteudo" role="dialog" aria-modal="true" aria-label="Mídia ampliada">
                <button class="lightbox__fechar" type="button" aria-label="Fechar mídia">×</button>
                <div class="lightbox__media-wrap"></div>
            </div>
        `;

        mediaWrap = overlay.querySelector('.lightbox__media-wrap');
        botaoFechar = overlay.querySelector('.lightbox__fechar');

        overlay.addEventListener('click', (event) => {
            if (event.target === overlay || event.target.classList.contains('lightbox__backdrop')) {
                fecharLightbox();
            }
        });

        botaoFechar.addEventListener('click', fecharLightbox);

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && overlay.classList.contains('is-open')) {
                fecharLightbox();
            }
        });

        document.body.appendChild(overlay);
    }

    function limparMidiaAtiva() {
        if (!mediaAtiva) return;

        if (mediaAtiva.tagName === 'VIDEO') {
            mediaAtiva.pause();
            mediaAtiva.currentTime = 0;
            mediaAtiva.removeAttribute('src');
            mediaAtiva.load();
        }

        mediaAtiva.remove();
        mediaAtiva = null;
    }

    function abrirLightbox(tipo, src, alt) {
        criarOverlay();
        limparMidiaAtiva();

        const media = tipo === 'video' ? document.createElement('video') : document.createElement('img');
        media.className = tipo === 'video' ? 'lightbox__video' : 'lightbox__imagem';
        media.src = src;
        media.alt = alt || (tipo === 'video' ? 'Vídeo ampliado' : 'Imagem ampliada');

        if (tipo === 'video') {
            media.controls = true;
            media.muted = false;
            media.playsInline = true;
            media.preload = 'metadata';
            media.play().catch(() => {});
        }

        mediaWrap.appendChild(media);
        mediaAtiva = media;
        overlay.classList.add('is-open');
        overlay.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function fecharLightbox() {
        if (!overlay) return;
        limparMidiaAtiva();
        overlay.classList.remove('is-open');
        overlay.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    function configurarMidia(midia) {
        if (!midia || midia.dataset.lightboxBound === 'true') return;

        const src = midia.currentSrc || midia.src || midia.querySelector('source')?.src || '';
        if (!src) return;

        midia.dataset.lightboxBound = 'true';
        midia.style.cursor = 'zoom-in';
        midia.setAttribute('tabindex', '0');

        if (midia.tagName === 'VIDEO') {
            const botaoPlay = document.createElement('button');
            botaoPlay.type = 'button';
            botaoPlay.className = 'video-play-indicator';
            botaoPlay.setAttribute('aria-label', 'Expandir vídeo');
            botaoPlay.innerHTML = '▶';

            const containerVideo = document.createElement('div');
            containerVideo.className = 'video-wrapper';
            midia.parentNode.insertBefore(containerVideo, midia);
            containerVideo.appendChild(midia);
            containerVideo.appendChild(botaoPlay);

            const abrirAoClicar = () => {
                abrirLightbox('video', src, midia.poster || midia.alt || 'Vídeo ampliado');
            };

            botaoPlay.addEventListener('click', (event) => {
                event.stopPropagation();
                abrirAoClicar();
            });

            midia.addEventListener('click', abrirAoClicar);
            midia.addEventListener('keydown', (event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    abrirAoClicar();
                }
            });
            return;
        }

        const abrirAoClicar = () => {
            abrirLightbox('imagem', src, midia.alt || 'Imagem ampliada');
        };

        midia.addEventListener('click', abrirAoClicar);
        midia.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                abrirAoClicar();
            }
        });
    }

    function inicializarMidias() {
        const midias = document.querySelectorAll('img:not(.lightbox__imagem), video:not(.lightbox__video)');
        if (!midias.length) return;
        criarOverlay();
        midias.forEach(configurarMidia);
    }

    inicializarMidias();

    const observer = new MutationObserver(() => {
        inicializarMidias();
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: false,
    });
});
// Visualizador de mídia - FIM