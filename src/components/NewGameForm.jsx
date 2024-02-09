import { useState } from "react"
import { TextInput } from "./TextInput"

function NewGameForm({ addGame }) {
    const [title, setTitle] = useState('')
    const [cover, setCover] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        addGame({ title, cover })
        setTitle('')
        setCover('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextInput id="title" label="Titulo:" value={title} setValue={setTitle} />
            <TextInput id="poster" label="Poster:" value={cover} setValue={setCover} />
            <button type="submit">Add to Library</button>
        </form>
    )
}

export { NewGameForm }