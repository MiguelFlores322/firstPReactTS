
import { AiOutlinePlus } from 'react-icons/ai';
import { operaciones } from "./operaciones";

export function BotonesOperacion(props: BotonOperacionProps){
    

    function mostrarTipoOperacion(){
        if(props.operacion === operaciones.suma){
            return  "+"
         }else if(props.operacion === operaciones.resta){
            return  "-"
         }else if(props.operacion === operaciones.multipli){
            return  "*"
         }else if(props.operacion == operaciones.division){
            return  "/"
         }else if(props.operacion == operaciones.igual){
            return  "="
         }
         else if(props.operacion == operaciones.cero){
            return  "0"
         }
         else if(props.operacion == operaciones.limpiar){
            return  "C"
         }
         else if(props.operacion == operaciones.numero){
            return (props.numero)
         }else{
            return ""
         }
    }
    return(
        <>
        <button className={props.className} onClick={() => props.onClick()} >{mostrarTipoOperacion()}</button>
        </>
    )
    
    
}
interface BotonOperacionProps{
    operacion: string
    numero?: number
    onClick(): void
    className?: string;

}
BotonesOperacion.defaultProp = {
    numero: 9999,
    className: ""

}
