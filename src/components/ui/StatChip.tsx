type StatChipProps = {
  value: string
  label: string
}

export function StatChip({ value, label }: StatChipProps) {
  return (
    <div className="rounded-xl border border-white/10 bg-surface p-4">
      <p className="text-2xl font-semibold text-gradient">{value}</p>
      <p className="mt-1 text-sm text-muted">{label}</p>
    </div>
  )
}
