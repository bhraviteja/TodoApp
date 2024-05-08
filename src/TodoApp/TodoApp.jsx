import { useState ,useEffect} from "react";
import "./todo.css";

const TodoApp = ({todoData,updatedtodo,editIndex}) => {

  console.log(editIndex)
  const initialData = {
    fullname: "",
    address: "",
    mobile: "",
    skill: [],
  };
  const [data, setData] = useState({ ...initialData });
  
  useEffect(() => {
    if (editIndex !== false && updatedtodo) {
      
      setData({ ...updatedtodo });
    } else {
      
      setData({ ...initialData });
    }
  }, [editIndex, updatedtodo]);
  const handleChangeData = (e) => {
    const { name, value, checked, type } = e.target;
    if (type === "checkbox") {
      const updateSkill = checked ? [...data.skill, value] : data.skill.filter((item) => item != value);
      setData({ ...data, skill: updateSkill });
    } else {
      setData({ ...data, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
   todoData(data)
   setData({...initialData})
   
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <input
              type="text"
              name="fullname"
              placeholder="Enter Full Name"
              className="input1"
              value={data.fullname}
              onChange={handleChangeData}
            />
          </div>
          <div>
            <input
              type="text"
              name="address"
              placeholder="Enter Address"
              className="input1"
              value={data.address}
              onChange={handleChangeData}
            />
          </div>
          <div>
            <input
              type="number"
              name="mobile"
              placeholder="Enter Mobile Number"
              className="input1"
              value={data.mobile}
              onChange={handleChangeData}
            />
          </div>

          <div className="checkBoxDiv">
            <input
              type="checkbox"
              name="skill[]"
              value="php"
              checked={data.skill.includes("php")}
              onChange={handleChangeData}
            />
            Php
            <input
              type="checkbox"
              name="skill[]"
              value="java"
              checked={data.skill.includes("java")}
              onChange={handleChangeData}
            />
            Java
            <input
              type="checkbox"
              name="skill[]"
              value=".net"
              checked={data.skill.includes(".net")}
              onChange={handleChangeData}
            />
            .NET
            <input
              type="checkbox"
              name="skill[]"
              value="sql"
              checked={data.skill.includes("sql")}
              onChange={handleChangeData}
            />
            SQL
          </div>
          <div className="btnDiv">
            <button
              type="submit"
              className="addButton"
            >
              Add
            </button>
          </div>
        </div>
      </form>
      <div></div>
    </div>
  );
};

export default TodoApp;
