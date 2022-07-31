import Chart from '../../Chart/Chart'
import './ExpenseChart.scss'
import { v4 as uuidv4 } from "uuid"
export default function ExpenseChart({filteredArr}) {
    const dataPoints = [
        {label: 'Jan', value: 0, id: uuidv4()},
        {label: 'Feb', value: 0, id: uuidv4()},
        {label: 'Mar', value: 0, id: uuidv4()},
        {label: 'Apr', value: 0, id: uuidv4()},
        {label: 'May', value: 0, id: uuidv4()},
        {label: 'Jun', value: 0, id: uuidv4()},
        {label: 'Jul', value: 0, id: uuidv4()},
        {label: 'Aug', value: 0, id: uuidv4()},
        {label: 'Sep', value: 0, id: uuidv4()},
        {label: 'Oct', value: 0, id: uuidv4()},
        {label: 'Nov', value: 0, id: uuidv4()},
        {label: 'Dec', value: 0, id: uuidv4()},
    ]
    filteredArr.map((e) => {
        const date = new Date(e.date)
        dataPoints[date.getMonth()].value += Number(e.amount)
        return e
    })
  
    return <Chart dataPoints={dataPoints}/>
}