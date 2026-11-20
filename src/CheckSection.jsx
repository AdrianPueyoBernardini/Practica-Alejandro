import { useEffect, useRef } from 'react'

export default function CheckSection() {
  const indeterminateLeft = useRef(null)
  const indeterminateRight = useRef(null)

  useEffect(() => {
    indeterminateLeft.current.indeterminate = true
    indeterminateRight.current.indeterminate = true
  }, [])

  return (
    <section className="check-section">
      <div className="check-column">
        <label>
          <input type="checkbox" />
          <span>not selected</span>
        </label>

        <label>
          <input type="checkbox" defaultChecked />
          <span>selected</span>
        </label>

        <label>
          <input ref={indeterminateLeft} type="checkbox" />
          <span>indeterminate</span>
        </label>
      </div>

      <div className="check-column">
        <label>
          <input type="checkbox" />
          <span>not selected</span>
        </label>

        <label>
          <input type="checkbox" defaultChecked />
          <span>selected</span>
        </label>

        <label>
          <input ref={indeterminateRight} type="checkbox" />
          <span>indeterminate</span>
        </label>
      </div>
    </section>
  )
}