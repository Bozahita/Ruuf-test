'use client'

import { FormEvent } from "react"

export default function Ejercicio1() {

    function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        // Obtenemos los valores de los inputs
        const formData = new FormData(event.currentTarget)
        const x = Number(formData.get("techo-x"))
        const y = Number(formData.get("techo-y"))
        const o = Number(formData.get("techo-o"))
        const a = Number(formData.get("panel-a"))
        const b = Number(formData.get("panel-b"))
        
        // Calculamos el total de paneles
        const total = maxRectanglesInOverlap(a, b, x, y, o)
        const total_div = document.getElementById("total-panels")
        if (total_div) {
            total_div.innerHTML = `<h2>Total de paneles: ${total}</h2>` // Mostramos el total de paneles
        }
    }

    return (
        <main>
            <div className="container">
                <div className="mt-4">
                    <form onSubmit={onSubmit}>
                        <div>
                            <h3>Medidas del techo (Superposición)</h3>
                            <label htmlFor="techo-x" className="form-label pe-2">Ancho</label>
                            <input className="form-control" id="techo-x" type="number" min={1} name="techo-x" />
                            <label htmlFor="techo-y" className="form-label pe-2">Alto</label>
                            <input className="form-control" id="techo-y" type="number" min={1} name="techo-y" />
                            <label htmlFor="techo-y" className="form-label pe-2">Superposición (Área)</label>
                            <input className="form-control" id="techo-o" type="number" min={1} name="techo-o" />
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

// Calcula la cantidad de rectángulos que caben en un rectángulo con superposición
function maxRectanglesInOverlap(a: number, b: number, X: number, Y: number, O: number) {
    const totalRectangles = 2 * fitSingleRectangle(a, b, X, Y); // Calcula la cantidad de rectángulos que caben en el techo
    const overlapRectangles = fitSingleRectangle(a, b, O, O); // Calcula la superposición
    const adjustedTotalRectangles = totalRectangles - overlapRectangles; // Calcula la cantidad de rectángulos que caben en el techo sin la superposición

    return adjustedTotalRectangles;
}

// Calcula la cantidad de rectángulos que caben en un rectángulo
function fitSingleRectangle(a: number, b: number, X: number, Y: number): number {
    const countX = Math.floor(X / a); // Calcula la cantidad de rectángulos que caben en el ancho
    const countY = Math.floor(Y / b); // Calcula la cantidad de rectángulos que caben en el alto
    return countX * countY; // Devuelve la cantidad de rectángulos que caben en el rectángulo
};
