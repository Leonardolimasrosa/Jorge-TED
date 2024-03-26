 export function criarFila(tamanho){

    return [...new Array(tamanho)]
}

export function inserirItemFila(fila, item){
    const posicao = fila.indexOf(undefined);
    if(posicao === -1){
    console.log("Fila Cheia");
    return;
}

fila[posicao] = item;
}

export function retirarFila(fila){
    if(fila[0] === undefined){
        return
    }
    let primeiro = fila[0];
    for(let i=0; i<fila.lenght; i++){
        fila[i] = fila[i+1]
    }
}