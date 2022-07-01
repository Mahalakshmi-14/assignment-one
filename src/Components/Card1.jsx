import React,{useState} from 'react'
import '../Components/Card1.css'
function Card1() {
    const[cardTrue,setCardTrue]=useState(true)

const clickEvent = ()=>{
    setCardTrue(active =>!active)
}
    return (
        <div>
            <h2>
                My first Assignment
            </h2>
            <div className='card-section'>
           <div className={cardTrue ? 'firstcard' : 'firstCardinactive'}>
          <p>By clicking on buton the background color of other button will change .</p>
          <button onClick={clickEvent}>Click Here</button>
        </div>
        <div className={cardTrue ? 'secondCardinactive' : 'secondcard'}>
          <p>By clicking on buton the background color of other button will change.</p>
          <button onClick={clickEvent}>Click Here</button>
        </div>
      </div>
        </div>
    )
  }
export default Card1




