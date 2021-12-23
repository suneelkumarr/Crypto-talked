
import React from 'react';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line,Bar } from 'react-chartjs-2';
import { Col, Row, Typography } from 'antd';

const { Title } = Typography;

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimestamp = [];

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.data?.history[i].price);
  }

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString());
  }
  
  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: 'Price In USD',
        data: coinPrice,
        fill: false,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd',
      },
    ],
  };
  

  // const options = {
  //   scales: {
  //     yAxes: [
  //       {
  //         display: true,
  //         ticks: {
  //           suggestedMin: 0,   
  //           beginAtZero: true,
  //         },
  //       },
  //     ],
  //   },
  // };

//   var options = {
//     scales: {
//         yAxes: [{
//             display: true,
//             stacked: true,
//             ticks: {
//               suggestedMin: 0,   
//               beginAtZero: true,
//             }
//         }]
//     }
// };


let options = {
  scales: {
    y: {
      beginAtZero: true,
      suggestedMax: 69
    },
    ticks: {
      stepSize: 1
    }
  }
}

  return (
    <>
      <Row className="chart-header">
        <Title level={2} className="chart-title">{coinName} Price Chart </Title>
        <Col className="price-container">
          <Title level={5} className="price-change">Change: {coinHistory?.data?.change}%</Title>
          <Title level={5} className="current-price">Current {coinName} Price: $ {currentPrice}</Title>
        </Col>
      </Row>
      {/* <Line data={data}/> */}
    </>
  );
};

export default LineChart;