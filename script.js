'use strict'
//VARIABLES A USAR 
// defini tus elementos de html como const 
let topText = document.getElementById('topText');
let bottomText = document.getElementById('bottomText');
let previewImagen = document.getElementById('previewImagen');
let editTopText = document.getElementById('editTopText');
let editBottomText = document.getElementById('editBottomText');
// hay varios saltos de linea en esta lista de variables que no son necesarios, sacalos
let topCheck = document.getElementById('top-check');
let topCheck2 = document.getElementById('top-check-2');

let estilosTipografias = document.getElementById('estilosDeFuentes');

let sizetypo = document.getElementById('tamañoLetra');

let buttonAlignLeft = document.getElementById('izquierda');
let buttonAlignCenter = document.getElementById('centrar');
let buttonAlignRight = document.getElementById('derecha');

let colorType = document.getElementById('colorLetra');
let spanColorType = document.getElementById('textoColor');

let fondoColor = document.getElementById('fondoLabel');
let spanFondoColor = document.getElementById('colorLabelFondo');

let invisibleTextBack = document.getElementById('transparente');

let fontOutline = document.getElementById('outline');

let espaciadoValue = document.getElementById('espaciadoValue');

let interlineadoValor = document.getElementById('interlineadoValor');

const buttonClose = document.getElementById("buttonClose");
const botonCerrarTexto = document.getElementById('botonCerrarTexto');

const urlImg = document.getElementById('imgUrlInput');

const previewImagePanel = document.getElementById('previewImagePanel');

const colorImagen = document.getElementById('imgBackColorInput');
const colorImagenSpan = document.getElementById('colorImagenSpan');


const opcionesFondo = document.getElementById('opcionesFondo');

const brillo = document.getElementById('brightness');
const ajustesBrillo = document.getElementById('controlPanelSlider');
const opacidad = document.getElementById('opacity');
const contraste = document.getElementById('contrast');
const desenfoque = document.getElementById('blur');
const escalaColores = document.getElementById('grayscale');
const sepia = document.getElementById('sepia');
const hue = document.getElementById('hue');
const botonSaturado = document.getElementById('saturated');
const negativo = document.getElementById('negative');

const mainContainer = document.getElementById('mainContainer');
const botonImagenFiltros = document.getElementById('imageFiltersButton');
const contenedorFondos = document.getElementById('contenedorFondos');


/*FUNCIONES CUANDO SE CARGA LA PAGINA******************/

// deja el espaciado correcto: 
// window.onload = () => {
window.onload =()=>{
    mostrarAsideImg()
    cambioModoClaro()
};



/*****************FUNCIONES DE EVENTOS****************/

//FUNCION CAMBIO DE TEXTO SUPERIOR (topText)
editTopText.addEventListener('keyup', () => {
    topText.innerHTML = editTopText.value;
});

//FUNCION CAMBIO DE TEXTO INFERIOR (bottomText)
editBottomText.addEventListener('keyup', () => {
    bottomText.innerHTML = editBottomText.value;
});

//FUNCION TOP CHECK PANEL DE TEXTO
topCheck.addEventListener('click', () => {
    if (topCheck.checked) {
        topText.style.visibility = 'hidden';
    } else {
        topText.style.visibility = 'visible';
    }
});

topCheck2.addEventListener('click', () => {
    if (topCheck2.checked) {
        bottomText.style.visibility = 'hidden';
    } else {
        bottomText.style.visibility = 'visible';
    }
});

//ESTILOS TIPOGRAFÍA
estilosTipografias.addEventListener('change', () => {
    // innecesario el interpolado aca, no estas agregandole nada a estilosTipografias.value!
    topText.style.fontFamily = `${estilosTipografias.value}`
});

// inutil repetir la funcion, la orden 
// bottomText.style.fontFamily = `${estilosTipografias.value}`
// deberia estar en la funcion de arriba y listo
estilosTipografias.addEventListener('change', () => {
    bottomText.style.fontFamily = `${estilosTipografias.value}`
});

//TAMAÑO TIPOGRAFÍA
sizetypo.addEventListener('click', () => {
    topText.style.fontSize = `${sizetypo.value}px`
});

sizetypo.addEventListener('keyup', () => {
    topText.style.fontSize = `${sizetypo.value}px`
});

sizetypo.addEventListener('click', () => {
    bottomText.style.fontSize = `${sizetypo.value}px`
});

sizetypo.addEventListener('keyup', () => {
    bottomText.style.fontSize = `${sizetypo.value}px`
});

//ALINEACIÓN TEXTO
//Izquierda
buttonAlignLeft.addEventListener('click', (e) => {
    e.preventDefault();
    topText.style.textAlign = 'left';
    bottomText.style.textAlign = 'left';
});

//Centro
buttonAlignCenter.addEventListener('click', (e) => {
    e.preventDefault();
    topText.style.textAlign = 'center';
    bottomText.style.textAlign = 'center';
});

//Derecha
buttonAlignRight.addEventListener('click', (e) => {
    e.preventDefault();
    topText.style.textAlign = 'right';
    bottomText.style.textAlign = 'right';
});


//COLOR DE TIPOGRAFÍA
colorType.addEventListener('input', (e) => {
    const textoColor = e.target.value;
    topText.style.color = textoColor;
    bottomText.style.color = textoColor;
    spanColorType.innerHTML = textoColor.toUpperCase();
});

//COLOR DE FONDO DEL TEXTO
fondoColor.addEventListener('input', (e) => {
    const setBackgroundColour = e.target.value;
    topText.style.backgroundColor = setBackgroundColour;
    bottomText.style.backgroundColor = setBackgroundColour;
    spanFondoColor.innerHTML = setBackgroundColour.toUpperCase();
});

//FONDO TRANSPARENTE
function textoFondoInvisible() {
    if (!invisibleTextBack.checked) {
        const colorTextBack = fondoColor.value;
        fondoColor.innerText = colorTextBack.toUpperCase();
        topText.style.backgroundColor = colorTextBack;
        bottomText.style.backgroundColor = colorTextBack;
    } else {
        topText.style.backgroundColor = 'transparent';
        bottomText.style.backgroundColor = 'transparent';
    }
};

//CONTORNO FUENTE
// no uses function, usa funciones flecha
function contornoFuente(e, contorno) {
    e.preventDefault()
    switch (contorno) {
        case 'ninguno':
            topText.style.textShadow = 'none';
            bottomText.style.textShadow = 'none';
            break;
        case 'claro':
            topText.style.textShadow = '2px 2px #FFF,-2px -2px  #FFF, 2px 2px #FFF, -2px -2px #FFF, 2px 2px #FFF'
            bottomText.style.textShadow = '2px 2px #FFF, -2px -2px #FFF, 2px 2px #FFF, -2px -2px #FFF, 2px 2px #FFF'
            break;
        case 'oscuro':
            topText.style.textShadow = '2px 2px #000, -2px -2px #000,  2px 2px #000, -2px -2px #000, 2px 2px #000';
            bottomText.style.textShadow = '2px 2px #000, -2px -2px #000,  2px 2px #000, -2px -2px #000, 2px 2px #000';
            break;

    }

};

//ESPACIADO
const espaciadoTexto = () => {
    const valorEspaciado = espaciadoValue.value
    topText.style.padding = `${valorEspaciado}px 50px`;
    bottomText.style.padding = `${valorEspaciado}px 50px`;
}

//INTERLINEADO

const lineSpacing = () => {
    const interlineadoTexto = interlineadoValor.value
    topText.style.lineHeight = interlineadoTexto;
    bottomText.style.lineHeight = interlineadoTexto;
}

/***************ASIDE IMAGEN****************************/

//DE SECCION TEXTO A PANEL IMAGEN
// o declaras todas tus variables arriba de todo, o las pones inmediatamente 
// antes de la funcion que las va a usar, pero no mezcles estrategias
const asideImagen = document.getElementById('panelImg');
const textPanel = document.getElementById('textoSeccion');
let contenedorPrincipal = document.getElementById('contenedorPrincipal');

//MOSTRAR ASIDE IMAGEN
mostrarAsideImg();
// usa funciones flecha!!!!
function mostrarAsideImg() {
    textPanel.style.display = 'none';
    // display block, flex, inline, o none, pero no lo dejes vacio
    asideImagen.style.display = '';
    contenedorPrincipal.style.width = '80%';
};


//MOSTRAR ASIDE TEXTO

function mostrarTextPanel() {
    asideImagen.style.display = 'none';
    // display block, flex, inline, o none, pero no lo dejes vacio
    textPanel.style.display = '';
    contenedorPrincipal.style.width = '80%';
};





//BOTONES PARA CERRAR PANELES

//CERRAR PANEL IMAGEN
buttonClose.addEventListener("click", function () {
    let asides = document.getElementsByTagName('aside');
    for (let i = 0; i < asides.length; i++) {
        asides[i].style.display = "none";
        contenedorPrincipal.style.width = "100%";
    }
});


//CERRAR PANEL TEXTO

botonCerrarTexto.addEventListener("click", function () {
    let asides = document.getElementsByTagName('aside');
    for (let i = 0; i < asides.length; i++) {
        asides[i].style.display = "none";
        contenedorPrincipal.style.width = "100%";
    }
});


//INPUT URL DE IMAGEN

urlImg.addEventListener('keyup', (e) => {
    const src = urlImg.value;
    previewImagePanel.style.backgroundImage = `url('${src}')`;
    previewImagePanel.style.backgroundPosition = 'center';
    previewImagePanel.style.backgroundRepeat = 'no-repeat';
    previewImagePanel.style.backgroundSize = 'cover';
});


//COLOR DE FONDO DE LA IMAGEN

colorImagen.addEventListener('input', cambioColorDeImagen);

function cambioColorDeImagen() {
    const backgroundColor = colorImagen.value;
    previewImagePanel.style.backgroundColor = backgroundColor;
    colorImagenSpan.innerHTML = backgroundColor.toUpperCase();
}


//FONDOS DE IMAGENES

const actualizarColorMezcla = (evento) => {
    colorImagenSpan.innerText = evento.target.value.toUpperCase()
    previewImagePanel.style.backgroundColor = evento.target.value
};

const actualizarTipoMezcla = (evento) => {
    previewImagePanel.style.backgroundBlendMode = evento.target.value
};

colorImagenSpan.addEventListener('input', actualizarColorMezcla)
opcionesFondo.addEventListener('change', actualizarTipoMezcla)


//Cambiar valores del brillo

brillo.addEventListener('change', () => {
    //const valorBrillo = brillo.value;
    //previewImagePanel.style.filter = `brightness(${valorBrillo})`
    setearFiltros();
})

/***************************************************/
//FILTRO OPACIDAD

opacidad.addEventListener('change', () => {
    // const valorOpacidad = opacidad.value;
    // previewImagePanel.style.filter = `opacity(${valorOpacidad})`
    setearFiltros();
})

/***************************************************/

//FILTRO DESENFOQUE

desenfoque.addEventListener('change', () => {
    // const valorDesenfoque = desenfoque.value;
    // previewImagePanel.style.filter += `blur(${valorDesenfoque}px)`
    setearFiltros();
})


/***************************************************/
//FILTRO CONTRASTE

contraste.addEventListener('change', () => {
    // const valorContraste = contraste.value;
    // previewImagePanel.style.filter = `contrast(${valorContraste}%)`
    setearFiltros();
})
/***************************************************/

//FILTRO ESCALA DE GRISES

escalaColores.addEventListener('change', () => {
    // const valorEscalaColores= escalaColores.value;
    // previewImagePanel.style.filter = `grayscale(${valorEscalaColores}%)`
    setearFiltros();
})

/***************************************************/

//FILTRO SEPIA

sepia.addEventListener('change', () => {
    // const valorSepia= sepia.value;
    // previewImagePanel.style.filter = `sepia(${valorSepia}%)`
    setearFiltros();
})

/***************************************************/

//FILTRO HUE

hue.addEventListener('change', () => {
    // const valorHue= hue.value;
    // previewImagePanel.style.filter = `hue-rotate(${valorHue}deg)`
    setearFiltros();
})

/***************************************************/

//FILTRO SATURACION

botonSaturado.addEventListener('change', () => {
    // const valorBotonSaturado= botonSaturado.value;
    // previewImagePanel.style.filter = `saturate(${valorBotonSaturado}%)`
    setearFiltros();
})

/***************************************************/

//FILTRO NEGATIVO

negativo.addEventListener('change', () => {
    // const valorNegativo= negativo.value;
    // previewImagePanel.style.filter = `invert(${valorNegativo})`
    setearFiltros();
})


//BOTON REESTRABLECER FILTROS

botonImagenFiltros.addEventListener('click', restablecerFiltros);

function restablecerFiltros() {
    brillo.value = 1
    opacidad.value = 1
    desenfoque.value = 0
    contraste.value = 100
    escalaColores.value = 0
    sepia.value = 0
    hue.value = 0
    botonSaturado.value = 100
    negativo.value = 0

    cambioColorDeImagen();
    setearFiltros();
}

function setearFiltros() {
    previewImagePanel.style.filter = `brightness(${brillo.value}) opacity(${opacidad.value}) blur(${desenfoque.value}px) contrast(${contraste.value}%) grayscale(${escalaColores.value}%) hue-rotate(${hue.value}deg) sepia(${sepia.value}%) saturate(${botonSaturado.value}%) invert(${negativo.value})`;
}



//DESCARGAR IMAGEN (BOTON)

const descargarMeme = () => {
    domtoimage.toBlob(mainContainer).then(function (blob) {
        saveAs(blob, 'mi-meme.png')
    })
};














/************CAMBIO A DARK/LIGHT MODE************/


function cambioModoOscuro() {
    document.body.classList.remove('cambiarModoClaro');
    document.body.classList.add('cambiarModoOscuro');
};

function cambioModoClaro() {
    document.body.classList.remove('cambiarModoOscuro');
    document.body.classList.add('cambiarModoClaro');
};
