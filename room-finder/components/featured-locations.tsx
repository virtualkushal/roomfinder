import Link from "next/link"
import { MapPin } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

const locations = [
  {
    name: "Thamel",
    city: "Kathmandu",
    count: 124,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    name: "Patan",
    city: "Lalitpur",
    count: 98,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    name: "Jhamsikhel",
    city: "Lalitpur",
    count: 76,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    name: "Baluwatar",
    city: "Kathmandu",
    count: 65,
    image: "/placeholder.svg?height=200&width=300",
  },
]

export function FeaturedLocations() {
  return (
    <section className="bg-gradient-to-r from-purple-100 via-blue-100 to-pink-100 py-16">
      <div className="container">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Popular Locations</h2>
          <p className="mt-2 text-muted-foreground">Explore rooms in the most sought-after neighborhoods</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {locations.map((location) => (
            <Link key={location.name} href={`/rooms?location=${location.name}`} className="group">
              <Card className="overflow-hidden transition-all hover:shadow-md border-2 border-blue-200 bg-white">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={location.image || "/placeholder.svg"}
                    alt={location.name}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4 text-white">
                    <h3 className="text-xl font-semibold">{location.name}</h3>
                    <div className="mt-1 flex items-center gap-1 text-sm">
                      <MapPin className="h-4 w-4" />
                      <span>{location.city}</span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">{location.count}</span> rooms available
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

