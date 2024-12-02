import { useState } from "react";

export const useSearchGifs = () => {

    const [valorInput,setValorInput] = useState('');
    const [gifs, setGifs] = useState([]);
    const [cargando, setCargando] = useState(false);

    const onChange = (e) => {
        const valor = e.target.value;
        setValorInput(valor);
    }

    const getGifs = async (query) => {
        const url = `https://api.giphy.com/v1/gifs/search/?api_key=jcnDTQW3B351ug6gS3qCp7LaABUFHfOM&q=${query}`;
        setCargando(true);
        await new Promise(resolve => {
            setTimeout(() => {
                resolve(true)
            },3000)
        })
        const response = await fetch(url);
        const data = await response.json();
        setCargando(false);
        console.log(data);
        return data.data;
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        const gifs = await getGifs(valorInput)
        setGifs(gifs)
    }

    return {
        onSubmit,
        onChange,
        valorInput,
        gifs,
        cargando
    }
}