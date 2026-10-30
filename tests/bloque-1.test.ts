import { describe, it, expect } from "vitest";
import { Producto } from "../src/bloque-1/producto";
import { Catalogo } from "../src/bloque-1/catalogo";

describe("Ejercicio 1", () => {
    describe("Filtrar productos", () => {
        it("Funciona con una lista de productos normales y con los 3 filtros a la vez", () => {
            const catalogo = new Catalogo();
            catalogo.productosBase();
            const obtenido = catalogo.filtrarProductos("Informática", 80, 1);
            const expected: Array<Producto> = [];
            expected.push(new Producto(1, "Ratón", "Informática", 55, 4, 5));
            expected.push(new Producto(9, "Teclado", "Informática", 65, 2, 1));
            expect(obtenido).toStrictEqual(expected);
        });
        it("Funciona con una lista de productos normales y con 2 filtros a la vez", () => {
            const catalogo = new Catalogo();
            catalogo.productosBase();
            const obtenido = catalogo.filtrarProductos("Informática", undefined, 1);
            const expected: Array<Producto> = [];
            expected.push(new Producto(1, "Ratón", "Informática", 55, 4, 5));
            expected.push(new Producto(2, "Monitor", "Informática", 140, 7, 3));
            expected.push(new Producto(9, "Teclado", "Informática", 65, 2, 1));
            expect(obtenido).toStrictEqual(expected);
        });
        it("Funciona con una lista de productos normales y con 1 filtro a la vez", () => {
            const catalogo = new Catalogo();
            catalogo.productosBase();
            const obtenido = catalogo.filtrarProductos(undefined, undefined, 1);
            const expected: Array<Producto> = [];
            expected.push(new Producto(1, "Ratón", "Informática", 55, 4, 5));
            expected.push(new Producto(2, "Monitor", "Informática", 140, 7, 3));
            expected.push(new Producto(3, "Paraguas", "Utensilios", 12, 15, 4));
            expected.push(new Producto(4, "Diadema", "Bisutería", 200, 3, 2));
            expected.push(new Producto(5, "Anillo", "Bisutería", 70, 2, 5));
            expected.push(new Producto(7, "Pendiente", "Bisutería", 91, 1, 4));
            expected.push(new Producto(8, "Pasador de pelo", "Bisutería", 300, 4, 5));
            expected.push(new Producto(9, "Teclado", "Informática", 65, 2, 1));
            expect(obtenido).toStrictEqual(expected);
        });
        it("Funciona con una lista de productos normales y con ningún filtro", () => {
            const catalogo = new Catalogo();
            catalogo.productosBase();
            const obtenido = catalogo.filtrarProductos();
            const expected: Array<Producto> = [];
            expected.push(new Producto(1, "Ratón", "Informática", 55, 4, 5));
            expected.push(new Producto(2, "Monitor", "Informática", 140, 7, 3));
            expected.push(new Producto(3, "Paraguas", "Utensilios", 12, 15, 4));
            expected.push(new Producto(4, "Diadema", "Bisutería", 200, 3, 2));
            expected.push(new Producto(5, "Anillo", "Bisutería", 70, 2, 5));
            expected.push(new Producto(6, "Collar", "Bisutería", 31, 0, 5));
            expected.push(new Producto(7, "Pendiente", "Bisutería", 91, 1, 4));
            expected.push(new Producto(8, "Pasador de pelo", "Bisutería", 300, 4, 5));
            expected.push(new Producto(9, "Teclado", "Informática", 65, 2, 1));
            expect(obtenido).toStrictEqual(expected);
        });
        it("Funciona con una lista de productos normales y con algún filtro que ninguno cumpla", () => {
            const catalogo = new Catalogo();
            catalogo.productosBase();
            const obtenido = catalogo.filtrarProductos(undefined, 5, undefined);
            const expected: Array<Producto> = [];
            expect(obtenido).toStrictEqual(expected);
        });
        it("Funciona con una lista de productos vacía", () => {
            const catalogo = new Catalogo();
            const obtenido = catalogo.filtrarProductos(undefined, 5, undefined);
            const expected: Array<Producto> = [];
            expect(obtenido).toStrictEqual(expected);
        });
    });
    describe("Filtrar productos", () => {
        it("Funciona con una lista normal de productos", () => {
            const catalogo = new Catalogo();
            catalogo.productosBase();
            const obtenido = catalogo.obtenerNombres();
            const expected = ["Ratón", "Monitor", "Paraguas", "Diadema", "Anillo", "Collar", "Pendiente", "Pasador de pelo", "Teclado"];
            expect(obtenido).toStrictEqual(expected);
        });
        it("Funciona con una lista vacía de productos", () => {
            const catalogo = new Catalogo();
            const obtenido = catalogo.obtenerNombres();
            const expected: Array<string> = [];
            expect(obtenido).toStrictEqual(expected);
        });
    });
});