export const sintomas = [
    {
        id: 1,
        name: 'Febre',
        selected: false,

    },
    {
        id: 2,
        name: 'Emagrecimento',
        selected: false,

    },
    {
        id: 3,
        name: 'Aumento do Baço',
        selected: false,

    },
    {
        id: 4,
        name: 'Aumento do Fígado',
        selected: false,

    },
    {
        id: 5,
        name: 'Fraqueza',
        selected: false,

    },
    {
        id: 6,
        name: 'Tosse e/ou Diarréia',
        selected: false,

    },
    {
        id: 7,
        name: 'Quadro Infeccioso',
        selected: false,

    },
    {
        id: 8,
        name: 'Icterícia',
        selected: false,

    },
    {
        id: 9,
        name: 'Edema',
        selected: false,

    },
    {
        id: 10,
        name: 'Palidez',
        selected: false,

    },
    {
        id: 11,
        name: 'Fenômenos Hemorrágicos',
        selected: false,

    }, {
        id: 12,
        name: 'Outros',
        selected: false,

    }
]


export function changeSelected(sintoma){
    sintomas.forEach(s => {
        if(s.id === sintoma.id){
            s.selected = !s.selected
        }
    }
    )
}

export const sexoLista = [
    {
        id: 1,
        name: 'Masculino'
    }, {
        id: 2,
        name: 'Feminino'
    }, {
        id: 3,
        name: 'Outro'
    }
]

export const etnia = [
    { id: 1, name: "Branca" },
    { id: 2, name: "Amarela" },
    { id: 3, name: "Parda" },
    { id: 4, name: "Indígena" },
    { id: 5, name: "Não Informado" },
]

export const drogas = [
    {id:1, name:"Antimonial Pentavalente"},
    {id:2, name:"Anfotericina B"},
    {id:3, name:"Pentamidina"},
    {id:4, name:"Anfotericina b lipossomal"}
]