 var select = document.getElementById('lista')
    select.addEventListener('change', function(){
    console.log(select.value)
    })
function clique(){
    if (select.value == "Danos"){
        return window.location.href = "danos.html";
    } else if (select.value == "Armas"){
        return window.location.href = "armas.html";
    } else if (select.value == "Cidades"){
        return window.location.href = "cidade.html";
    } else if(select.value == "geral"){
        return window.location.href = "regras.html";
    } 
}

function voltar(){
    const voltarfile = "index.html";
    return window.location.href = voltarfile;
}



