const projects = [
  {
    id: 1,
    url: 'freeads',
    banner: '/projects/freeads/accueil.png',
    img: '/projects/freeads/accueil.png',
    title: 'Freeads',
    type: 'Website',
    icon: '/projects/freeads/accueil.png',
    github: 'https://github.com/edemdev7/freeads',
    web: 'https://github.com/edemdev7/freeads',
    description:
      'This is a freeads website built with Laravel 11. The project includes user authentication, profile management, an admin dashboard for managing users, categories, conditions, and locations. Users can view, create, edit, and delete their ads. The admin has the authority to manage all the aspects of the application through a dedicated dashboard.',
    tags: [
      {
        name: 'Laravel',
        icon: '/skills/laravel-svgrepo-com.svg',
        color: '#FFFFFF',
        rgb: '255, 255, 255'
      },
      {
        name: 'TailwindCSS',
        icon: '/skills/tailwindcss.svg',
        color: '#38BDF8',
        rgb: '56, 189, 248'
      },
      {
        name: 'Mysql',
        icon: '/skills/mysql-svgrepo-com.svg',
        color: '#fff',
        rgb: '99, 91, 255'
      },
    ],
    print: [
      {
        name: 'Home',
        description:
          'Homepage do site com um banner em forma de sliders que mostra os destaques de produtos existentes na loja. Cada slide destaca as características distintas de cada produto.',
        img: '/projects/freeads/accueil.png'
      },
      {
        name: 'Ads list',
        description:
          'Homepage do site, onde são exibidos todos os produtos da loja. Explorando uma ampla gama de produtos que atendem a diversos gostos e necessidades.',
        img: '/projects/freeads/accueil.png'
      },
      {
        name: 'User Profile',
        description:
          'Página de detalhes de um produto, contendo uma descrição do produto, assim como o seu preço e um imagem ilustrativa. Botão de adicionar aos favoritos ou ao carrinho.',
        img: '/projects/freeads/profile.png'
      },
    ],
    status: 'Pas déployé',
    year: '2024',
    gif: '#',
    backgroundImage: '/projects/freeads/accueil.png',
    video:
      '#'
  },

  {
    id: 2,
    url: 'ShowSphere',
    banner: '/projects/show/landing.png',
    img: '/projects/show/landing.png',
    title: 'ShowSphere',
    type: 'Website',
    icon: '/projects/show/landing.png',
    github: 'https://github.com/edemdev7/C-COD-250-COT-2-3-showtime-dolores.azondjedo',
    web: 'https://showtime-ihe5.onrender.com/',
    description:
      'ShowSphere is an innovative ticket booking platform for concerts and festivals. Built with NestJS and MongoDB, it offers a seamless experience for users to explore events, manage bookings, and keep track of their favorite artists. ShowSphere also features a robust administration panel for event management and insightful booking analytics.',
    tags: [
      {
        name: 'Nest JS',
        icon: '/skills/Nest.js.svg',
        color: '#FF0000',
        rgb: '255, 255, 255'
      },
      {
        name: 'TailwindCSS',
        icon: '/skills/tailwindcss.svg',
        color: '#38BDF8',
        rgb: '56, 189, 248'
      },
      {
        name: 'TypeScript',
        icon: '/skills/typescript.svg',
        color: '#fff',
        rgb: '99, 91, 255'
      },
      {
        name: 'MongoDB',
        icon: '/skills/mongodb.svg',
        color: '#008000',
        rgb: '99, 91, 255'
      },
    ],
    print: [
      {
        name: 'Register Page',
        description:
          'Page d\' inscription avec email et mot de passe',
        img: '/projects/show/register.png'
      },
      {
        name: 'Home Page',
        description:
          'Page d\'accueil ',
        img: '/projects/show/home.png'
      },
      {
        name: 'Concert Detail',
        description: 'Page de détail d\'un concert',
        img: '/projects/show/detail.png'
      },
      {
        name: 'Tickets',
        description:
          'Liste des tickets réservés par un utilisateur',
        img: '/projects/show/ticket.png'
      },
      {
        name: 'Admin page',
        description: 'Page d\'accueil admin .',
        img: '/projects/show/admin.png'
      },
      {
        name: 'Concert Management ',
        description: 'Gestion des concerts par un admin.',
        img: '/projects/show/concert.png'
      }
    ],
    status: 'Déployé',
    year: '2024',
    gif: '#',
    backgroundImage: '/projects/show/landing.png',
    video:
      '#'
  },
]

export default projects
