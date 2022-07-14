export var casoGlobal = {};

export const setCasoGlobal = (caso) => {
    console.log(caso)
    casoGlobal = caso
}

export function getCasoGlobal() {
    return casoGlobal;
}
