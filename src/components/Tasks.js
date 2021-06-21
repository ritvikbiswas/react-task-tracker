import Task from './Task'

const Tasks = ({tasks, onDelete}) => {
    return (
        <div>
            {tasks.map((task) => (
                <Task task = {task} onDelete={onDelete} />)
                )}
        </div>
    )
}

export default Tasks
