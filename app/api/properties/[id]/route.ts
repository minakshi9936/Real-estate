import { NextResponse } from 'next/server'
import { getPropertyById } from '@/lib/properties'

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const property = getPropertyById(parseInt(params.id))

    if (!property) {
      return NextResponse.json(
        { error: 'Property not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(property)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch property' },
      { status: 500 }
    )
  }
}
