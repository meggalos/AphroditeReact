import React from 'react'
import style from './Verify.Module.css'
import image from '../../images/Group 154.png'

const Verify = () => {
    return (
        <div>
            <div className={style.main}>
        <div className={style.btn}>
          <img src={image} alt="png" width="150px" />
        </div>
        <h2>Verify Your Account</h2>
        <br /><br />
        <p>
          Please verify your page with a photo,This will help<br />
          us to stop catfishing.
        </p>
        <br /><br />
        <button><h4>Verify</h4></button>
      </div>
        </div>
    )

}

export default Verify
