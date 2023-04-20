import React, { useRef } from 'react';
import Highcharts from 'highcharts';
import HighchartsExporting from 'highcharts/modules/exporting';
import HighchartsReact from 'highcharts-react-official';

if (typeof Highcharts === 'object') {
  HighchartsExporting(Highcharts);
}

export default function PieChart(props: HighchartsReact.Props) {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);
  const { peopleData } = props;

  if (peopleData) {
    const pieOptions: Highcharts.Options = {
      title: {
        text: '戶數統計',
      },
      chart: {
        backgroundColor: 'transparent',
      },
      series: [
        {
          type: 'pie',
          name: '戶數統計',
          dataLabels: {
            enabled: true,
            format: '{point.percentage:.1f} %',
          },
          keys: ['name', 'y'],
          data: [
            ['共同生活', peopleData.values.ordinary],
            ['獨立生活', peopleData.values.single],
          ],
          showInLegend: true,
        },
      ],
      zAxis: {
        categories: ['共同生活', '獨立生活'],
      },
      colors: ['#A6B0F9', '#646EAD'],
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

    return <HighchartsReact highcharts={Highcharts} options={pieOptions} ref={chartComponentRef} {...props} />;
  }

  return <></>;
}
