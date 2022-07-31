import "./Chart.scss"
import ChartBar from "./ChartBar/ChartBar"

export default function Chart({ dataPoints }) {
  const dataPointsValues = dataPoints.map(e => e.value)
  const maxValue = Math.max(...dataPointsValues)

  return (
    <div className='chart container'>
      {dataPoints.map((e) => (
        <ChartBar maxValue={maxValue} value={e.value} label={e.label} key={e.id}/>
      ))}
      <span className="chart__max-value text--secondary text-color--secondary">{'max value: $' + maxValue}</span>
    </div>
  )
}
