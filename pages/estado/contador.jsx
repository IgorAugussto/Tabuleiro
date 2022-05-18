import { useState } from "react"
import style from '../css/style.module.css'

export default function contador()
{
    const[numero, setNumero] = useState(0)

    const adc = () => setNumero(numero + 1)
    const dec = () => setNumero(numero - 1)

    return(
        <div className={style.backGroundStyle}>
            <div className={style.fontstyle}>
                <h1>Contador</h1>
                <div>Valor: {numero}</div>
            </div>
            <div>
                <button onClick={dec}>-</button>
                <button onClick={adc}>+</button>
            </div>
        </div>

    )
}