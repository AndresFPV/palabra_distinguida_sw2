class Distingida
{
    esDistinguida(palabra : string, inicio : number, fin : number) : boolean
    {
        let palabraVolteada = ""
        for (let i=inicio; i>= fin; i--)
        {
            palabraVolteada += palabra[i]
        }
        return palabraVolteada == palabra
    }
    
    distinguida(palabra : string) : number[]
    {
        let arrRespuesta = [0,0,0]
        let palabraVolteada : string = ""
        for (let i=palabra.length-1; i>= 0; i--)
        {
            palabraVolteada += palabra[i]
        }

        //si la palabra es palindroma
        if (palabraVolteada == palabraVolteada)
        {
            arrRespuesta[0] = 1
        }


        palabraVolteada = ""
        for (let i=palabra.length-1; i>= 1; i--)
        {
            palabraVolteada += palabra[i]
        }

        //si la palabra es i-palindroma
        if (palabraVolteada == palabraVolteada)
        {
            arrRespuesta[1] = 1
        }

        palabraVolteada = ""
        for (let i=palabra.length-1; i>= 1; i--)
        {
            palabraVolteada += palabra[i]
        }

        //si la palabra es i-palindroma
        if (palabraVolteada == palabraVolteada)
        {
            arrRespuesta[2] = 1
        }

        return arrRespuesta
    }
}