/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import Chart from 'react-apexcharts';
import './Bar.css';

class Bar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [{
        data: [400, 430, 448, 470, 540, 580, 690],
      }],
      options: {
        chart: {
          type: 'bar',
          height: 350,
          background: '#fff',
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true,
          },
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: ['June', 'July', 'August', 'September', 'October', 'November', 'December',
          ],
        },
        title: {
          text: 'Barras',
          align: 'left',
          margin: 10,
          offsetX: 0,
          offsetY: 0,
          floating: false,
          style: {
            fontSize: '16px',
            fontWeight: 'bold',
            fontFamily: 'Montserrat',
            color: '#5D405C',
          },
        },
        colors: ['#E91E63'],
        customIcons: [{
          icon: '<img src="/img/icone-de-informacao.png" width="20">',
          index: 4,
          title: 'tooltip of the icon',
          class: 'custom-icon',
        }],
      },
    };
  }

  render() {
    return (
      <div className="bar">
        <Chart options={this.state.options} series={this.state.series} type="bar" width="500" />
      </div>
    );
  }
}

export default Bar;
