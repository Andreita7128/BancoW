import "./components/components.js";
import dataArticle from "./dataArticle.js";
import {
    attributesArticle
} from "./components/article-blog/article.js";

console.log(dataArticle)

class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.article = [];

        this.attachShadow({
            mode: 'open'
        });

        dataArticle.forEach((data) => {
            const articleCard = this.ownerDocument.createElement("article-blog");
            articleCard.setAttribute(attributesArticle.picture, data.picture);
            articleCard.setAttribute(attributesArticle.tittle, data.title);
            articleCard.setAttribute(attributesArticle.labels, data.labels);
            articleCard.setAttribute(attributesArticle.likes, data.likes);
            articleCard.setAttribute(attributesArticle.laugh, data.laugh);
            articleCard.setAttribute(attributesArticle.angry, data.angry);
            articleCard.setAttribute(attributesArticle.description, data.description);
            articleCard.setAttribute(attributesArticle.comment, data.comment);
            articleCard.setAttribute(attributesArticle.date, data.date);
            this.article.push(articleCard);
            console.log(this.article)
        });

    }
    connectedCallback() {
        this.render();
    }
    render() {
            this.innerHTML = ``;
            this.article.forEach((art) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(art);
            });
        
    }

}

customElements.define("app-container", AppContainer);