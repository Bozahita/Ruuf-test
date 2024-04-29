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
        const total = calculatePanels(a, b, x, y)
        
        const total_div = document.getElementById("total-panels")
        if (total_div) {
            total_div.innerHTML = `<h2>Total de paneles: ${total}</h2>`
        }
    }

    return (
        <main>
            <div className="container">
                <div className="mt-4">
                    <form onSubmit={onSubmit}>
                        <div>
                            <h3>Medidas del techo</h3>
                            <label htmlFor="techo-x" className="form-label pe-2">Ancho</label>
                            <input className="form-control" id="techo-x" type="number" min={1} name="techo-x" />
                            <label htmlFor="techo-y" className="form-label pe-2">Alto</label>
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

function calculatePanels(a: number, b: number, x: number, y: number) {

    const horizontalFit = fitHorizontally(a, b, x, y);
    const verticalFit = getfitVertically(a, b, x, y);

    // Calculo de espacio restante en el techo
    const remainingSpaceHorizontal = x * y - (horizontalFit * a * b);
    const remainingSpaceVertical = x * y - (verticalFit * a * b);

    // Calculo de paneles adicionales que caben en el techo
    const additionalHorizontal = remainingSpaceHorizontal >= a * b ? 1 : 0;
    const additionalVertical = remainingSpaceVertical >= a * b ? 1 : 0;

    return Math.max(horizontalFit + additionalHorizontal, verticalFit + additionalVertical); // Devuelve el maximo de paneles que caben en el techo
};

// Funcion para calcular cuantos paneles caben en el techo de forma vertical
function getfitVertically(a: number, b: number, x: number, y: number){
    const countX = Math.floor(x / b);
    const countY = Math.floor(y / a);
    return countX * countY;
};

// Funcion para calcular cuantos paneles caben en el techo de forma horizontal
function fitHorizontally(a: number, b: number, x: number, y: number){
    const countX = Math.floor(x / a);
    const countY = Math.floor(y / b);
    return countX * countY;
};