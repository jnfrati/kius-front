export default class Cola{
    nombre:String = ""
    direccion: String = ""
    diasAtencion: [
        Dia
    ] = [new Dia]
};

class Dia{
    nombre: String = ""
    valor: boolean = false
}