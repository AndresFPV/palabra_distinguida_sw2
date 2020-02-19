export class Distinguida
{
    //por el principio DRY, modularización
    esDistinguida(palabra : string, inicio : number, fin : number, flag : number) : boolean
    {
        let palabraVolteada : string = ""
        let palabraCorrecta = ""
        for (let i=inicio; i >= fin; i--)
        {
            if (flag == 2)
            {
                //caso d-palindroma
                palabraCorrecta += palabra[palabra.length - i - 2]
            }else if (flag == 1){
                //i-palidroma
                palabraCorrecta += palabra[palabra.length - i - 2]
            }else
            {
                //palindroma
                palabraCorrecta += palabra[palabra.length - i - 1]
            }

            palabraVolteada += palabra[i]
        }
        console.log()
        console.log(palabraVolteada)
        return palabraVolteada == palabra
    }
    
    distinguida(palabra : string) : number[]
    {
        let arrRespuesta = [0,0,0]
        
        //palindroma
        if (this.esDistinguida(palabra, palabra.length-1, 0,0))
        {
            arrRespuesta[0] = 1
        }

        //i-palindroma
        if (this.esDistinguida(palabra, palabra.length-1, 1,1))
        {
            arrRespuesta[1] = 1
        }

        //d-palindroma
        if (this.esDistinguida(palabra, palabra.length-2, 0,2))
        {
            arrRespuesta[2] = 1
        }

        return arrRespuesta
    }

}

let main = () =>
    {
        let distinguida = new Distinguida()
        let res = distinguida.distinguida("")
        console.log(res)
    }

main()