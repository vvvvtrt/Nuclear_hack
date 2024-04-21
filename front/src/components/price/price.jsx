import React, {useState, useEffect} from 'react';
import { Checkbox} from 'antd';
import { InputNumber } from 'antd';
import type { RadioChangeEvent } from 'antd';
import { Radio } from 'antd';
import './price.css'

function Price(props){

  const [value, setValue] = useState(1);
  const [data, setData] = useState({});
   

    function onChangePrice(){
       console.log("Changed")
    }

    function onChangeNum(value) {
        console.log('changed', value);
      }

    const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
    }


    // 1 - цена родителя, 2 - собственная цена [изначально приходит цена с бека(если есть), устанавливается значение Radio 1, если нет собсвтенной цены, цена родителя
  // устанавливается в radio свойство 2]
    const onChangeRadio = (e) => {
      console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    useEffect(() =>{
      fetch('', {
        method: 'GET',
        headers: {},
      })
      .then(data => {setData(data.json())})
      .catch(err => console.log(err))

    }, [])


    return(<div className="wrapper-price">

    <div className="wrapper-change-price">
      
    <Radio.Group className="price-radio" onChange={onChangeRadio} value={value}>
    <Radio value={1}>Использовать цену родителя</Radio>
      <Radio value={2}>Определить цену для вершины</Radio>
    </Radio.Group>

    <InputNumber
     className = "inp price-inp"
      defaultValue={1000}
      formatter={value => `₽ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      parser={value => value.replace(/\₽\s?|(,*)/g, '')}
      onChange={onChangePrice}
    />


    </div>

   
    <div className="wrapper-with-salle">
     <Checkbox onChange={onChange}>Применить скидку</Checkbox>
     <InputNumber
     className = "inp salledprice-inp"
      defaultValue={1000}
      formatter={value => `₽ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      parser={value => value.replace(/\₽\s?|(,*)/g, '')}
      onChange={onChangeNum}
    />
    </div>
    </div>
    
    )
}

export default Price;