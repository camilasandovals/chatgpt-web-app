import { useEffect } from "react"

export default function Result( {setShowResult, result, loading, setLoading}) {

    useEffect( () => {
        fetch('http://localhost:3000/request')
        .then(resp => resp.json())
        .then(setShowResult)
        .catch(alert)
        .finally(() => setLoading(false))
    }, [])
    return(
        <section>
             <h2> {result ? 'Result' : ''}</h2>
             <p> {result ? result : ''}</p>
        </section>
    )
}