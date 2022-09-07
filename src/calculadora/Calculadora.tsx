import { useState } from "react";
import { BotonesOperacion } from "./BotonOperacion";
import "./BotonOperacion.css";
import MostrarResultado from "./MostrarResultado";
export function Calculadora() {
    const unoaltres = [1, 2, 3]
    const tresalseis = [4, 5, 6]
    const sietealnueve = [7, 8, 9]
    //capturamos el numero
    const [mostrar, setMostrar] = useState("");
    const [igualActivado, setigualActivado] = useState(false);

    const muestraNumeros = (mostrarTodo: string, mostrarNumero: string) => {
        if (igualActivado === true) {
            setMostrar("");
            setMostrar(mostrarNumero);
            setigualActivado(false);
        } else {
            setMostrar(mostrarTodo);
        }
    }
    const muestraigual = (mo: string) => {
        setigualActivado(true);
        setMostrar(mo);
    }
    const muestraoperacion = (mo: string) => {
        setMostrar(mo);
        setigualActivado(false);
    }
    function limpiar() {
        setMostrar("");
        setigualActivado(false);

    }

    return (
        <>
            <div className="calculadora" id="calculadora">
                <div className="borde" >
                <MostrarResultado className="mostrarResultado" resultado={mostrar} />
                <div className="botonesTotales" >
                    <div  >
                        <div className="numeros">
                            {unoaltres.map(num => <BotonesOperacion onClick={() => muestraNumeros(mostrar + num.toString(), num.toString())} key={num.toString()} operacion="numero" numero={num} />)}
                        </div>

                        <div className="numeros">
                            {tresalseis.map(num => <BotonesOperacion onClick={() => muestraNumeros(mostrar + num.toString(), num.toString())} key={num.toString()} operacion="numero" numero={num} />)}
                        </div>

                        <div className="numeros">
                            {sietealnueve.map(num => <BotonesOperacion onClick={() => muestraNumeros(mostrar + num.toString(), num.toString())} key={num.toString()} operacion="numero" numero={num} />)}
                        </div>
                        <div className="igualceroyc">
                            {/*Caso especial para poder poner las lineas de abajo*/}
                            <BotonesOperacion className="igualBoton" onClick={() => muestraigual(eval(mostrar))} operacion="igual" />
                            <BotonesOperacion className="cero" onClick={() => muestraNumeros(mostrar + "0", "0")} operacion="cero" />
                            <BotonesOperacion className="limpiar" onClick={limpiar} operacion="limpiar" />

                        </div>
                    </div>

                    <div className="operaciones">
                        <BotonesOperacion onClick={() => muestraoperacion(mostrar + "+")} operacion="suma" />
                        <BotonesOperacion onClick={() => muestraoperacion(mostrar + "-")} operacion="resta" />
                        <BotonesOperacion onClick={() => muestraoperacion(mostrar + "/")} operacion="division" />
                        <BotonesOperacion onClick={() => muestraoperacion(mostrar + "*")} operacion="multiplicacion" />
                    </div>

                </div>


                </div>

            </div>




        </>

    )
}