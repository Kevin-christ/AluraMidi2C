function tocasom(seletoraudio){
const elemento"document.queryselector(selectoraudio);
  if(elements&& elemento localName= = ="audio"){
  elemento play();
}
  else {
    console log("Elemento não encontrado ou seletor inválido");
  }
}
const listaDeTeclas= document queryselector All('tecla')
for(let contador= O;contador <listaDeTeclas length;contador++) {
  const tecla= listaDeTeclas[contador]
  const instrumento= 
