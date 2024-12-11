export default function Saludo() {

    const saludo = 'Hola! Este es un ejemplo del ejercicio 1 paso 3'
    const handleSaludo = () => {
        alert(`${saludo}`)
    }
    return(
        <>
            <button onClick={handleSaludo}>Saludos 🙌</button>
        </>
    )
}