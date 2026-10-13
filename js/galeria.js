// Scripts para a galeria de fotos (/p/galeria.html) - Separado em categorias por estilo de fotografia
const estilos = ['Jornalística', 'Artística', 'Documental', 'Publicitária', 'Natureza', 'Eventos', 'Esportiva', 'Retrato', 'Fotografia como Hobby'];

const fallbackImagem = 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=900&q=80';

const fotografiasUrls = {
    'Jornalística': [
        'https://www.jornalcidade.net/wp-content/uploads/2026/05/Luciano-Filho-e-pianista-arranjador-e-regente-da-Orquestra-Filarmonica-de-Rio-Claro.jpg.webp',
        'https://www.jornalcidade.net/wp-content/uploads/2026/10/Pepeu-e-Pantera.webp',
        'https://www.jornalcidade.net/wp-content/uploads/2016/05/Jacarand%C3%A1.jpg',
        'https://www.jornalcidade.net/wp-content/uploads/2026/10/Coelho.webp',
    ],
    'Artística': [
        'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d6/Fishermen_at_work_by_Shagil_Kannur.jpg/960px-Fishermen_at_work_by_Shagil_Kannur.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/f/ff/Sunrise_In_Iceland_Fine_Art_Photography_%28133929339%29.jpeg',
        'https://upload.wikimedia.org/wikipedia/commons/2/21/Adams_The_Tetons_and_the_Snake_River.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/3/3a/Grasslands_of_the_American_Midwest.jpg',
    ],
    'Documental': [
        '../assets/images/usp.jpg',
        '../assets/images/cemiterio.jpg',
        '../assets/images/aterro.jpg',
        '../assets/images/torreusp.jpeg',
    ],
    'Publicitária': [
        'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/54/The_Ladies%27_home_journal_%281948%29_%2814785694143%29.jpg/1280px-The_Ladies%27_home_journal_%281948%29_%2814785694143%29.jpg',
        'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80',
    ],
    'Natureza': [
        '../assets/images/butantan.jpg',
        '../assets/images/a1.jpeg',
        '../assets/images/a2.jpeg',
        '../assets/images/a3.jpeg',
        '../assets/images/a4.jpeg',
        '../assets/images/a5.jpeg',
        '../assets/images/a6.jpeg',
        '../assets/images/a7.jpg',
        '../assets/images/a8.jpg',
        '../assets/images/a9.jpeg',
    ],
    'Eventos': [
        'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80',
    ],
    'Esportiva': [
        '../assets/images/chrisaura.png',
        '../assets/images/vivanaura.jpeg',
        '../assets/images/quadrabayeux.jpeg',
        'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=900&q=80',
    ],
    'Retrato': [
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80',
    ],
    'Fotografia como Hobby': [
        '../assets/images/kelvinaura.jpg',
        '../assets/images/vivanpai.jpeg',
        '../assets/images/chrisbebe.jpeg',
        '../assets/images/marquesbebe.jpeg',
        '../assets/images/raphaelbutantan.jpg',
        '../assets/images/minion.jpg',
        '../assets/images/vivancrianca.jpeg',
    ]
};

// Renderiza as fotografias na galeria com botões de navegação por categoria
document.addEventListener('DOMContentLoaded', () => {
    const galeriaContainer = document.getElementById('galeria-container'); // uma div com id="galeria-container" no HTML
    if (!galeriaContainer) return;

    const nav = document.createElement('div');
    nav.classList.add('galeria-nav');

    const conteudo = document.createElement('div');
    conteudo.classList.add('galeria-conteudo');

    const renderCategoria = (estilo) => {
        conteudo.innerHTML = '';

        const titulo = document.createElement('h2');
        titulo.textContent = estilo;
        conteudo.appendChild(titulo);

        const grid = document.createElement('div');
        grid.classList.add('galeria-grid');

        const urls = fotografiasUrls[estilo] || [];
        urls.forEach((url) => {
            if (!url) return;

            const img = document.createElement('img');
            img.src = url;
            img.alt = `Fotografia ${estilo}`;
            img.loading = 'lazy';
            img.decoding = 'async';
            img.onerror = () => {
                img.src = fallbackImagem;
            };
            grid.appendChild(img);
        });

        conteudo.appendChild(grid);
    };

    estilos.forEach((estilo) => {
        const botao = document.createElement('button');
        botao.type = 'button';
        botao.classList.add('galeria-btn');
        botao.textContent = estilo;
        botao.setAttribute('data-estilo', estilo);

        botao.addEventListener('click', () => {
            document.querySelectorAll('.galeria-btn').forEach((btn) => {
                btn.classList.toggle('active', btn === botao);
            });
            renderCategoria(estilo);
        });

        nav.appendChild(botao);
    });

    galeriaContainer.appendChild(nav);
    galeriaContainer.appendChild(conteudo);

    const primeiroEstilo = estilos[0];
    renderCategoria(primeiroEstilo);
    document.querySelector('.galeria-btn')?.classList.add('active');
});