export const addPeople = (name,department,id) => ({
    type: 'ADD_PEOPLE',
    id,
    name,
    department
})

export const toggleEat = (id) => ({
    type: 'TOGGLE_EAT',
    id
})
