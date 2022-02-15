import './Table.css'
import TblRowIncomplete from '../TblRowIncomplete/TblRowIncomplete';
import TblRowComplete from '../TblRowComplete/TblRowComplete';

function Table() {
    return (
        <table id="tbl-todo-list">
            <thead>
                <tr>
                    <th></th>
                    <th>Task Description</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody id="tbody-todo-list">
                <TblRowIncomplete />
                <TblRowIncomplete />
                <TblRowIncomplete />
                <TblRowComplete />
                <TblRowComplete />
            </tbody>
        </table>
    )
}

export default Table;