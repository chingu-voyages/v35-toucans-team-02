//json data returns run time in a string. this extracts and converts it to a number to allow for setting duration filters.

export default function runtimeToNumber(string){
    const durationRegex = /\d+/g;

    let conversion = string.match(durationRegex);
    
    return parseInt(conversion, 10)
}

