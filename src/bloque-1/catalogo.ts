import { Producto } from "./producto";

export class Catalogo{
    #a_productos: Array<Producto> = [];

    productosBase(){
        this.#a_productos.push(new Producto(1, "Ratón", "Informática", 55, 4, 5));
        this.#a_productos.push(new Producto(2, "Monitor", "Informática", 140, 7, 3));
        this.#a_productos.push(new Producto(3, "Paraguas", "Utensilios", 12, 15, 4));
        this.#a_productos.push(new Producto(4, "Diadema", "Bisutería", 200, 3, 2));
        this.#a_productos.push(new Producto(5, "Anillo", "Bisutería", 70, 2, 5));
        this.#a_productos.push(new Producto(6, "Collar", "Bisutería", 31, 0, 5));
        this.#a_productos.push(new Producto(7, "Pendiente", "Bisutería", 91, 1, 4));
        this.#a_productos.push(new Producto(8, "Pasador de pelo", "Bisutería", 300, 4, 5));
        this.#a_productos.push(new Producto(9, "Teclado", "Informática", 65, 2, 1));
    }

    filtrarProductos(categoria?: string, precioMaximo?: number, stockMinimo?: number): Array<Producto>{
        const resultado = this.#a_productos.filter((producto) => {
            return producto.contieneEstosMinimos(categoria, precioMaximo, stockMinimo);
        });
        return resultado;
    }

    obtenerNombres(): Array<string> {
        return this.#a_productos.map((producto) => producto.getNombre());
    }

    obtenerProductosAgotados(): Array<Producto>{
        return this.#a_productos.filter((producto) => {
            return producto.agotado();
        });
    }
}