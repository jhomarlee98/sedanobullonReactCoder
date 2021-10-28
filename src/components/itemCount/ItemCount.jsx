import React, {useState} from 'react'

function ItemCount() {
    const [contador, setContador] = useState(0)
    const stok = 15

    if(contador>=0){
        return (
            <div>
                <button onClick={()=>{setContador(contador+1)}} className="rounded-circle btn btn-de">
                    <i className="bi bi-hand-thumbs-up"></i>
                </button>
                <span className="mx-2">
                    {contador}
                </span>
                <button  className="rounded-circle btn btn-de disabled">
                    <i className="bi bi-hand-thumbs-down"></i>
                </button>
            </div>
        )
    }else{
        return (
            <div>
                <button onClick={()=>{setContador(contador+1)}} className="rounded-circle btn btn-de disabled">
                    <i className="bi bi-hand-thumbs-up"></i>
                </button>
                <span className="mx-2">
                    {contador}
                </span>
                <button onClick={()=>{setContador(contador-1)}} className="rounded-circle btn btn-de">
                    <i className="bi bi-hand-thumbs-down"></i>
                </button>
            </div>
        )
    }
    if (contador=stok)
        return (
            <div>
                <button className="rounded-circle btn btn-de disabled">
                    <i className="bi bi-hand-thumbs-up"></i>
                </button>

                <span className="mx-2">
                {contador}
            </span>
                <button onClick={()=>{setContador(contador-1)}} className="rounded-circle btn btn-de">
                    <i className="bi bi-hand-thumbs-down"></i>
                </button>
            </div>
        )
}

export default ItemCount
