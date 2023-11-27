class TextComponent extends HTMLElement{
    constructor(){
        super();

        let span = document.createElement('span');

        span.className = 'wc-text';
        span.innerHTML = 'Initially defined text';

        this.appendChild(span);
    }
}

customElements.define('text-component', TextComponent);