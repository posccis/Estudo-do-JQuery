/*Função que adiciona os itens a tabela */
function DefTable(shows){

    /*Seleciona a tabela*/
    const body = document.querySelector('#tbody');
    
    /*Limpa a tabela*/
    if(document.getElementsByClassName('roww')){
        const list = document.getElementsByClassName('roww');
        for(var i = list.length - 1; 0 <= i; i--){
            if(list[i] && list[i].parentElement){
                list[i].parentElement.removeChild(list[i]);
            }
        }
    }
    
/*Adiciona os itens a tabela*/
    
        for (let result of shows) {
            if (result.show.image){
                const title = result.show.name;
                const gener = "Generos: " + result.show.genres;

                const img = document.createElement('img');
                img.src = result.show.image.medium;
                const new_line = document.createElement('th');
                const new_col = document.createElement('td');
                const new_row = document.createElement('tr');
                const h3_title = document.createElement('h3');
                const h4_genre = document.createElement('h6');
                
                
                h4_genre.innerHTML = gener;
                h3_title.innerHTML = title;
                new_row.setAttribute("class", "roww");
                body.append(new_row);

                new_line.setAttribute("scope", "col");
                new_line.append(h3_title);
                new_line.append(h4_genre);
                new_row.append(new_col);
                new_col.append(img);
                new_row.append(new_line);
                
            }
            
        }
    
}

/* Função que faz a requisição da API*/
async function getTitle(){
    
    const title = document.querySelector('#titulo').value;
    

    const res = await axios.get(' http://api.tvmaze.com/search/shows?q=' + title);
    
    console.log(res.data);
    DefTable(res.data);

    

}