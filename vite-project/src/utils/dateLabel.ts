export type DateLabelKind = 'today' | 'yesterday' | 'weekday'

const startOfDay = (date: Date) => new Date(date.getFullYear(), date.getMonth(), date.getDate())

const isSameDay = (a: Date, b: Date) =>
  a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate()

export const getDateLabel = (
  selectedDate: Date | null | undefined,
  options?: {
    now?: Date
    locale?: string
  },
): string => {
  const now = options?.now ?? new Date()
  const today = startOfDay(now)

  if (!(selectedDate instanceof Date)) return 'Today,'

  const chosen = startOfDay(selectedDate)

  if (isSameDay(chosen, today)) return 'Today,'

  const yesterday = new Date(today)
  yesterday.setDate(yesterday.getDate() - 1)
  if (isSameDay(chosen, yesterday)) return 'Yesterday,'

  const weekday = chosen.toLocaleDateString(options?.locale, { weekday: 'long' })
  return `${weekday},`
}
