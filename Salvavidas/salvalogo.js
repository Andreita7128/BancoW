const microcredito = document.getElementById("microcredito_salvalogo");

microcredito.addEventListener("click", changeToMicro);


function changeToMicro () {

    console.log(document.getElementById("content-in-help").innerHTML)

    document.getElementById("content-in-help").innerHTML = `
    
    <section class="to-search-salvavidas">
                <form class="search-in-salvavidas">
                    <input type="search" placeholder="Haz tu pregunta aqui..." name="Preguntas Frecuentes"
                        id="search-bar-salvavidas">
                    <img id="lupita-salvavidas" src="/lupita.svg" width="20" alt="">
                </form>
            </section>

            <section class="preguntas-sugeridas">
                <div id="preguntas-frecuentes-titulo">
                    <p class="title-salvavidas-preguntas"> Preguntas Frecuentes</p>
                </div>
            </section>

            <section id ="info-salvalogo">
                <h5 id="tittle-info-salvalogo">Cómo solicitar un credito</h5>

                <p class="texto-en-info"> Para realizar esta tarea requerimos que sigas los siguientes pasos: </p>


                <img id="img-in-salvalogo" src="form 1.png" alt="">
            </section>
    
    
    `;

    console.log(document.getElementById("content-in-help").innerHTML)

    //content;


}



function returnToMain () {

    console.log(document.getElementById("content-in-help").innerHTML)

    document.getElementById("content-in-help").innerHTML = "";

    document.getElementById("content-in-help").innerHTML = `
    
    <section class="to-search-salvavidas">
    <form class="search-in-salvavidas">
        <input type="search" placeholder="Haz tu pregunta aqui..." name="Preguntas Frecuentes"
            id="search-bar-salvavidas">
        <img id="lupita-salvavidas" src="/lupita.svg" width="20" alt="">
    </form>
</section>

<section class="preguntas-sugeridas">
    <div id="preguntas-frecuentes-titulo">
        <p class="title-salvavidas-preguntas"> Preguntas Frecuentes</p>
    </div>
    <div id="preguntas-frecuentes-sugerencias">
       <button class="pregunta-frecuente-salvavidas" id="microcredito_salvalogo"> ¿Cómo sacar un credito? </button> 
       <button class="pregunta-frecuente-salvavidas"> ¿Cómo solicitar un Gota Ahorro? </button> 
       <button class="pregunta-frecuente-salvavidas"> ¿Cómo ingresar a yo construyo? </button> 
    </div>


</section>
<section >
    <button id="just-to-know">Educación financiera</button> 
</section>
    
`     ;


}