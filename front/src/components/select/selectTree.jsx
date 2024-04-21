import React, {useState} from 'react'
import { Select, Space } from 'antd';
import './selectTree.css'


  const SelectBar = () =>{

    const [data, setData] = useState();

    const handleChange = (value) => {
        console.log(`selected ${value}`);
      };

    return(<>
    <div className="select-wrapper">
    <select className="select-group" id="phone" name="phone">
                    <option value="iphone 6s">iPhone 6S</option>
                    <option value="lumia 950">Lumia 950</option>
                    <option value="nexus 5x">Nexus 5X</option>
                    <option value="galaxy s7">Galaxy S7</option>
    </select>

    <select className="select-group" id="phone" name="phone">
                    <option value="iphone 6s">iPhone 6S</option>
                    <option value="lumia 950">Lumia 950</option>
                    <option value="nexus 5x">Nexus 5X</option>
                    <option value="galaxy s7">Galaxy S7</option>
    </select>

    <select className="select-group" id="phone" name="phone">
                    <option value="iphone 6s">iPhone 6S</option>
                    <option value="lumia 950">Lumia 950</option>
                    <option value="nexus 5x">Nexus 5X</option>
                    <option value="galaxy s7">Galaxy S7</option>
    </select>

    <select className="select-group" id="phone" name="phone">
                    <option value="iphone 6s">iPhone 6S</option>
                    <option value="lumia 950">Lumia 950</option>
                    <option value="nexus 5x">Nexus 5X</option>
                    <option value="galaxy s7">Galaxy S7</option>
    </select>

          <Select
      style={{ width: 120 }}
      onChange={(e) => handleChange(e)}
      options={[
        { value: 'jack', label: 'Jack' },
        { value: 'lucy', label: 'Lucy' },
        { value: 'Yiminghe', label: 'yiminghe' },
        { value: 'disabled', label: 'Disabled', disabled: true },
      ]}
    />

    <Select
    defaultValue="lucy"
    style={{
      width: 120,
    }}
    onChange={(e) =>handleChange(e)}
    options={[
      {
        value: 'jack',
        label: 'Jack',
      },
      {
        value: 'lucy',
        label: 'Lucy',
      },
      {
        value: 'Yiminghe',
        label: 'yiminghe',
      },
      {
        value: 'disabled',
        label: 'Disabled',
        disabled: true,
      },
    ]}
    />

    <Select
    defaultValue="lucy"
    style={{
      width: 120,
    }}
    onChange={(e) =>handleChange(e)}
    options={[
      {
        value: 'jack',
        label: 'Jack',
      },
      {
        value: 'lucy',
        label: 'Lucy',
      },
      {
        value: 'Yiminghe',
        label: 'yiminghe',
      },
      {
        value: 'disabled',
        label: 'Disabled',
        disabled: true,
      },
    ]}
    />
   </div>
    </>)
    
  }

  export default SelectBar;