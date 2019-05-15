
// ej 9
// Rellena la matriz como la siguiente utilizando bucles for anidados
// let matriz = [
//   ['00','01','02'],
//   ['10','11','12'],
//   ['20','21','22']
// ];
var matriz = [
    [],
    [],
    []
]
for (var i = 0; i < 3; i++) {
   
    for(j=0; j<3 ;j++){
    //matriz[i].push(((i*10)+j)+"");//este es mi primer resultado 
        matriz[i].push((i+''+j));//devuelve valores string, este he 
                                //llegado después de hablar con el profesor modificando el anterior 
    }
    
    
}
console.log(matriz);
