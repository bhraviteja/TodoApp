import "./displayTodoList.css"
const DisplayTodoList = ({listData,handleEdit}) => {
  // console.log(listData)
  return (
    <div className="DisplayMainContainer">
        {listData && listData.map((item,index)=>{
          return <>
          <div key={index} className="displayCard">
          <div>
          <h2>{item.fullname}</h2>
          <h4>{item.address}</h4>
          <p>{item.mobile}</p>
          </div>
          <div>
              <button onClick={()=>handleEdit(index)}>Edit</button>
          </div>
      </div>
          </>


        })}
        
    </div>
  )
}

export default DisplayTodoList