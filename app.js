function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value
    
    // se o campoPesquisa for igual a string vazia
    if (!campoPesquisa){
        section.innerHTML = "<p>Nada foi encontrado. Você precisa adicionar o nome de um atleta ou esporte</p>"
        return
    }

    // tratando a string para letras minusculas

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado na array 'dados'
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        // se Título inclui campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            // Constrói o HTML para cada item de resultado
            resultados += `
            <div class="item-resultado">
                <h2> 
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link}" target="_blank">Mais Informações</a>
            </div>`;
        };

    }

    if (!resultados){
        resultados = "<p>Nada foi encontrado</p>"
    }

    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
}