import React, { useState } from 'react';
import data from '../../Data/data';

function Card() {
    const [datas, setData] = useState(data);

    return (
        <div className='card_body'>
            <div className="card_title">
                <h1>{datas.length} Birthdays Today</h1>
            </div>

            <div className='birthdays'>
                {datas.map((Datas) => {
                    return (
                        <div key={Datas.id} className="items">
                            <div className="item_img">
                                <img src={Datas.image} alt="" />
                            </div>
                            <div className="details">
                                <div className="name"><p>{Datas.name}</p></div>
                                <div className="age">{Datas.age} Years</div>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className="clear_btn">
                <button onClick={()=> setData([])}>Clear All</button>
            </div>
        </div>
    )
}

export default Card
