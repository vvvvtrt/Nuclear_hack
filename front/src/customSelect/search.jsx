import React, {useState, useEffect} from 'react'
import './select.css'
import { Input } from 'antd';

const Search = Input.Search;

function LocSearch(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState('Выберите страну');


const handleClick = (e) => {
    if (!e.target.closest('.search')) {
        setIsOpen(false);
    }
}

return(
    <div className="select">
           <Search
                placeholder="Введите город"
                style={{ width: '90%', background: 'black', color: 'white' }}
                onSearch={value => console.log(value)}
                />
    </div>

);
}

export default LocSearch;