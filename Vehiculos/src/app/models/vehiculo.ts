export class Vehiculo{
    constructor(
        private matricula:string,
        private marca:string,
        private modelo:string,
        private unidades:number,
        private precio:number,
    ){
    }

    getMatricula(){
        return this.matricula
    }
    getMarca(){
        return this.marca
    }
    getModelo(){
        return this.modelo
    }
    getUnidades(){  
        return this.unidades
    }
    getPrecio(){
        return this.precio
    }

    

    setMatricula(matricula:string,){
        this.matricula=matricula
    }
    setMarca(marca:string){
        this.marca=marca
    }
    setModelo(modelo:string){
         this.modelo=modelo
    }
    setUnidades(unidades:number){  
         this.unidades=unidades
    }
    setPrecio(precio:number){
         this.precio=precio
    }
}