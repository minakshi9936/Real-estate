import { NextResponse } from 'next/server'
import { getAllProperties } from '@/lib/properties'

export async function GET() {
  try {
    const properties = getAllProperties()
    return NextResponse.json(properties)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch properties' },
      { status: 500 }
    )
  }
}
