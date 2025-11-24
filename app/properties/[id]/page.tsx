import { Metadata } from 'next'
import PropertyDetails from '@/components/PropertyDetails'
import { getPropertyById } from '@/lib/properties'

export async function generateMetadata(
  { params }: { params: { id: string } }
): Promise<Metadata> {
  const property = getPropertyById(parseInt(params.id))

  if (!property) {
    return {
      title: 'Property Not Found',
      description: 'The property you are looking for does not exist.',
    }
  }

  return {
    title: `${property.title} - Shristi Properties`,
    description: property.description,
    openGraph: {
      title: property.title,
      description: property.description,
      images: [property.imageURL],
    },
  }
}

export default function PropertyDetailsPage({
  params,
}: {
  params: { id: string }
}) {
  return (
    <div className="min-h-screen bg-white">
      <PropertyDetails propertyId={parseInt(params.id)} />
    </div>
  )
}
