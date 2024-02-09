function Game({ title, cover, onRemove }) {
    return (
        <div>
        <img src={cover} />
        <h3>{title}</h3>
        <button onClick={onRemove}>Remove Game</button>
      </div>
    )
}

export { Game }