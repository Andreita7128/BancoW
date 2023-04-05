import "./components/components.js";

class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.stories = [];
        this.posts = [];
        
    }
    connectedCallback() {
        this.render();
    }
    render() {

    }
}

customElements.define("app-container", AppContainer);