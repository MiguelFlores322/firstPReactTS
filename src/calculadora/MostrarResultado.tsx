
export default function MostrarResultado(props: MostrarResultadoProps){
   
    return(
        <> 
         <div className={props.className}>
           <input type="text" defaultValue={props.resultado} readOnly />     
         </div>
        </>
    )
}
interface MostrarResultadoProps{
    resultado: string
    className: string

}