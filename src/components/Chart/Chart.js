import "./Chart.scss"
import ChartBar from "./ChartBar/ChartBar"

export default function Chart({ dataPoints }) {
  const dataPointsValues = dataPoints.map(e => e.value)
  const maxValue = Math.max(...dataPointsValues)
  console.log(maxValue)
  return (
    <div className='chart'>
      {dataPoints.map((e) => (
        <ChartBar maxValue={maxValue} value={e.value} label={e.label} key={e.id}/>
      ))}
      <span>{'$' + maxValue}</span>
    </div>
  )
}
