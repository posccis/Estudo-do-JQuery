/*
function cepConsult(){
    $.ajax({
        url: "https://viacep.com.br/ws/54768790/json/",
        type: "GET",
        
        success: function(response){
            console.log(response);
            alert(response.logradouro);
        }
    })
}
*/

function pesqCep()
    
{
    var cEp = document.getElementById("CEPent").value;
    console.log(cEp);
    var url = "https://viacep.com.br/ws/" + cEp + "/json/";
    console.log(url);

    $.ajax({
        url: url,
        type: "GET",

        success: function(response){
            var fH = document.getElementById("cep").innerText =" " + cEp;
            var sH = document.getElementById("bairro").innerText =" " +  response.bairro;
            var tH = document.getElementById("rua").innerText =" " +  response.logradouro;
            var fH = document.getElementById("cidade").innerText = " " +  response.localidade;
            var ffH = document.getElementById("estado").innerText = " " +  response.uf;
            var sH = document.getElementById("ddd").innerText = " " +  response.ddd;
        }
    })
}