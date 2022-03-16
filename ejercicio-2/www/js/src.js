
let nombre = prompt('por favor ingrese su nombre y primer apellido');
let respuesta= prompt('Le apetece un cancelAnimationFrame, por favor diga si o no');
if (respuesta==='si'){
    console.log(`¡Bienvenid@ ${nombre}! En breves recibirá su café calentito en casa.`);
}else{
    console.log(`¡Bienvenid@ ${nombre}! Hoy no hay café.`);
}

