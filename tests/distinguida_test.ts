import {Distinguida} from "../distinguida"

describe("funcion distinguida", () => {
    it("no es distinguida", () => {
        let resEsperado = [0,0,0]
        let d = new Distinguida()
        let resObtenido = d.distinguida("EJEMPLO")

        expect(resEsperado).toEqual(resObtenido)
    })

    it("es palindroma", () => {
        let resEsperado = [1,0,0]
        let d = new Distinguida()
        let resObtenido = d.distinguida("RECONOCER")

        expect(resEsperado).toEqual(resObtenido)
    })

    it("es i-palindroma", () => {
        let resEsperado = [0,1,0]
        let d = new Distinguida()
        let resObtenido = d.distinguida("CASA")

        expect(resEsperado).toEqual(resObtenido)
    })

    it("es d-palindroma", () => {
        let resEsperado = [0,0,1]
        let d = new Distinguida()
        let resObtenido = d.distinguida("AMAD")

        expect(resEsperado).toEqual(resObtenido)
    })

    it("es i-palindroma y d-palindroma", () => {
        let resEsperado = [0,1,1]
        let d = new Distinguida()
        let resObtenido = d.distinguida("CASA")

        expect(resEsperado).toEqual(resObtenido)
    })

    it("no es distinguida y tiene 2 letras", () => {
        let resEsperado = [0,0,0]
        let d = new Distinguida()
        let resObtenido = d.distinguida("LE")

        expect(resEsperado).toEqual(resObtenido)
    })    
})