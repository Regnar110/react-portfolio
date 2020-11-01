import React from 'react';

const ModalTech = ({techs}) => {
    return(
    techs.map(element => {
        return(        
        <div className='tech'>
            {element}
        </div>
        )
    })
    )
}

export default ModalTech