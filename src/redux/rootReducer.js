
const initialState = {
    students: [
        {
            id: 1,
            name: "Virgina Dootson",
            phone: "258-514-9711",
            notes: "core",
            interestLevel: "Kinda",
            entries: [
                {
                    id: '1',
                    note: 'party',
                    count: 2
                },
                {
                    id: '2',
                    note: 'recruitment',
                    count: 2
                },
            ],
            referrer: 'Nahian Alam',
        },
        {
            id: 2,
            name: "Kettie Fallows",
            phone: "826-430-4783",
            notes: "Open-architected",
            interestLevel: "Alot",
            entries: [
                {
                    note: 'meeting',
                    count: '10',
                }
            ],
            referrer: 'Nahian Alam',
        },
        {
            id: 3,
            name: "Sherwynd Carlick",
            phone: "429-535-8582",
            notes: "throughput",
            interestLevel: "NotMuch",
            entries: [],
            referrer: 'Nahian Alam',
        },
        {
            id: 4,
            name: "Sherwynd Oram",
            phone: "716-944-2727",
            notes: "zero administration",
            interestLevel: "Alot",
            entries: [],
            referrer: 'Nahian Alam',
        },
        {
            id: 5,
            name: "Salomon Victoria",
            phone: "894-798-6827",
            notes: "coherent",
            interestLevel: "Alot",
            entries: [],
            referrer: 'Nahian Alam',
        },
        {
            id: 6,
            name: "Annis Matovic",
            phone: "414-779-6902",
            notes: "Public-key",
            interestLevel: "NotMuch",
            entries: [],
            referrer: 'Nahian Alam',
        },
        {
            id: 7,
            name: "Linc Siegertsz",
            phone: "241-791-0263",
            notes: "grid-enabled",
            interestLevel: "Alot",
            entries: [],
            referrer: 'Nahian Alam',
        },
        {
            id: 8,
            name: "Rodie Thyng",
            phone: "971-870-7928",
            notes: "workforce",
            interestLevel: "Kinda",
            entries: [],
            referrer: 'Nahian Alam',
        },
        {
            id: 9,
            name: "Pat Matula",
            phone: "323-833-8956",
            notes: "Total",
            interestLevel: "Kinda",
            entries: [],
            referrer: 'Nahian Alam',
        },
        {
            id: 10,
            name: "Faun Theuss",
            phone: "178-565-3698",
            notes: "next generation",
            interestLevel: "NotMuch",
            entries: [],
            referrer: 'Nahian Alam',
        }
    ]
}

const RootReducer = (state = initialState, action) => {
    let students = state.students;
    switch (action.type) {
        case 'ADD_STUDENT':
            let student = {
                ...action.student,
                id: state.students.length + 1,
                entries: [],
            };
            students = [...state.students, student]
            return { ...state, students }
        case 'INCREMENT_ENTRY':
            students = state.students
            let filteredStudents = students.filter((student) => {
                return student.id != action.student.id
            })
            const studentToEdit = action.student;
            students = [...filteredStudents, studentToEdit]
            return { ...state, students }
        default:
            console.log('that is not a valid type, check the code');
    }
    return state;
}

export default RootReducer;