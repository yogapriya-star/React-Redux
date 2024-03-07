import React from 'react'

function Promotion({couponCode, setCouponCode, applyCoupon, inputEl}) {
  return (
    <div>
        <label>
            Coupon Code:
            <input type='text' value={couponCode} onChange={(e) => setCouponCode(e.target.value)} ref={inputEl}/>
        </label>
        <button onClick={applyCoupon}>Apply</button>
    </div>
  )
}

export default Promotion