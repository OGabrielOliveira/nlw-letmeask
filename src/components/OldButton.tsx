import {useState} from 'react'

type ButtonProps = {
    children?: string;
}

export function Button(props: ButtonProps) {
    const [number, setNumber] = useState(0)

    function increment(){
        setNumber(number+1)
    }

    return (
        // <button>{props.children || 'Default'}</button>
        <button onClick={increment}>
            {number}
        </button>
    )
}
