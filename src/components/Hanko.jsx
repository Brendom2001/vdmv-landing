// Selo hanko — carimbo circular vermelho, usado como marcador de seção e selo de garantia.
export default function Hanko({ size = 56, className = '', tone = 'shu' }) {
  const colorClass = tone === 'kin' ? 'border-kin text-kin' : 'border-shu text-shu'
  const innerBorderClass = tone === 'kin' ? 'border-kin/40' : 'border-shu/40'

  return (
    <div
      className={`relative flex shrink-0 items-center justify-center rounded-full border-2 ${colorClass} ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <span
        className="font-display leading-none"
        style={{ fontSize: size * 0.45 }}
      >
        変
      </span>
      <span className={`absolute inset-0 rounded-full border ${innerBorderClass}`} style={{ margin: 3 }} />
    </div>
  )
}
