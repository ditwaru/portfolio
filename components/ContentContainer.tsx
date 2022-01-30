import { ReactChild } from 'react'

export default function ContentContainer({
  children,
}: {
  children: ReactChild
}) {
  return (
    <main className="flex items-center justify-center py-2">{children}</main>
  )
}
