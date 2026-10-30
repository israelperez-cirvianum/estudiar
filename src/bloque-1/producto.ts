export class Producto{
    #a_id: number;
    #a_nombre: string;
    #a_categoria: string;
    #a_precio: number;
    #a_stock: number;
    #a_valoracion: number;

    constructor(id: number, nombre: string, categoria: string, precio: number, stock: number, valoracion: number){
        this.#a_id = id;
        this.#a_nombre = nombre;
        this.#a_categoria = categoria;
        this.#a_precio = precio;
        this.#a_stock = stock;
        this.#a_valoracion = valoracion;
    }

    contieneEstosMinimos(categoria?: string, precioMax?: number, stockMin?: number): boolean{
        let valido = true;
        if(categoria !== undefined){
            valido = categoria === this.#a_categoria;
        }
        if(valido){
            if(precioMax !== undefined){
                valido = precioMax >= this.#a_precio;
            }
        }
        if(valido){
            if(stockMin !== undefined){
                valido = stockMin <= this.#a_stock;
            }
        }
        return valido;
    }

    agotado(): boolean {
        return this.#a_stock === 0;
    }

    getNombre(): string{
        return this.#a_nombre;
    }
}