export type CountriesType = {
    _id: string
    name: string
    description: string
}

const countries: Array<CountriesType> = [
    {_id: "1", name: "Thailand", description: "hey"},
    {_id: "2", name: "Pathaya", description: "yo"},
    {_id: "3", name: "6-я Soika",description: "тупо красавчик"},
    {_id: "4", name: "bichka",  description: "что бы было"},
]

const fetchAll = () => new Promise((resolve) => {
    window.setTimeout(function () {
        resolve(countries);
    }, 1000)
});

export default {
    fetchAll
};