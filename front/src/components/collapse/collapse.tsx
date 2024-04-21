import React from 'react';
import { CaretRightOutlined } from '@ant-design/icons';
import type { CSSProperties } from 'react';

import type { CollapseProps } from 'antd';
import { Collapse, theme } from 'antd';
import SelectBar from '../select/selectTree';
import SelectLocation from '../select/selectLocation';
import Select from '../../customSelect/LocSelect.jsx';
import LocSelect2 from '../../customSelect/LocSeelct2.jsx';
import PriceSelect from '../../customSelect/PriceSelect.jsx';
import CatSelect2 from '../../customSelect/CatSelect2.jsx';
import LocSearch from '../../customSelect/search.jsx';

import './collapse.css'

import {CaretDownFilled} from '@ant-design/icons'
import LocSelect from '../../customSelect/LocSelect.jsx';
import CatSelect from '../../customSelect/CatalogSelect.jsx';
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const getItems: (panelStyle: CSSProperties) => CollapseProps['items'] = (panelStyle) => [
  {
    key: '1',
    label: <p className="collapse-p loc">Локация: местоположение объявлений</p>,
    children: <>
      <LocSelect data={[ 'hi', 'hello', 'third item']}/>
      <LocSelect2 data={['hi', 'hello', 'third item']}/>
      <LocSearch/>
      </>,
    style: panelStyle,
  },
  {
    key: '2',
    label: <p className="collapse-p rank">Категория: тип объявления</p>,
    children: <>
      <CatSelect data={['hi', 'hello', 'third item']}/>
      <CatSelect2 data={['hi', 'hello', 'third item']}/>
      <LocSearch placeholder=""/>
    </>,
    style: panelStyle,
  },
  {
    key: '3',
    label: <p className="collapse-p price">Стоимость: ценообразование</p>,
    children:  <>
    <PriceSelect data={['hi', 'hello', 'third item']}/>
    {/* <LocSelect2 data={['hi', 'hello', 'third item']}/> */}
  </>,
    style: panelStyle,
  },
  // {
  //   key: '3',
  //   label: <p className="collapse-p price">Стоимость: ценообразование</p>,
  //   children: <Select data={['Выберите страну', 'hi', 'hello', 'third item']}/>,
  //   style: panelStyle,
  // },
];

const CollapseReg = () => {
  const { token } = theme.useToken();

  const panelStyle: React.CSSProperties = {
    marginBottom: 10,
    background: '#2D212A',
    borderRadius: token.borderRadiusLG,
    border: 'none',
    color: '#fff'
  };

  return (
    <Collapse
      bordered={false}
      defaultActiveKey={['1']}
      expandIcon={({ isActive }) => <CaretDownFilled style={{color: 'white', position: 'absolute', right: '10px', fontSize: '22px'}} rotate={isActive ? 90 : 0} />}
      style={{ background: '#191016', color: '#fff' }}
      items={getItems(panelStyle)}
    />
  );
};

export default CollapseReg;