# Dicas de como usar o [SASS](https://sass-lang.com/):
> Antes de mais nada, caso ainda não tenha conhecimeto, o SASS é uma linguagem de folhas de estilo  concebida inicialmente por Hampton Catlin e desenvolvida por Natalie Weizenbaum. SASS é uma linguagem de script que é interpretada ou compilada em Cascading Style Sheets (CSS). SassScript é a linguagem em si.
> [**Origem: Wikipédia, a enciclopédia livre.**](https://pt.wikipedia.org/wiki/Sass_(linguagem_de_folhas_de_estilos))
- Dependência(s): `Node.JS`
- instalação do `sass` caso ainda não tenha:
    - `npm install -g sass `

## Comando para compilar e assestir um arquivo css:
    `sass --watch <caminho>/main.scss:<caminho>//style.css`
**EXEMPLO:**
- `sass --watch assets/sass/main.scss:assets/css/style.css`

## Apesar de não estar usando essa estrutura nesse projeto, aqui está uma recomendação de estrutura para manter o código bem ordenado:
```bash
sass/
|
|– abstracts/ (or utilities/)
|   |– _variables.scss    // Sass Variables
|   |– _functions.scss    // Sass Functions
|   |– _mixins.scss       // Sass Mixins
|
|– base/
|   |– _reset.scss        // Reset/normalize
|   |– _typography.scss   // Typography rules
|
|– components/ (or modules/)
|   |– _buttons.scss      // Buttons
|   |– _carousel.scss     // Carousel
|   |– _slider.scss       // Slider
|
|– layout/
|   |– _navigation.scss   // Navigation
|   |– _grid.scss         // Grid system
|   |– _header.scss       // Header
|   |– _footer.scss       // Footer
|   |– _sidebar.scss      // Sidebar
|   |– _forms.scss        // Forms
|
|– pages/
|   |– _home.scss         // Home specific styles
|   |– _about.scss        // About specific styles
|   |– _contact.scss      // Contact specific styles
|
|– themes/
|   |– _theme.scss        // Default theme
|   |– _admin.scss        // Admin theme
|
|– vendors/
|   |– _bootstrap.scss    // Bootstrap
|   |– _jquery-ui.scss    // jQuery UI
|
 – main.scss              // Main Sass file
```