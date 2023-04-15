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

        
        this.innerHTML=`
        <div id="container-articles"></div>
        ` 
        const container = document.getElementById('container-articles');
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
            container.appendChild(articleCard);
        });

    }

}

customElements.define("app-container", AppContainer);