export default class Elementos {
    constructor(){
        this.contenedor = document.createElement('section')
    }

    crearElemento(el, { elemento = '', atributos = [{ clave: '', valor: '' }], contenido = '' }){
        const elemen = document.createElement(elemento)
        atributos.map(e => {
            const atributo = document.createAttribute(e.clave)
            atributo.value = e.valor
            elemen.setAttribute(atributo)
        })
        // const texto = document.createTextNode(contenido)
        elemen.textContent = contenido
        el.appendChild(elemen)
    }

    static agregarTareas(lista = [{ contenido: '' }]){
        const elemento = new Elementos()
        lista.map(e => elemento.crearElemento(elemento.contenedor, { elemento: 'div', atributos: [], contenido: e.contenido }))
        return elemento.contenedor
    }
}