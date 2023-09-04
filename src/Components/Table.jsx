// import logo from './logo.svg';
import './App.css';

function Table() {
  const students = [
    {
      id: 100,
      fname: "vignesh",
      email:"vignesh23@gmail.com",
      phone: 8189950272
    },
    {
      id: 101,
      fname: "ramesh",
      email:"ramesh@gmail.com",
      phone: 9565324178
    },
     {
      id: 102,
      fname: "suresh",
      email:"suresh@gmail.com",
      phone: 7865324178
    },
  ];
    
  return (
    <>
        <h3 align='center'>Students details</h3>

    <table border='1' align='center' rowspan='2' style={{textAlign:'center', marginTop:'10px'}} >

      <thead>
        <tr >
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>

      <tbody >
        {students.map((student) => {

       
        return(

        <tr key={student.id}>
          <td>{student.id}</td>
          <td>{student.fname}</td>
          <td>{student.email}</td>
          <td>{student.phone}</td>

        </tr>
        );
      })}
      </tbody>

    </table>

    </>
  );
}

export default Table;
