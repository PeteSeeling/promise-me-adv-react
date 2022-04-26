import { getCharactersFromApi, thenGetCharacters, asyncTryCatchCharacters, fetchCharacters, getCharactersFinal, fetchThenCharacters, callCharacters, asyncGetCharacters } from "./services/promise-me";

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
    
<button onClick={async () => console.log(await fetchThenCharacters())}>
    fetch Then Characters
</button>

<button onClick={async () => console.log(await callCharacters())}>
    Call Characters
</button>

<button onClick={async () => console.log(await asyncGetCharacters())}>
    Get The Characters
</button>
    
    </>
  )

}
