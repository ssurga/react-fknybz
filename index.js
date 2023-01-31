import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Line } from '@ant-design/plots';

const DemoLine = () => {

  const [data, setData] = useState([

  {
    "mes": "2016-12",
    "value": 100,
    "category": "IPC Sukia"
  },
  {
    "mes": "2016-12",
    "value": 99,
    "category": "Fomento"
  },
  {
    "mes": "2016-12",
    "value": 101,
    "category": "Hacienda"
  },
  {
    "mes": "2016-12",
    "value": 103,
    "category": "Índice ACR"
  },
  {
    "mes": "2016-12",
    "value": 98,
    "category": "IPC INE"
  },
  {
    "mes": "2017-03",
    "value": 102,
    "category": "IPC Sukia"
  },
  {
    "mes": "2017-03",
    "value": 100,
    "category": "Fomento"
  },
  {
    "mes": "2017-03",
    "value": 102.44,
    "category": "Hacienda"
  },
  {
    "mes": "2017-03",
    "value": 104,
    "category": "Índice ACR"
  },
  {
    "mes": "2017-03",
    "value": 99.5,
    "category": "IPC INE"
  },
  {
    "mes": "2017-06",
    "value": 104,
    "category": "IPC Sukia"
  },
  {
    "mes": "2017-06",
    "value": 102,
    "category": "Fomento"
  },
  {
    "mes": "2017-06",
    "value": 104.5,
    "category": "Hacienda"
  },
  {
    "mes": "2017-06",
    "value": 105,
    "category": "Índice ACR"
  },
  {
    "mes": "2017-06",
    "value": 101,
    "category": "IPC INE"
  },
  {
    "mes": "2017-09",
    "value": 105.5,
    "category": "IPC Sukia"
  },
  {
    "mes": "2017-09",
    "value": 103,
    "category": "Fomento"
  },
  {
    "mes": "2017-09",
    "value": 106,
    "category": "Hacienda"
  },
  {
    "mes": "2017-09",
    "value": 106.5,
    "category": "Índice ACR"
  },
  {
    "mes": "2017-09",
    "value": 102.7,
    "category": "IPC INE"
  },
  {
    "mes": "2017-12",
    "value": 107,
    "category": "IPC Sukia"
  },
  {
    "mes": "2017-12",
    "value": 105,
    "category": "Fomento"
  },
  {
    "mes": "2017-12",
    "value": 107.5,
    "category": "Hacienda"
  },
  {
    "mes": "2017-12",
    "value": 108,
    "category": "Índice ACR"
  },
  {
    "mes": "2017-12",
    "value": 104,
    "category": "IPC INE"
  },
  {
    "mes": "2018-03",
    "value": 108,
    "category": "IPC Sukia"
  },
  {
    "mes": "2018-03",
    "value": 106,
    "category": "Fomento"
  },
  {
    "mes": "2018-03",
    "value": 108.5,
    "category": "Hacienda"
  },
  {
    "mes": "2018-03",
    "value": 109,
    "category": "Índice ACR"
  },
  {
    "mes": "2018-03",
    "value": 105,
    "category": "IPC INE"
  },
  {
    "mes": "2018-06",
    "value": 107,
    "category": "IPC Sukia"
  },
  {
    "mes": "2018-06",
    "value": 105,
    "category": "Fomento"
  },
  {
    "mes": "2018-06",
    "value": 107.5,
    "category": "Hacienda"
  },
  {
    "mes": "2018-06",
    "value": 108,
    "category": "Índice ACR"
  },
  {
    "mes": "2018-06",
    "value": 104,
    "category": "IPC INE"
  },
  {
    "mes": "2018-09",
    "value": 109.5,
    "category": "IPC Sukia"
  },
  {
    "mes": "2018-09",
    "value": 106.75,
    "category": "Fomento"
  },
  {
    "mes": "2018-09",
    "value": 109.8,
    "category": "Hacienda"
  },
  {
    "mes": "2018-09",
    "value": 110,
    "category": "Índice ACR"
  },
  {
    "mes": "2018-09",
    "value": 105.7,
    "category": "IPC INE"
  },
  {
    "mes": "2018-12",
    "value": 110,
    "category": "IPC Sukia"
  },
  {
    "mes": "2018-12",
    "value": 108,
    "category": "Fomento"
  },
  {
    "mes": "2018-12",
    "value": 111,
    "category": "Hacienda"
  },
  {
    "mes": "2018-12",
    "value": 111.5,
    "category": "Índice ACR"
  },
  {
    "mes": "2018-12",
    "value": 107,
    "category": "IPC INE"
  },
  {
    "mes": "2019-03",
    "value": 109.5,
    "category": "IPC Sukia"
  },
  {
    "mes": "2019-03",
    "value": 108,
    "category": "Fomento"
  },
  {
    "mes": "2019-03",
    "value": 110.5,
    "category": "Hacienda"
  },
  {
    "mes": "2019-03",
    "value": 111.5,
    "category": "Índice ACR"
  },
  {
    "mes": "2019-03",
    "value": 108,
    "category": "IPC INE"
  },
  {
    "mes": "2019-06",
    "value": 111,
    "category": "IPC Sukia"
  },
  {
    "mes": "2019-06",
    "value": 109.5,
    "category": "Fomento"
  },
  {
    "mes": "2019-06",
    "value": 112,
    "category": "Hacienda"
  },
  {
    "mes": "2019-06",
    "value": 113,
    "category": "Índice ACR"
  },
  {
    "mes": "2019-06",
    "value": 109,
    "category": "IPC INE"
  },
  
  ]);


  const config = {
    data,
    xField: 'mes',
    yField: 'value',
    geometryOptions: [
      {
        geometry: 'line',
        smooth: true,
        color: '#5B8FF9',
        label: {
          formatter: (datum) => {
            return `${datum.value}`;
          }}}],
    seriesField: 'category',
    xAxis: {
      type: 'time',
      label: {
        offsetX:50,
      rotate:-99},
    },
    yAxis: {
      minLimit:90,
  
      label: {
        // 数值格式化为千分位
        formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
      },

      
    },
    slider: {
      start: 0,
      end: 1,
    },

    
    
  };

  return <Line {...config} />;
};

ReactDOM.render(<DemoLine />, document.getElementById('container'));
