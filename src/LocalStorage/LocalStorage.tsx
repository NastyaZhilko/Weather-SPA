export const saveValue=(city: string, country: string)=>{
    let obj={
        'saveCity':city,
        'saveCountry':country
    }
    localStorage.setItem('city', JSON.stringify(obj))
}
export const restoreState=()=>{
    let obj=localStorage.getItem('city')
    return obj ? JSON.parse(obj):{'saveCity':null, 'saveCountry': null}
}