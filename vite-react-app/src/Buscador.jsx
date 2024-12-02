export const Buscador = ({ onSubmit, valorInput, onChange }) => {
    return (
        <form className="form" onSubmit={onSubmit}>
            <input className="buscador" value={valorInput} onChange={onChange} placeholder="Busca tus gifs favoritos aquí..." />
        </form>
    )
}