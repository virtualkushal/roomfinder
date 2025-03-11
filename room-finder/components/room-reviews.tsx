import { Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"

const reviews = [
  {
    id: 1,
    name: "Sudip Dhungana",
    date: "2 months ago",
    rating: 5,
    comment:
      "I stayed in this room for 6 months and had a great experience. The location is perfect, close to everything you need. The owner is very responsive and helpful. The room is exactly as described and shown in the pictures.",
    avatar: "/placeholder.svg?height=50&width=50&text=SD",
  },
  {
    id: 2,
    name: "Kushal Acharya",
    date: "3 months ago",
    rating: 4,
    comment:
      "Good room with all the basic amenities. The location is convenient with many shops and restaurants nearby. The only issue I had was with the water pressure in the bathroom, but it was manageable.",
    avatar: "/placeholder.svg?height=50&width=50&text=KA",
  },
  {
    id: 3,
    name: "Ayush Ranjitkar",
    date: "4 months ago",
    rating: 5,
    comment:
      "Excellent room in a great location. The owner is very friendly and accommodating. The room is clean, well-maintained, and has all the necessary amenities. Highly recommended!",
    avatar: "/placeholder.svg?height=50&width=50&text=AR",
  },
]

export function RoomReviews() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Reviews</h2>

      {/* Rating Summary */}
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-3xl font-bold">4.8</span>
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${i < 5 ? "fill-yellow-400 text-yellow-400" : "fill-muted text-muted"}`}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">(24 reviews)</span>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-12 text-sm">5 stars</span>
              <Progress value={85} className="h-2 w-full" />
              <span className="w-8 text-right text-sm text-muted-foreground">85%</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-12 text-sm">4 stars</span>
              <Progress value={10} className="h-2 w-full" />
              <span className="w-8 text-right text-sm text-muted-foreground">10%</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-12 text-sm">3 stars</span>
              <Progress value={5} className="h-2 w-full" />
              <span className="w-8 text-right text-sm text-muted-foreground">5%</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-12 text-sm">2 stars</span>
              <Progress value={0} className="h-2 w-full" />
              <span className="w-8 text-right text-sm text-muted-foreground">0%</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-12 text-sm">1 star</span>
              <Progress value={0} className="h-2 w-full" />
              <span className="w-8 text-right text-sm text-muted-foreground">0%</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 rounded-lg border bg-muted/30 p-6 text-center">
          <h3 className="text-lg font-medium">Have you stayed here?</h3>
          <p className="text-sm text-muted-foreground">Share your experience to help other room seekers</p>
          <Button>Write a Review</Button>
        </div>
      </div>

      <Separator />

      {/* Reviews List */}
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="space-y-2">
            <div className="flex items-center gap-3">
              <img
                src={review.avatar || "/placeholder.svg"}
                alt={review.name}
                className="h-10 w-10 rounded-full object-cover"
              />
              <div>
                <h4 className="font-medium">{review.name}</h4>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>{review.date}</span>
                  <span>•</span>
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3 w-3 ${
                          i < review.rating ? "fill-yellow-400 text-yellow-400" : "fill-muted text-muted"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">{review.comment}</p>
            <Separator className="mt-4" />
          </div>
        ))}

        <Button variant="outline" className="w-full">
          Load More Reviews
        </Button>
      </div>
    </div>
  )
}

