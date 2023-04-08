export var attributesArticle;
(function (attributesArticle) {
    attributesArticle["picture"] = "picture";
    attributesArticle["title"] = "title";
    attributesArticle["labels"] = "labels";
    attributesArticle["likes"] = "likes";
    attributesArticle["laugh"] = "laugh";
    attributesArticle["angry"] = "angry";
    attributesArticle["description"] = "description";
    attributesArticle["comment"] = "comment";
    attributesArticle["date"] = "date";
})(attributesArticle || (attributesArticle = {}));

class ArticleBlog extends HTMLElement {

  constructor() {
    super()
    this.likes = parseInt(localStorage.getItem('likes') || '0');
    this.laugh = parseInt(localStorage.getItem('laugh') || '0');
    this.angry = parseInt(localStorage.getItem('angry') || '0');
    this.comment = parseInt(localStorage.getItem('comment') || '0');
    this.reaction = parseInt(localStorage.getItem('reaction') || false);
  }

  static get observedAttributes() {
    const changeValues = {
      picture: null,
      title: null,
      labels: null,
      likes: null,
      laugh: null,
      angry: null,
      description: null,
      comment: null,
      date: null,
      reaction: false,
    };
    return Object.keys(changeValues);
  }

  connectedCallback() {
    this.render()
  }

  attributeChangedCallback(nameAttr, oldValue, newValue) {
    this[nameAttr] = newValue;
    this.render()
  }

  render() {
    this.innerHTML = `
      <link rel="stylesheet" href="./public/app/components/article-blog/article.css">

      <div class="card" style="width: 18rem;">
        <img src="${this.picture}" class="card-img-top article-img" alt="328px">
          <div class="card-body">
          <h5 class="card-title article-tittle">${this.title} </h5>
          <p class= "labels-blog article-label"> ${this.labels}</p>
          <p class="card-text article-description">${this.description} <a href="#">leer más...</a> </p>

          <div class="container-reacts">
          <p class="reacts-num"> <i class="bi bi-heart article-like icon-blog"></i> ${this.likes}</p>
          <p class="reacts-num"> <i class="bi bi-emoji-laughing article-laugh icon-blog"></i> ${this.laugh}</p>
          <p class="reacts-num"> <i class="bi bi-emoji-angry article-angry icon-blog"></i> ${this.angry}</p>
          <p class="reacts-num"> <i class="bi bi-chat-left-text comment-angry icon-blog"></i> ${this.comment}</p>
          </div>
          
        </div>
      </div>
      `
  }

}

customElements.define('article-blog', ArticleBlog)
export default ArticleBlog


/* chat-left-text

handleLikeClick() {
    this.likes++;
    localStorage.setItem('likes', this.likes);
    this.setAttribute('likes', this.likes);
  }

  handleComentarioSubmit() {
    this.comentarios++;
    localStorage.setItem('comentarios', this.comentarios);
    this.setAttribute('comentarios', this.comentarios);
  }
}*/