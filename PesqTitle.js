
function DefTable(t_name, t_gen){
    const line = document.querySelector('#linhat');
    const col = document.querySelector('#colt');
    
    const new_line = document.createElement('th');
    new_line.setAttribute("scope", "col")
    const new_col = document.createElement('td');
    new_col.innerHTML = t_gen;
    new_line.innerHTML = t_name;
    col.append(new_line);
    line.append(new_col);
}

async function getTitle(){
    
    const title = document.querySelector('#titulo').value;
    console.log(title);

    const res = await axios.get(' http://api.tvmaze.com/search/shows?q=' + title);
    const t_name = res.data[0].show.name;
    const t_gen = res.data[0].show.genres;
    DefTable(t_name, t_gen);

    

}