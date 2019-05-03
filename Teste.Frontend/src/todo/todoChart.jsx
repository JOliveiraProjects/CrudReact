import { Chart } from 'react-google-charts'
import React from 'react'

 //https://react-google-charts.com/pie-chart
class TodoChart extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <Chart
        width={'100%'}
        height={'250px'}
        chartType="PieChart"
        data={[
          ['Task', 'Hours per Day'],
          ['Validando Documento', 50],
          ['Validando Cadastro', 36],
          ['Aguardando Desembolso', 14],
          ['Desembolsado', 30]
        ]}
        options={{
          title: 'Andamento do processo',
        }}
        rootProps={{ 'data-testid': '2' }}
        chartEvents={[
          {
            eventName: 'select',
            callback: (e) => {
              alert(e)
            },
          },
        ]}
      />
    );
  }
}
export default TodoChart;