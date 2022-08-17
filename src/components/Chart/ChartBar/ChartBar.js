import "./ChartBar.scss"
import { CSSTransition } from "react-transition-group"
import { useEffect, useState } from "react"

export default function ChartBar({ label, value, maxValue }) {
  const [inlineIsOpen, setInlineIsOpen] = useState(false)

  useEffect(() => {
    setInlineIsOpen(true)
  }, [])

  let fillHeight = "0%"
  if (maxValue > 0) {
    fillHeight = Math.round((value / maxValue) * 100) + "%"
  }
  return (
    <div className='chart-bar'>
      <div className='chart-bar__outline'>
        <CSSTransition
          in={inlineIsOpen}
          classNames='chart-bar__inline'
          mountOnEnter
          unmountOnExit
          timeout={1500}>
          <div
            className='chart-bar__inline'
            style={{ height: fillHeight }}></div>
        </CSSTransition>
      </div>
      <span className='chart-bar__label text--chart-label text-color--secondary'>
        {label}
      </span>
    </div>
  )
}
