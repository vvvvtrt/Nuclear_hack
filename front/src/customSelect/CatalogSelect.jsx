// import React from 'react'

// // props.data - массив данных для отображения в select



// function Select(props){
//     return( 
//         <div class="__select" data-state="">
//             <div class="__select__title" data-default="Option 0">Выберите страну</div>
//             {(props?.array).map((id, item) =>
//             <label for={"singleSelect4" + `${id}`} class={"__select__label" + `${id}`}>Option id</label>
//             )}
//             </div>

//     )
// }

import React, {useState, useEffect} from 'react'
import './select.css'

function CatSelect(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState('Выберите тип');

const toggleDropdown = () => {
    setIsOpen(!isOpen);
}

const selectItem = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
}

const handleClickOutside = (e) => {
    if (!e.target.closest('.select')) {
        setIsOpen(false);
    }
}

document.addEventListener('click', handleClickOutside);

// useEffect(() =>{
//     const selectHead = document.querySelector('.selectHead');
//     selectHead.innerText = 'Выберите страну';
// }, [])

return(
    <div className="select cat" style={{'margin-top': '20px'}}>
        <div className="selectHead cat" onClick={toggleDropdown}>
            {selectedItem}
        </div>
        {isOpen && 
            <div className="selectList cat">
                {props?.data.map((item, index) => (
                    <div key={index} className="selectitem cat" onClick={() => selectItem(item)}>
                        {item}
                    </div>
                ))}
            </div>
        }
    </div>

);
}

export default CatSelect;