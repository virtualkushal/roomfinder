import Link from "next/link"
import { MapPin, Star } from "lucide-react"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface RoomCardProps {
  id: string
  title: string
  location: string
  price: number
  type: string
  rating: number
  reviewCount: number
  imageUrl: string
  className?: string
}

export function RoomCard({
  id,
  title,
  location,
  price,
  type,
  rating,
  reviewCount,
  imageUrl,
  className,
}: RoomCardProps) {
  return (
    <Card
      className={cn(
        "overflow-hidden transition-all hover:shadow-md border-2 border-blue-200 bg-gradient-to-b from-blue-50 to-white",
        className,
      )}
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          className="h-full w-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <Badge variant="outline" className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white border-0">
            {type}
          </Badge>
          <div className="flex items-center gap-1 text-sm">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{rating}</span>
            <span className="text-muted-foreground">({reviewCount})</span>
          </div>
        </div>
        <h3 className="line-clamp-1 text-lg font-semibold">{title}</h3>
        <div className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span>{location}</span>
        </div>
        <div className="mt-3">
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Rs. {price.toLocaleString()}
          </span>
          <span className="text-sm text-muted-foreground"> / month</span>
        </div>
      </CardContent>
      <CardFooter className="border-t p-4 pt-3">
        <Button className="w-full" asChild>
          <Link href={`/rooms/${id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

