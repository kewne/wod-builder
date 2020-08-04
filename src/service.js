'use strict';

function search(text) {
    console.debug(`Searching for ${text}`)
    const results = [
        {
            name: "X Rounds",
            params: {
                "X": {
                }
            }
        }
    ]
    console.debug(`Found ${results.length} matching results`)
    return results;
}

export { search }