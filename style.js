 var select = document.getElementById('lista')
    select.addEventListener('change', function(){
    console.log(select.value)
    })
function clique(){
    if (select.value == "Danos"){
        return window.location.href = "/templates/danos.html";
    } else if (select.value == "Armas"){
        return window.location.href = "/templates/armas.html";
    } else if (select.value == "Cidades"){
        return window.location.href = "/templates/cidade.html";
    } else if(select.value == "geral"){
        return window.location.href = "/templates/regras.html";
    } 
}

function voltar(){
    const voltarfile = "/index.html";
    return window.location.href = voltarfile;
}



