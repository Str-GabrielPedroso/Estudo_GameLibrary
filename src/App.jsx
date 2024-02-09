import { Game } from "./components/Game"
import { NewGameForm } from "./components/NewGameForm"
import useGameCollection from "./hooks/useGameCollection"

export default function App() {
  const { games, addGame, removeGame } = useGameCollection()

  return (
    <div id="app">

      <h1>Games Library</h1>

      <NewGameForm addGame={addGame} />

      <div className="games">
        {games.length > 0 ?
          games.map((game) => {
            return (
              <Game key={game.id} title={game.title} cover={game.cover} onRemove={() => removeGame(game.id)} />
            )
          })
          : <h2>You don't have any Games in your Library</h2>}
      </div>

    </div>
  )
}