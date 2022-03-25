const initialYearArray = () =>{
    const yearsArray: number[] = []
    for (let i = 1980; i <= 2022 ; i++) {
        yearsArray.push(i)
    }
    return yearsArray
}
export const yearsArray = initialYearArray()
