class ArticleBlog extends HTMLElement {

  constructor() {
    super()
  }

  static get observedAttributes() {
    const changeValues = {
      picture: null,
      title: null,
      labels: {},
      likes: null,
      laugh: null,
      angry: null,
      description: null,
      comment: null,
      date: null
    };
    return Object.keys(changeValues);
  }

  connectedCallback() {

  }

  render() {
    this.innerHTML = `
      <link rel="stylesheet" href="./app/components/article-blog/article.css">

      <div class="card" style="width: 18rem;">
        <img src="${this.picture}" class="card-img-top" alt="328px">
          <div class="card-body">
          <h5 class="card-title">${this.title}</h5>
            <div class= "labels-blog">  
            </div>
          <p class="card-text">${this.description}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      `
  }

}

customElements.define('article-blog', ArticleBlog)


export default ArticleBlog


/*
class Navbar extends HTMLElement {
    constructor() {
      super();
      
    }
  
    connectedCallback() {
      this.innerHTML = `
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">My Website</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
      `;
    }
  
    
  }
  
  customElements.define('my-navbar', Navbar);
  */