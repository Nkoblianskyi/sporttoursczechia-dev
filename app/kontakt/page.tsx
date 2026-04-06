'use client'

import { Suspense } from 'react'
import { KontaktForm } from './kontakt-form'

export default function KontaktPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <KontaktForm />
    </Suspense>
  )
}
