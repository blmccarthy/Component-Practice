function TblRowComplete(){
    return (
        <tr>
            <td><input type="checkbox" class="form-check-input" id="checkbox" checked/></td>
            <td><i><s>Complete Task Placeholder</s></i></td>
            <td><button class="btn btn-danger" id="btn-delete">Delete</button></td>
        </tr>
    )
}

export default TblRowComplete;