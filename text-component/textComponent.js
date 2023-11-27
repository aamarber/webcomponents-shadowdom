class TextComponent extends HTMLElement{
    constructor(){
        super();

        this.shadow = this.attachShadow({mode: 'closed'});

        let span = document.createElement('span');

        span.className = 'wc-text';
        span.innerHTML = 'Initially defined text';

        this.shadow.appendChild(span);

        let link = document.createElement('link');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('href', '../index.css');
        this.shadow.appendChild(link);
    }
}

customElements.define('text-component', TextComponent);