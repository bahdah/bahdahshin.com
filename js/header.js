const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
    <link rel="stylesheet" type="text/css" href="css/header.css">
    <script defer src="/_vercel/insights/script.js"></script>
    <header>
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li class="right"><a href="contact.html">Contact</a></li>
                <li class="right"><a href="about.html">About</a></li>
            </ul>
        </nav>
    </header>
`;

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.appendChild(headerTemplate.content);
  }
}

customElements.define('header-component', Header);
