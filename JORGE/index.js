import { criarFila, inserirItemFila, retirarFila } from "./fila.js";

const fila = criarFila();

inserirItemFila(fila, "Norte")
inserirItemFila(fila, "Leste")
inserirItemFila(fila, "Oeste")
inserirItemFila(fila, "Sul")

console.log(fila)

retirarFila(fila)