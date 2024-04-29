'use client'

import { FormEvent } from "react"

export default function Ejercicio1() {

    function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        // Obtenemos los valores de los inputs
        const formData = new FormData(event.currentTarget)
        const x = Number(formData.get("techo-x"))
        const y = Number(formData.get("techo-y"))
        const a = Number(formData.get("panel-a"))
        const b = Number(formData.get("panel-b"))

        // Calculamos el total de paneles
        const total = maxRectanglesInTriangle(a, b, x, y)
        const total_div = document.getElementById("total-panels")
        if (total_div) {
            // Mostramos el total de paneles
            total_div.innerHTML = `<h2>Total de paneles: ${total}</h2>`
        }
    }

    return (
        <main>
            <div className="container">
                <div className="mt-4">
                    <form onSubmit={onSubmit}>
                        <div>
                            <h3>Medidas del techo (Triangular)</h3>
                            <label htmlFor="techo-x" className="form-label pe-2">Base</label>
                            <input className="form-control" id="techo-x" type="number" min={1} name="techo-x" />
                            <label htmlFor="techo-y" className="form-label pe-2">Altura</label>
                            <input className="form-control" id="techo-y" type="number" min={1} name="techo-y" />
                        </div>
                        <div className="mt-3">
                            <h3>Medidas del panel</h3>
                            <label htmlFor="panel-x" className="form-label pe-2">Ancho</label>
                            <input className="form-control" id="panel-b" type="number" min={1} name="panel-b" />
                            <label htmlFor="panel-y" className="form-label pe-2">Alto</label>
                            <input className="form-control" id="panel-a" type="number" min={1} name="panel-a" />
                        </div>
                        <button type="submit" className="btn btn-primary mt-2">Calcular</button>
                    </form>
                    <div id="total-panels" className="mt-3">
                    </div>
                </div>
            </div>
        </main>
    );
}

function maxRectanglesInTriangle(a: number, b: number, x: number, h: number): number {
    let maxRectangles = 0;
    let currentHeight = 0;
    
    // Calculamos la cantidad de paneles que caben en el techo
    while (currentHeight + b <= h) {
        const currentBase = x - (x * (currentHeight / h) * 2); // Calculamos la base del triángulo
        const rectanglesInRow = Math.floor(currentBase / a); // Calculamos la cantidad de paneles que caben en una fila
        maxRectangles += rectanglesInRow; // Sumamos la cantidad de paneles que caben en una fila
        currentHeight += b; // Aumentamos la altura actual
    }
    
    return maxRectangles;
}