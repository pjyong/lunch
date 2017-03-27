let nextTodoId = 0
export const addPeople = (name,department) => ({
    type: 'ADD_PEOPLE',
    id: nextTodoId++,
    name,
    department
})

export const toggleEat = (id) => ({
    type: 'TOGGLE_EAT',
    id
})
