import "./ChartBar.scss"

export default function ChartBar({ label, value, maxValue }) {
  let fillHeight = '0%'
  if(maxValue > 0) {
    fillHeight = Math.round((value / maxValue) * 100) + '%'
  }
  return (
    <div className='chart-bar'>
      <div className='chart-bar__outline'>
        <div className='chart-bar__inline' style={{height: fillHeight}}></div>
      </div>
      <span className="chart-bar__label text--chart-label text-color--secondary">{label}</span>
    </div>
  )
}
