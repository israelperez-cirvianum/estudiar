# 30 ejercicios avanzados de TypeScript y POO

## Bloque 1. Colecciones, filtros y transformaciones

### Ejercicio 1. Catálogo avanzado de productos

Crea una clase `Catalogo` que gestione productos con las propiedades `id`, `nombre`, `categoria`, `precio`, `stock` y `valoracion`.

Implementa los siguientes métodos:

- `filtrarProductos(categoria?, precioMaximo?, stockMinimo?)`: combina todos los filtros recibidos, aplicando únicamente los que estén definidos.
- `obtenerNombres()`: devuelve un array con los nombres mediante `map`.
- `obtenerProductosAgotados()`: devuelve los productos con stock igual a cero.
- `obtenerEtiquetas()`: genera cadenas con el formato `"Teclado - 29.90 €"`.
- `buscarPorId(id)`: devuelve el producto o `null`.

**Condiciones:** no puedes modificar el array interno desde fuera. Si no se encuentra un producto, devuelve `null`.

### Ejercicio 2. Estadísticas de inventario

Amplía el catálogo del ejercicio anterior.

Implementa:

- `calcularValorInventario()`: suma `precio * stock` de todos los productos mediante `reduce`.
- `obtenerPrecioMedio()`: calcula el precio medio de los productos disponibles.
- `obtenerCategorias()`: devuelve las categorías sin duplicados.
- `contarPorCategoria()`: devuelve un objeto con cada categoría y su número de productos.
- `obtenerProductosCaros(limite)`: devuelve los productos cuyo precio supera el límite.

**Condiciones:** gestiona correctamente los arrays vacíos y no devuelvas `NaN`.

### Ejercicio 3. Ranking de productos

Crea `RankingProductos`, que reciba un conjunto de productos con nombre, precio, valoraciones y unidades vendidas.

Implementa:

- `obtenerRanking()`: ordena por unidades vendidas descendentes.
- Si hay empate, ordena por valoración media descendente.
- Si persiste el empate, ordena por nombre alfabéticamente.
- `obtenerTop(n)`: devuelve los primeros `n` productos.
- `obtenerProductosPopulares()`: selecciona los que tengan una valoración media mínima de 4 y más de 100 ventas.
- `obtenerEstadisticas()`: calcula la valoración media general, el total vendido y el número de productos.

**Condiciones:** no alteres el array original. Los empates deben resolverse siempre de la misma manera.

### Ejercicio 4. Gestión de alumnos y notas

Define `Alumno` con identificador, nombre y un array privado de notas. Define también `GrupoClase`, que almacene alumnos.

Implementa:

- `añadirNota(nota)`: solo admite notas entre 0 y 10.
- `calcularMedia()`: utiliza `reduce`.
- `obtenerAlumnosAprobados()`: alumnos con media igual o superior a 5.
- `obtenerResumenes()`: devuelve objetos `{ nombre, media, aprobado }` utilizando `map`.
- `obtenerMejoresAlumnos(n)`: ordena por media descendente y después por nombre.
- `obtenerEstadisticas()`: calcula media del grupo, porcentaje de aprobados y nota máxima.

**Condiciones:** un alumno sin notas no debe generar `NaN`. No expongas el array privado de notas.

### Ejercicio 5. Gestor de tareas con prioridades

Crea `GestorTareas` para administrar tareas con `id`, `titulo`, `prioridad`, `fechaLimite` y `completada`.

Implementa:

- `añadirTarea()`, `completarTarea(id)` y `eliminarTarea(id)`.
- `obtenerPendientes()`: usa `filter`.
- `obtenerTareasUrgentes()`: tareas pendientes con prioridad alta y fecha límite próxima.
- `obtenerSiguienteTarea()`: usa `find` para encontrar la primera tarea que cumpla un criterio de urgencia.
- `todasCompletadas()`: usa `every`.
- `hayTareasVencidas()`: usa `some`.
- `obtenerResumenPorEstado()`: cuenta las tareas completadas y pendientes.

**Condiciones:** los identificadores deben ser únicos. Las operaciones inválidas no deben modificar el estado.

## Bloque 2. Reduce, agrupaciones y ordenaciones complejas

### Ejercicio 6. Registro de ventas por categoría

Define el tipo `Venta` con `id`, `producto`, `categoria`, `cantidad`, `precioUnitario` y `fecha`.

Crea una clase `RegistroVentas` con estos métodos:

- `obtenerIngresosTotales()`: calcula todos los ingresos mediante `reduce`.
- `agruparPorCategoria()`: devuelve por categoría el importe total, el número de ventas y las unidades vendidas.
- `obtenerVentasPorPeriodo(inicio, fin)`: filtra las ventas dentro de un intervalo.
- `obtenerProductosMasVendidos(n)`: agrupa las unidades por producto y devuelve los primeros `n`.
- `obtenerDiasConVentas()`: devuelve las fechas sin duplicados.
- `obtenerMediaPorVenta()`: calcula el importe medio de las ventas.

**Condiciones:** evita modificar los datos originales y define explícitamente los tipos de los resultados agrupados.

### Ejercicio 7. Procesamiento de pedidos

Define `Producto`, `LineaPedido` y `Pedido`. Cada línea contiene un producto y una cantidad.

Crea una clase `GestorPedidos` que permita:

- Calcular el total de cada pedido con `reduce`.
- Obtener pedidos pendientes de pago mediante `filter`.
- Obtener los nombres de los productos de un pedido con `map`.
- Encontrar pedidos que contengan un producto determinado con `some`.
- Comprobar si todos los productos de un pedido tienen stock suficiente con `every`.
- Calcular los ingresos de todos los pedidos pagados.
- Ordenar pedidos por importe descendente y fecha ascendente en caso de empate.

**Condiciones:** el importe de un pedido debe calcularse a partir de sus líneas actuales. No almacenes un total que pueda quedar desactualizado.

### Ejercicio 8. Informe de inventario

Crea una clase `InformeInventario` que reciba productos con categoría, precio, stock y stock mínimo.

Implementa un método `generarInforme()` que produzca:

1. Los productos que necesitan reposición, ordenados por urgencia.
2. El valor total del inventario.
3. El valor del inventario agrupado por categoría.
4. Los cinco productos más caros que tengan stock.
5. El porcentaje de productos agotados.
6. Un resumen con número de categorías, productos y unidades.

**Condiciones:** utiliza `filter`, `map`, `sort` y `reduce`. Cada resultado debe tener un tipo explícito. Generar el informe no puede alterar el catálogo.

### Ejercicio 9. Historial de transacciones

Define una clase `Transaccion` con identificador, importe, fecha y tipo (`ingreso` o `gasto`).

Crea `CarteraDigital` con un historial privado de transacciones.

Implementa:

- `registrarIngreso(importe)` y `registrarGasto(importe)`.
- `calcularSaldo()`: suma ingresos y resta gastos con `reduce`.
- `obtenerGastos()`: filtra los gastos.
- `obtenerTransaccionesRecientes(n)`: devuelve las últimas `n` transacciones.
- `agruparPorMes()`: calcula ingresos, gastos y balance por mes.
- `obtenerMayorGasto()`: devuelve el gasto de mayor importe o `null`.
- `obtenerMediaDeGastos()`: calcula el gasto medio.

**Condiciones:** rechaza importes no positivos. No permitas que un gasto deje el saldo negativo. Una operación fallida no puede registrar una transacción.

### Ejercicio 10. Clasificación de películas

Define `Pelicula` con título, director, año, géneros y valoraciones.

Implementa `Videoteca` con los siguientes métodos:

- `buscarPorTitulo(texto)`: búsqueda parcial sin distinguir mayúsculas y minúsculas.
- `filtrarPorGeneros(generos)`: películas que contengan al menos uno de los géneros solicitados.
- `obtenerPeliculasDeTodosLosGeneros(generos)`: películas que contengan todos los géneros indicados.
- `obtenerMediaValoraciones()`: calcula la media de las valoraciones de cada película.
- `obtenerRanking()`: ordena por valoración media descendente y título ascendente.
- `obtenerDirectores()`: obtiene directores únicos.
- `obtenerEstadisticasPorGenero()`: calcula cuántas películas hay por género y su valoración media.

**Condiciones:** una película sin valoraciones tiene una media de cero. No modifiques los arrays recibidos.

## Bloque 3. Encapsulación, getters y setters

### Ejercicio 11. Cesta de compra protegida

Crea `CestaCompra`, que mantenga un array privado de líneas de compra. Cada línea tiene identificador de producto, nombre, precio y cantidad.

Implementa:

- `añadirProducto(producto, cantidad)`: añade una línea o incrementa la cantidad existente.
- `eliminarProducto(id)`.
- `cambiarCantidad(id, cantidad)`.
- Getter `total`: calcula el importe mediante `reduce`.
- Getter `numeroDeProductos`: cuenta las unidades, no las líneas.
- `obtenerProductos()`: devuelve una copia defensiva.
- `obtenerResumen()`: devuelve nombres, subtotales e importe total.

**Condiciones:** no permitas precios negativos ni cantidades no enteras o inferiores a uno. Las modificaciones deben mantener la integridad de la cesta.

### Ejercicio 12. Sistema de descuentos

Crea una clase `Producto` con precio privado y una clase `CalculadoraDescuentos`.

La calculadora debe recibir una colección de productos y permitir:

- Aplicar un descuento porcentual sin cambiar el precio original.
- Obtener el precio final de cada producto mediante `map`.
- Filtrar productos cuyo precio final sea inferior a un límite.
- Calcular el ahorro total mediante `reduce`.
- Encontrar el producto que más dinero ahorra.
- Obtener los productos ordenados por ahorro descendente.

**Condiciones:** el descuento debe estar entre 0 y 100. No se puede modificar directamente el precio privado. Los cálculos deben usar el precio original.

### Ejercicio 13. Capacidad de un almacén

Crea `Almacen` con capacidad máxima fija y un array privado de productos almacenados.

Cada producto tiene identificador, nombre, volumen unitario y cantidad.

Implementa:

- `añadirProducto()`, `retirarProducto()` y `cambiarCantidad()`.
- Getter `volumenOcupado`: calcula el volumen total con `reduce`.
- Getter `espacioDisponible`.
- `obtenerProductosPorVolumen(minimo, maximo)`.
- `obtenerProductosOrdenadosPorCantidad()`.
- `obtenerProductosQueNoCaben()`: identifica los productos que no pueden añadirse con el espacio actual.
- `obtenerPorcentajeOcupado()`.

**Condiciones:** ninguna operación puede superar la capacidad ni generar cantidades negativas. Comprueba la capacidad antes de modificar el estado.

### Ejercicio 14. Cuenta bancaria con historial

Crea `CuentaBancaria` con titular, saldo privado e historial privado de movimientos.

Implementa:

- Ingresos y retiradas validados.
- Getter `saldo`, calculado a partir de un saldo inicial y los movimientos.
- `obtenerMovimientosPorTipo(tipo)`.
- `obtenerBalancePorMes()`.
- `obtenerMayorRetirada()`.
- `obtenerSaldoEnFecha(fecha)`.
- `obtenerResumen()`, con saldo, total de ingresos, total de retiradas y número de movimientos.

**Condiciones:** no se permiten retiradas superiores al saldo disponible. El historial no debe ser modificable desde fuera. Define qué sucede cuando una operación falla.

### Ejercicio 15. Gestión de usuarios y permisos

Define `Usuario` con identificador, nombre de usuario, correo, rol y estado activo. Crea `GestorUsuarios` con una colección privada.

Implementa:

- Crear usuarios, rechazando identificadores, nombres de usuario y correos duplicados.
- Buscar por identificador y por nombre de usuario.
- Filtrar usuarios por rol y estado.
- Obtener nombres de usuario normalizados y sin duplicados.
- Comprobar si todos los administradores están activos con `every`.
- Comprobar si existe algún usuario inactivo con `some`.
- Agrupar usuarios por rol mediante `reduce`.
- Obtener un resumen de usuarios activos e inactivos.

**Condiciones:** los nombres de usuario deben normalizarse eliminando espacios exteriores y convirtiéndose a minúsculas. No devuelvas referencias que permitan modificar la colección interna.

## Bloque 4. Composición y relaciones entre clases

### Ejercicio 16. Biblioteca y préstamos

Crea las clases `Libro`, `Usuario`, `Prestamo` y `Biblioteca`.

Cada préstamo tiene identificador, libro, usuario, fecha de inicio, fecha de devolución prevista y estado.

Implementa:

- Prestar y devolver libros.
- Impedir préstamos de libros ya prestados.
- Limitar los préstamos activos por usuario.
- Obtener los libros disponibles.
- Obtener los préstamos vencidos.
- Calcular el número de préstamos activos por usuario.
- Obtener los usuarios que tienen más de un préstamo vencido.
- Generar estadísticas de préstamos por mes.

**Condiciones:** los libros deben tener un estado coherente con los préstamos activos. Utiliza `filter`, `map`, `some`, `every` y `reduce` donde corresponda.

### Ejercicio 17. Cursos y matrículas

Crea `Curso`, `Alumno` y `Matricula`.

Un curso tiene un número máximo de plazas y un alumno puede matricularse en varios cursos.

Implementa:

- Matricular alumnos sin duplicar matrículas.
- Cancelar matrículas.
- Obtener cursos disponibles.
- Obtener alumnos matriculados en un curso.
- Calcular la ocupación porcentual de cada curso.
- Encontrar cursos completos con `filter`.
- Comprobar si un alumno está matriculado en todos los cursos obligatorios.
- Obtener el curso con más matrículas.
- Generar un informe con cursos, plazas ocupadas y plazas libres.

**Condiciones:** no se puede superar la capacidad. Gestiona correctamente los cursos sin matrículas y los alumnos sin cursos.

### Ejercicio 18. Gestión de reservas de hotel

Crea `Habitacion`, `Cliente`, `Reserva` y `Hotel`.

Cada reserva tiene fecha de entrada, fecha de salida y precio por noche.

Implementa:

- Crear y cancelar reservas.
- Buscar habitaciones disponibles para un intervalo.
- Detectar solapamientos entre reservas.
- Calcular el precio total de una reserva.
- Obtener las reservas de un cliente.
- Calcular los ingresos por habitación.
- Ordenar habitaciones por ingresos descendentes.
- Obtener clientes que hayan realizado más de tres reservas.
- Calcular el porcentaje de ocupación del hotel en un periodo.

**Condiciones:** la fecha de salida debe ser posterior a la entrada. Una reserva que termina el mismo día que comienza otra no se considera solapada si las fechas son de salida y entrada, respectivamente.

### Ejercicio 19. Departamento y trabajadores

Crea las clases `Trabajador` y `Departamento`.

Cada trabajador tiene identificador, nombre, apellidos, salario y departamento.

Implementa:

- Añadir y eliminar trabajadores.
- Calcular el gasto salarial mediante `reduce`.
- Encontrar al trabajador con mayor salario.
- Obtener la media salarial por departamento.
- Ordenar trabajadores por apellidos y nombre.
- Agrupar trabajadores por departamento.
- Filtrar salarios superiores a la media de su departamento.
- Obtener los tres departamentos con mayor gasto salarial.

**Condiciones:** no se permiten salarios negativos ni identificadores duplicados. Las ordenaciones no deben modificar las colecciones internas.

### Ejercicio 20. Sistema de notificaciones polimórficas

Define una clase abstracta `Notificacion` y las clases `NotificacionEmail`, `NotificacionSMS` y `NotificacionInterna`.

Cada notificación tiene identificador, destinatario, fecha de creación y estado (`pendiente`, `enviada` o `fallida`).

Crea `GestorNotificaciones` con una cola privada.

Implementa:

- Añadir notificaciones.
- Procesar las pendientes utilizando polimorfismo.
- Obtener notificaciones por estado y tipo.
- Contar notificaciones enviadas y fallidas.
- Calcular el porcentaje de éxito.
- Obtener destinatarios únicos.
- Agrupar notificaciones por tipo.
- Encontrar destinatarios con más de tres notificaciones fallidas.
- Obtener un resumen ordenado por número de fallos.

**Condiciones:** simula el envío sin servicios externos. No necesitas comprobar el tipo concreto mediante `instanceof` para llamar al método `enviar()`.

## Bloque 5. Herencia, genéricos y TypeScript avanzado

### Ejercicio 21. Sistema de pagos

Define una interfaz `MetodoPago` con un método `pagar(importe)`. Implementa `PagoTarjeta`, `PagoCarteraDigital` y `PagoTransferencia`.

Crea `ProcesadorPagos`, que gestione una colección de pagos.

Implementa:

- Procesar pagos mediante polimorfismo.
- Filtrar pagos por estado.
- Calcular el total pagado y el total fallido.
- Obtener el método de pago más utilizado.
- Agrupar pagos por método.
- Obtener el importe medio de los pagos exitosos.
- Ordenar los pagos por importe y fecha.
- Generar un informe con porcentaje de éxito por método.

**Condiciones:** los importes deben ser positivos. Si un pago falla, no debe contabilizarse como exitoso.

### Ejercicio 22. Figuras geométricas

Define una clase abstracta `Figura` con el método `calcularArea()`. Implementa `Circulo`, `Rectangulo` y `Triangulo`.

Crea `ColeccionFiguras` para administrar figuras de diferentes tipos.

Implementa:

- Obtener todas las áreas mediante `map`.
- Filtrar figuras cuya área supere un límite.
- Calcular el área total con `reduce`.
- Encontrar la figura con mayor área.
- Ordenar las figuras por área descendente.
- Agrupar figuras por tipo.
- Calcular el área media por tipo.
- Comprobar si todas las figuras tienen un área positiva.

**Condiciones:** utiliza polimorfismo sin comprobar el tipo concreto para calcular el área. Valida las dimensiones en los constructores.

### Ejercicio 23. Repositorio genérico

Crea una clase genérica `Repositorio<T>` con los métodos:

- `añadir(elemento)`.
- `obtenerTodos()`.
- `buscar(predicado)`.
- `filtrar(predicado)`.
- `eliminar(predicado)`.
- `transformar<R>(funcion)`: transforma los elementos en otro tipo.
- `ordenar(comparador)`: devuelve una copia ordenada.

Crea también una interfaz `Identificable` con `id` y una clase `RepositorioIdentificable<T extends Identificable>` que permita buscar por identificador y rechazar duplicados.

**Condiciones:** no uses `any`. No asumas que todo tipo genérico contiene `id`. Evita exponer el array interno y permite que `transformar` devuelva un tipo distinto de `T`.

### Ejercicio 24. Importador de datos desconocidos

Crea `ImportadorProductos`, que reciba datos de tipo `unknown` simulando una respuesta de una API.

Cada producto debe tener `id`, `nombre`, `precio`, `stock` y `categoria`.

Implementa:

- Validación de la estructura de entrada.
- Validación de tipos y rangos numéricos.
- Detección de identificadores duplicados.
- Conversión de datos válidos en instancias de `Producto`.
- Un informe de errores por índice y campo.
- Filtrado de registros válidos.
- Recuento de errores por tipo.
- Un resumen con productos importados, rechazados y valor del inventario importado.

**Condiciones:** no utilices `as Producto[]` para evitar validar los datos. Decide si la importación debe fallar por completo o permitir importar los registros válidos cuando otros sean incorrectos.

### Ejercicio 25. Comparador reutilizable

Crea una clase genérica `Ordenador<T>` con un método que ordene una copia de cualquier array según un comparador recibido como parámetro.

Utilízala para ordenar:

- Productos por precio y nombre.
- Alumnos por nota media y nombre.
- Libros por autor y título.
- Ventas por importe, fecha e identificador.
- Tareas por prioridad, fecha límite y título.

Implementa además:

- Ordenación ascendente y descendente.
- Ordenación por varios criterios encadenados.
- Ordenación estable para empates.
- Filtrado previo a la ordenación.
- Selección de los primeros `n` resultados.

**Condiciones:** no modifiques el array original. Los comparadores deben tener tipos explícitos y no puedes resolver los empates mediante criterios aleatorios.

## Bloque 6. Problemas integradores difíciles

### Ejercicio 26. Botiga en línia completa

Implementa en TypeScript las clases `Producto`, `Cliente`, `LineaPedido`, `Pedido` y `Tienda`.

La tienda debe gestionar productos, clientes y pedidos.

Implementa:

- Búsqueda y filtrado de productos por categoría, precio y stock.
- Creación de pedidos con varias líneas.
- Validación del stock antes de confirmar una compra.
- Actualización del stock tras una compra confirmada.
- Cálculo del importe de cada línea y del pedido.
- Historial de pedidos por cliente.
- Total gastado por cada cliente mediante `reduce`.
- Ranking de clientes por gasto acumulado.
- Productos más vendidos agrupados por categoría.
- Informe de inventario con productos agotados y valor total.

**Condiciones:** encapsula las colecciones. Una compra fallida no puede modificar el stock ni crear un pedido confirmado. Los precios se muestran con dos decimales.

### Ejercicio 27. Sistema académico completo

Implementa `Alumno`, `Asignatura`, `Matricula` y `GrupoClase`.

Cada alumno tiene un identificador y cada asignatura almacena las notas de sus alumnos.

Implementa:

- Añadir y modificar notas.
- Calcular la media de cada alumno por asignatura.
- Obtener resúmenes `{ nombre, media, aprobado }`.
- Ranking por media descendente y nombre ascendente.
- Filtrado de alumnos aprobados en todas las asignaturas.
- Alumnos que han suspendido al menos una asignatura.
- Media general del grupo.
- Porcentaje de aprobados por asignatura.
- Asignatura con mayor tasa de suspensos.
- Informe con las cinco mejores medias y las cinco peores.

**Condiciones:** las notas deben estar entre 0 y 10. No confundas la media de todas las notas con la media de las medias de los alumnos. Evita divisiones por cero.

### Ejercicio 28. Gestor de gastos y presupuestos

Implementa `Gasto`, `Presupuesto` y `GestorGastos`.

Cada gasto contiene identificador, importe, categoría, fecha y descripción. Cada presupuesto tiene categoría y límite de gasto.

Implementa:

- Registrar y eliminar gastos.
- Filtrar gastos por categoría y periodo.
- Agrupar gastos por categoría con `reduce`.
- Calcular gasto total y gasto medio.
- Obtener el porcentaje consumido de cada presupuesto.
- Detectar presupuestos superados.
- Encontrar la categoría con mayor gasto.
- Ordenar categorías por importe gastado.
- Comparar el gasto de dos periodos.
- Generar un informe con variación absoluta y porcentual entre periodos.

**Condiciones:** valida importes y fechas. Si el periodo anterior tiene un gasto total de cero, define cómo representar la variación porcentual.

### Ejercicio 29. Torneo y clasificación

Define `Jugador`, `Equipo`, `Partido` y `Torneo`.

Cada partido registra equipos, puntos obtenidos y fecha. El torneo mantiene el historial de partidos.

Implementa:

- Registrar partidos y validar sus datos.
- Calcular victorias, derrotas y puntos de cada equipo.
- Obtener la clasificación por puntos descendentes.
- Resolver empates por victorias y después por nombre.
- Calcular la media de puntos por partido.
- Encontrar al equipo con más victorias.
- Obtener los partidos de un equipo.
- Filtrar partidos por periodo.
- Generar estadísticas por equipo con `reduce`.
- Obtener los tres equipos mejor clasificados.

**Condiciones:** un equipo no puede jugar contra sí mismo. La clasificación debe ser determinista y no alterar los datos originales.

### Ejercicio 30. Mini API en memoria con informes

Crea una clase `ServicioUsuarios` y un `Repositorio<T>` genérico. Cada usuario contiene identificador, nombre, correo, fecha de alta, estado activo y rol.

El servicio debe implementar operaciones de creación, consulta, actualización y eliminación.

Además, implementa un sistema de informes que permita:

- Buscar usuarios por texto sin distinguir mayúsculas y minúsculas.
- Filtrar por rol, estado y fecha de alta.
- Obtener usuarios registrados durante un periodo.
- Agrupar usuarios por rol y estado.
- Calcular porcentajes de usuarios activos e inactivos.
- Obtener el mes con más registros.
- Ordenar por fecha de alta, nombre e identificador.
- Generar una vista resumida con `map`.
- Importar datos de tipo `unknown` con validación.
- Devolver copias defensivas de los resultados.

**Condiciones:** utiliza `private` para encapsular el estado, tipos explícitos, genéricos y validaciones. No uses `any`. Añade pruebas unitarias con Vitest para casos normales, límites, errores y operaciones fallidas.

---

## Requisitos comunes para los 30 ejercicios

1. Utiliza TypeScript con tipos explícitos en propiedades, parámetros y valores de retorno.
2. Añade JSDoc a las clases y a los métodos públicos.
3. Utiliza `map`, `filter`, `reduce`, `find`, `some`, `every` y `sort` cuando aporten valor real.
4. Evita modificar los arrays originales al filtrar, transformar u ordenar.
5. Encapsula las colecciones internas y aplica copias defensivas cuando sea necesario.
6. Valida los datos en constructores y métodos de modificación.
7. Utiliza `null` cuando el enunciado lo indique y evita devolver `undefined` de forma accidental.
8. Escribe pruebas con Vitest para casos normales, arrays vacíos, límites, duplicados y entradas inválidas.
9. Comprueba que una operación fallida no modifica el estado interno.
10. No utilices `any`, ni soluciones que consistan únicamente en funciones independientes cuando el ejercicio exige clases.

**Objetivo final:** resolver los ejercicios combinando diseño orientado a objetos y programación funcional con arrays, manteniendo un código tipado, robusto y fácil de probar.