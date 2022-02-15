function TblRowIncomplete(){
    return (
        <tr>
            <td><input type="checkbox" class="form-check-input" id="checkbox"/></td>
            <td>Incomplete Task Placeholder</td>
            <td><button class="btn btn-danger" id="btn-delete">Delete</button></td>
        </tr>
    )
}

export default TblRowIncomplete;