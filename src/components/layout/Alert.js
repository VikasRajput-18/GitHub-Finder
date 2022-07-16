import React from 'react'
import { useAlertContext } from '../../Context/alert/AlertContext';
import { AiFillCloseCircle } from "react-icons/ai";

const Alert = () => {
    const {alert} = useAlertContext()
  return (
    <div>
      {alert !== null ? (
        <p className=" flex items-center mb-6 gap-2 mx-6">
          {" "}
          <AiFillCloseCircle className='text-red-300' />
          <span> *{alert.msg}* </span>
        </p>
      ) : (
        ""
      )}
    </div>
  );
}

export default Alert