class TextComponent extends HTMLElement{
    constructor(){
        super();

        this.shadow = this.attachShadow({mode: 'closed'});

        let span = document.createElement('span');

        span.className = 'wc-text';
        span.innerHTML = 'Initially defined text';

        this.shadow.appendChild(span);
    }
}

customElements.define('text-component', TextComponent);