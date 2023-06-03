import {useEffect, useState } from "react";

export function InstrumentSinglePage(props){
    const id = props.match.params.hangszerId;
    const [instrument, setInstrument] = useState({});
    const [isPending, setPending] = useState(false);

    useEffect(() => {
        setPending(true);
        (async () => {
            try {
                const res = await fetch(`https://kodbazis.hu/api/instruments/${id}`)
                const hangszer = await res.json();
                setInstrument(hangszer);
            } catch (e) {
                console.log(e);
            } finally {
            setPending(false);
        }
    })();
}, [id]);

    return (
        <div className="p-5 m-auto text-center content bg-lavender">
        {isPending || !instrument.id ? (
            <div className="spinner-border"></div>
            ) : (
                   <div className="card p-3">
                    <div className="card-body">
                        <h4>{instrument.brand}</h4>
                        <h5 className="card-title">{instrument.name}</h5>
                        <div className="lead">{instrument.price} HUF</div>
                        <p>Készleten: {instrument.quantity} db</p>
                            <img 
                            className="img-fluid rouded"
                            style={{ maxHeight: "500px"}}
                            src={instrument.imageURL ? instrument.imageURL : "https://via.placeholder.com/400x800"}
                            alt="izéke"/>
                    </div>
                   </div>    
                )}
        </div>
    );
}