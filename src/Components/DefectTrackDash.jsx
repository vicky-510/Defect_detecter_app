import React from 'react'

 function DefectTrackDash() {



  return (
    <>
    <div className='container' style={{textAlign:'center'}}>
    <h1 >Defect Tracker</h1>
    <a href='/' style={{textDecoration:'none' , color:'#3498db'}}> Logout</a><br/><br/>
    <div style={{display: 'inline-flex', columnGap:'10px'}}>
    <a href='/' style={{textDecoration:'none', color:'#3498db'}}>Add Defect</a>
    <a href='/' style={{textDecoration:'none' , color:'#3498db'}}>View Defects</a>
    </div>

    <div className='card'>
        <h2>Filter Details</h2>

        <h3 style={{display:'inline-flex', marginRight:'10px', marginBottom:'5px'}}>Priority</h3>
        <select >
            <option>All</option>
            <option>Status</option>

        </select> 
    <br/>
        <h3 style={{display:'inline-flex', marginRight:'10px'}}>Category</h3>
        <select style={{width:'120px'}}>
            <option>All</option>
            <option>Status</option>

        </select>

    </div>

     <div>
    <h3>Defect Details</h3>
    <h4 style={{color:'red'}}>Search Results: 3</h4>
    </div>

    <table >
        <thead>
            <tr>
                <th>Defect Category</th>
                <th>Description</th>
                <th>Priority</th>
                <th>Status</th>
                <th>Change Status</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>UI</td>
                <td>Submit Button coming to the extreme left. Refer the screenshots</td>
                <td>2</td>
                <td>open</td>
                <td><a href='/' style={{textDecoration:'none' , color:'#3498db'}}>Close Defect</a></td>
            </tr>

            <tr>
                <td>Functional</td>
                <td>While submitting the form data, a confirmation popup shoud appear. Refer the SRS document.</td>
                <td>1</td>
                <td>open</td>
                <td><a href='/' style={{textDecoration:'none' , color:'#3498db'}}>Close Defect</a></td>
            </tr>

            <tr>
                <td>Change Request</td>
                <td>Add remove user functionality</td>
                <td>3</td>
                <td>Closed</td>
                <td style={{textDecoration:'none' , color:'gray'}}>No action pending</td>
            </tr>
        </tbody>
    </table>
    </div>
    </>
  )
}

export default DefectTrackDash;