import axios from "axios";
import { useState, useEffect } from "react";

function Employee() {
  const [employeeData, setEmployeeData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000").then((res) => {
      const data = res.data;
      setEmployeeData(data)
      console.log(data)
    });
  }, []);

  // useEffect(() => {
  //       console.log(employeeData)
  // }, [employeeData]);

  return (
    <div>
      <header>Data generated from Django</header>
      <hr></hr>
      {employeeData.map((output, id) => (
        <div key={id}>
          <div>
            <h2>{output.employee}</h2>
            <h3>{output.department}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Employee;
