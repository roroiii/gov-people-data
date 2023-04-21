import React, { useRef } from 'react';
import Highcharts from 'highcharts';
import HighchartsExporting from 'highcharts/modules/exporting';
import HighchartsReact from 'highcharts-react-official';
import accessibility from 'highcharts/modules/accessibility';

if (typeof Highcharts === 'object') {
  HighchartsExporting(Highcharts);
  accessibility(Highcharts);
}

export default function ColumnChart(props: HighchartsReact.Props) {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);
  const { peopleData } = props;

  if (peopleData) {
    const { year = '', county = '', town = '' } = peopleData ?? {}; // 確保初始值不會印出 undefined
    const columnOptionsTitle = `${year}年 ${county}${town}`;

    const columnOptions: Highcharts.Options = {
      title: {
        text: columnOptionsTitle,
      },
      chart: {
        backgroundColor: 'transparent',
      },
      accessibility: {
        enabled: true, // 啟用 accessibility 功能
        description: '人口數、戶數按戶別及性別統計，統計男性與女性的共同生活與獨立生活數據。',
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0,
          dataLabels: {
            enabled: true,
            formatter: function () {
              return Highcharts.numberFormat(this.y!, 0, '.', ',');
            },
          },
        },
      },
      series: [
        {
          type: 'column',
          name: '男性',
          data: [peopleData.values.ordinary_m, peopleData.values.single_m],
        },
        {
          type: 'column',
          name: '女性',
          data: [peopleData.values.ordinary_f, peopleData.values.single_f],
        },
      ],
      xAxis: {
        title: { text: '型態' },
        categories: ['共同生活', '獨立生活'],
      },
      yAxis: {
        allowDecimals: false,
        title: {
          align: 'high',
          text: '數量',
          rotation: 0,
          y: -10,
          x: 10,
        },
      },
      colors: ['#7d5fb2', '#c29fff'],
      credits: {
        enabled: false,
      },
      exporting: {
        buttons: {
          contextButton: {
            enabled: false,
          },
          exportButton: {
            enabled: false,
          },
          printButton: {
            enabled: false,
          },
        },
      },
    };

    return <HighchartsReact highcharts={Highcharts} options={columnOptions} ref={chartComponentRef} {...props} />;
  }

  return <></>;
}
