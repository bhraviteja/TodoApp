import { useState } from "react";

const TodoSIngleComp = () => {
  const initialData = {
    fullname: "",
    address: "",
    mobile: "",
    skill: [],
  };
  const [data, setData] = useState({ ...initialData });
  const [submittedData, setSubmittedData] = useState([]);
  const [indexId, setIndexId] = useState(null);
  const handleChange = (e) => {
    const { value, name, checked, type } = e.target;

    if (type === "checkbox") {
      const updateCheckBox = checked ? [...data.skill, value] : data.skill.filter((item) => item != value);
      setData({ ...data, skill: updateCheckBox });
    } else {
      setData((prevData) => ({ ...prevData, [name]: value }));
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (indexId !== null) {
      const updateData = [...submittedData];
      updateData[indexId] = data;
      setSubmittedData(updateData);
      setIndexId(null);
      setData({ ...initialData });
    } else {
      setSubmittedData((prevSubmittedData) => [...prevSubmittedData, data]);
      console.log(submittedData);
    }
    setData({ ...initialData });
  };
  const handleUpdate = (id) => {
    setIndexId(id);
    setData(submittedData[id]);
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullname"
            onChange={handleChange}
            value={data.fullname}
            placeholder="fullname"
          />
          <br />
          <input
            type="text"
            name="address"
            onChange={handleChange}
            value={data.address}
            placeholder="address"
          />
          <br />
          <input
            type="number"
            name="mobile"
            onChange={handleChange}
            value={data.mobile}
            placeholder="phone number"
          />
          <br />
          <input
            type="checkbox"
            checked={data.skill.includes("php")}
            name="skill[]"
            value="php"
            onChange={handleChange}
          />
          PHP
          <input
            type="checkbox"
            checked={data.skill.includes("java")}
            name="skill[]"
            value="java"
            onChange={handleChange}
          />
          Java
          <input
            type="checkbox"
            checked={data.skill.includes("reactjs")}
            name="skill[]"
            value="reactjs"
            onChange={handleChange}
          />
          React JS
          <input
            type="checkbox"
            checked={data.skill.includes("nodejs")}
            name="skill[]"
            value="nodejs"
            onChange={handleChange}
          />
          Node js<br></br>
          <button>Submit</button>
        </form>
      </div>
      <div>
        {submittedData &&
          submittedData.map((item, index) => {
            return (
              <div key={index}>
                {item.fullname} {item.address} {item.mobile} {item.skill}{" "}
                <button onClick={() => handleUpdate(index)}>Update</button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default TodoSIngleComp;
