import React, { useState } from "react";
import dataBaseServise from '../Appwrite/config'

function Select({order_status, order_id,}) {
  const [value, setValue] = useState(order_status);

  let order_state = ["pending", 'canceled', 'completed']
	let order_color = {
    pending : 'rgb(59 130 246 / 1)',
    completed: 'rgb(17 171 66 / 1)',
    canceled: 'rgb(239 68 68 / 1)',
  }
  
  const handleChange = (e) => {
    setValue(e.target.value);
    dataBaseServise.updateOrder(order_id,  {order_status : e.target.value})
  };

  return (
    <div>
      <select
        value={value}
        onChange={handleChange}
        style={{background: order_color[value]}}
        className={`border-none text-sm rounded-lg p-1 outline-none text-white`}
      >
        <option value="pending">Pending</option>
        <option value="completed">Complete</option>
        <option value="canceled">Canceled</option>
      </select>
    </div>
  );
}

export default Select;
