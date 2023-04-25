import { useEffect } from "react"

export default function Result( {setShowResult, showResult}) {

    // useEffect( () => {
    //     fetch('http://localhost:3000/request')
    //     .then(resp => resp.json())
    //     .then(setShowResult)
    //     .catch(alert)
    //     .finally()
    // }, [])
    return(
        <section>
             <h2>Result</h2>
             <p></p>
        </section>
    )
}