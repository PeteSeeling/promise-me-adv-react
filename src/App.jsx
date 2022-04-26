import { getCharactersFromApi, thenGetCharacters, asyncTryCatchCharacters, fetchCharacters, getCharactersFinal } from "./services/promise-me";

export default function App() {
  return (
    <>
    <button onClick={async () => console.log(await    getCharactersFromApi())}>
    GetCharacters
    </button>

    <button onClick={async () => console.log(await thenGetCharacters())}>
    Then Get Characters
</button>

<button onClick={async () => console.log(await asyncTryCatchCharacters())}>
    Try Catch Characters
</button>

<button onClick={async () => console.log(await fetchCharacters())}>
    Fetch Characters
</button>

<button onClick={async () => console.log(await getCharactersFinal())}>
    Get Characters Final
</button>
    
    
    </>
  )

}
