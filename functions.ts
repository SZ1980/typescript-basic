function addNumbers (a: number,b: number) {
    return a + b
}

export default addNumbers

export const addstrings = (str1: string, str2: string = 'goki'): string => `${str1} ${str2}`

export const format = (title: string, param: string | number): string => `${title} ${param}`

//void function

export const printFormat = (title: string, param: string | number): void => {
    console.log(format);
}

//promise function

export const fetchData = (url: string): Promise<string> => Promise.resolve(`Data from ${url}`)

//rest parameters

function introduce (salutations:string, ...names:string[]): string{
    return `${salutations} ${names.join(' ')}`
}

