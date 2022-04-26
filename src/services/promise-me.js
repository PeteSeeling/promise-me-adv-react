/**
 * TODO: Exercise 1: use `fetch` & async/await to get data from an API
 */
export async function getCharactersFromApi(){
    const res = await fetch('https://futuramaapi.herokuapp.com/api/v2/characters');
    const result = await res.json();
    const characters = result[0];
    const totalResults = result.length;

    return { characters, totalResults };
}

/**
 * TODO: Exercise 2: use `fetch` & `.then` syntax to get the same data from the first exercise.
 */
export function thenGetCharacters(){
    return fetch('https://futuramaapi.herokuapp.com/api/v2/characters')
        .then((res) => res.json())
        .then((result) => ({ characters: result[0], totalResults: result.length }));

}

/**
 * TODO: Exercise 3: use `fetch`, async/await, and a try/catch statement to get data from an API and handle errors
 */

export async function asyncTryCatchCharacters(){
    try{
        const res = await fetch('https://futuramaapi.herokuapp.com/api/v2/characters');
        const result = await res.json();

        return result

    } catch (error){
        console.log('Error occurred')
    }


    }


/**
 * TODO: Exercise 4: use `fetch`, `.then`, and `.catch` to get the same data from exercise 3 while handling errors
 */

export async function fetchCharacters(){
try{
    return fetch('https://futuramaapi.herokuapp.com/api/v2/characters')
 .then((res) => res.json())
 .then((result) => ({ characters: result[0], totalResults: result.length }));

}catch (error){
    console.log('Fetching Error')
}
}

/**
 * TODO: Exercise 5: use `fetch`, async/await, and a try/catch/finally statement to get data from an API, handle errors, then console.log('All done!') upon completion
 */
export async function getCharactersFinal(){
    try{
        const res = await fetch('https://futuramaapi.herokuapp.com/api/v2/characters');
        const result = await res.json();

        return ({ characters: result[0], totalResults: result.length });
    }catch(error){
        console.error('Error Occured');
    }finally{
        console.log('All Done')
    }
}


/**
 * TODO: Exercise 6: use `fetch`, `.then`, `.catch`. and `.finally` to get the same data from exercise 5 while handling errors and calling console.log('All done!') upon completion
 */

 export function fetchThenCharacters(){
    const result = fetch('https://futuramaapi.herokuapp.com/api/v2/characters')
        .then((res) => res.json())
        .then((result) => ({ characters: result[0],totalResults: result.length }))
        .catch((error) => console.log('Error Occured here'))
        .finally(() => console.log('All done'));

        return result;

}

/**
 * TODO: Exercise 7: Call your function from exercise 7 using .then
 */

export async function callCharacters(){
    return fetchThenCharacters().then((result) => console.log('Completed', result)
    );
}


/**
 * TODO: Exercise 8: Call your function from exercise 6 using async/await
 */

export async function asyncGetCharacters(){
        const result = fetch('https://futuramaapi.herokuapp.com/api/v2/characters')
            .then((res) => res.json())
            .then((result) => ({ characters: result[0],totalResults: result.length }))
            .catch((error) => console.log('Error Occured here'))
            .finally(() => console.log('All done'));
            return result;
    }



