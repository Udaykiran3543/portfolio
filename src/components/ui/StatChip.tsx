import { GlowCard } from './spotlight-card'

type StatChipProps = {
  value: string
  label: string
  glowColor?: 'blue' | 'purple' | 'green' | 'red' | 'orange'
}

export function StatChip({ value, label, glowColor = 'purple' }: StatChipProps) {
  return (
    <GlowCard glowColor={glowColor} customSize className="h-full w-full !rounded-xl !p-4">
      <p className="text-2xl font-semibold text-gradient">{value}</p>
      <p className="mt-1 text-sm text-muted">{label}</p>
    </GlowCard>
  )
}
