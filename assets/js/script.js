/*------automatizaçâo do carrosel---------*/

let count = 1;
document.getElementById("radio1").checked = true;

function proximaImagem(){
    count++;
    if(count>4){
        count = 1
    };

    document.getElementById("radio"+count).checked = true;

}

setInterval(function(){
    proximaImagem()
}, 2000)
/*------fim automatizaçâo do carrosel---------*/