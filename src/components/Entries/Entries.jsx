import './Entries.css'

function Entries() {
    return (
        <div id="entry-fields">
            <input class="form-control" id="inp-task" rows="1" placeholder="Task Description"/>
            <button class="btn btn-success" id="btn-submit">Submit</button>
        </div>
    )
}

export default Entries;