import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-chart',
  templateUrl: './widget-chart.component.html',
  styleUrls: ['./widget-chart.component.css']
})
export class WidgetChartComponent {
  Highcharts=Highcharts
  chartOptions={}
  constructor(){
    this.chartOptions={
        chart: {
          type: 'spline'
      },
      title: {
          text: 'Monthly Average Placements'
      },
      subtitle: {
          text: 'Source: Luminar Technolab' 
      },
      xAxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
              'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          accessibility: {
              description: 'Months of the year'
          }
      },
      yAxis: {
          title: {
              text: 'Placements'
          }
      },
      tooltip: {
          crosshairs: true,
          shared: true
      },
      credits:{
        enabled:false
      },
      plotOptions: {
          spline: {
              marker: {
                  radius: 4,
                  lineColor: '#666666',
                  lineWidth: 1
              }
          }
      },
      series: [{
          name: 'MEARN',
          marker: {
              symbol: 'square'
          },
          data: [5.2, 5.7, 8.7, 13.9, 18.2, 21.4, 25.0,  22.8, 17.5, 12.1, 7.6]
    
      }, {
          name: 'Python',
          marker: {
              symbol: 'diamond'
          },
          data: [1.6, 3.3, 5.9, 10.5, 13.5, 14.5, 14.4, 11.5, 8.7, 4.7, 2.6]
      }, {
        name: 'Big Data',
        marker: {
            symbol: 'rectangle'
        },
        data: [4.6, 4.3, 5.9, 11.5, 12.5, 15.5, 17.4, 14.5, 10.7, 8.7, 5.6]
    }, {
      name: 'Testing',
      marker: {
          symbol: 'circle'
      },
      data: [3.6, 4.3, 5.9, 10.5, 12.5, 14.5, 17.4, 11.5, 10.7, 6.7, 4.6]
    }]
      }
    
    // export chart
    HC_exporting(Highcharts);
  }
}
