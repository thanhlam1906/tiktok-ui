import { useReducer, useRef } from "react";
const initialState = {
    job: '',
    jobs: []

};

const SET_JOB = 'set_job';

const ADD_JOB = 'add_job';

const DELETE_JOB = 'delete_job';

const setJob = payload => {
    return { type: SET_JOB, payload }
}
const addJob = payload => {
    return { type: ADD_JOB, payload }
}

const deleteJob = payload => {
    return { type: DELETE_JOB, payload }
}
const reducer = (state, action) => {
    console.log('Action: ', action);
    console.log('Prev state: ', state);
    let newState;
    switch (action.type) {
       
        case SET_JOB:
            newState ={ ...state, job: action.payload };
            break;

        case ADD_JOB:
            newState = { ...state, jobs: [...state.jobs, action.payload], job: '' };
            break;

        case DELETE_JOB:
            const newJobs = [...state.jobs];
            newJobs.splice(action.payload, 1);
            newState = { ...state, jobs: newJobs };
            break;
        default:
            throw new Error('Invalid action');
    }
    console.log('New state: ', newState);
    return newState;
}

function ReducerHook(){
    const [state, dispatch] = useReducer(reducer, initialState);
    const { job, jobs } = state;
    const inputRef = useRef();
    console.log(inputRef);
   
    const handleSubmit = () => {
        dispatch(addJob(job));
        dispatch(setJob(''));
        inputRef.current.focus();
    }
    return (
        <div style={{ padding: '0 20px' }}>
            <h3>To do list</h3>

            <input 
            ref={inputRef}
            value={job}
            type="text" 
            placeholder="Enter To Do..."
            onChange={e => {
                dispatch(setJob(e.target.value));
            }}
            />

            <button onClick={handleSubmit}>Add</button>
            <ul> 
                {jobs.map((job, index) => (
                    <li key={index}>{job} 
                        <span onClick={() => dispatch(deleteJob(index))}>&times;</span>
                    </li>
                ))} 
            </ul>



        </div>
    )
}

export default ReducerHook;