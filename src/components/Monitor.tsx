import styles from './Monitor.module.css'

function Monitor() {
  const specs = [
    { label: '~/experience', value: '4+ years · Software Engineer' },
    { label: '~/stack', value: '.NET · C# · React · Angular · TypeScript' },
    { label: '~/education', value: 'B.Sc. Software Engineering' },
    { label: '~/location', value: 'Skopje, North Macedonia' },
  ]

  return (
    <>
      <div
        className={`relative w-full max-w-md overflow-hidden px-7 py-8 ${styles.bezel} ${styles.screen}`}
      >
        <p className="text-muted mb-5 text-xs">
          <span className="text-accent">~</span>$ tree -L 1
        </p>
        <ul className="grid gap-3 text-[13px]">
          {specs.map((spec) => (
            <li key={spec.label} className="grid gap-0.5">
              <span className="text-accent">{spec.label}</span>
              <span className="text-neutral-300">{spec.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Monitor
