export const AddStudent = (student) => {
    return {
        type: 'ADD_STUDENT',
        student
    }
}

export const AddEntry = (entry) => {
    return {
        type: 'ADD_ENTRY',
        entry
    }
}

export const IncrementEntry = (student) => {
    return {
        type: 'INCREMENT_ENTRY',
        student
    }
}