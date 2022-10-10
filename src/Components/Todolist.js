import React, { useState } from "react";

function Todolist() {
  const [activity, setActivity] = useState("");
  const [listData, setlistData] = useState([]);
  function addActivity() {
    //setlistData([...listData, activity])
    //console.log(listData)

    setlistData((listData) => {
        const updatedList =[...listData,activity]
        console.log(updatedList)
        setActivity('');
        return updatedList
    })
  }
  return (
    <>
      <div className="container">
        <div className="header">TODO LIST</div>
        <input
          type="text"
          placeholder="Add Activity"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />
        <button onClick={addActivity}>Add</button>
        <p className="List-heading">here is Your List :{")"}</p>
        {listData!=[] && listData.map((data, i) => {
        return(
            <>
            <p key={i}>
<div className='listData'>{data}</div>
            </p>
            </>
        )
        })}
      </div>
    </>
  );
}

export default Todolist;
