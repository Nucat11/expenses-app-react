import Chart from '../../Chart/Chart'
import './ExpenseChart.scss'

export default function ExpenseChart({filteredArr}) {
    const dataPoints = [
        {label: 'Jan', value: 0},
        {label: 'Feb', value: 0},
        {label: 'Mar', value: 0},
        {label: 'Apr', value: 0},
        {label: 'May', value: 0},
        {label: 'Jun', value: 0},
        {label: 'Jul', value: 0},
        {label: 'Aug', value: 0},
        {label: 'Sep', value: 0},
        {label: 'Oct', value: 0},
        {label: 'Nov', value: 0},
        {label: 'Dec', value: 0},
    ]
    filteredArr.map((e) => {
        const date = new Date(e.date)
        dataPoints[date.getMonth()].value += Number(e.amount)
        return e
    })
  
    return <Chart dataPoints={dataPoints}/>
}