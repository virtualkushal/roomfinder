import { Star } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Sudip Dhungana",
    location: "Kathmandu",
    rating: 5,
    text: "I found my perfect room in Thamel within just 2 days of using this platform. The verification process gave me confidence, and the owner was exactly as described in the profile.",
    image: "/placeholder.svg?height=100&width=100&text=SD",
  },
  {
    name: "Kushal Acharya",
    location: "Lalitpur",
    rating: 5,
    text: "As a student, I was worried about finding affordable accommodation near my college. This website made it so easy to filter by budget and location. Now I have a great room with amazing roommates!",
    image: "/placeholder.svg?height=100&width=100&text=KA",
  },
  {
    name: "Aditya Bajracharya",
    location: "Bhaktapur",
    rating: 4,
    text: "I've been renting out my spare rooms for years, but this platform has made it so much easier to find reliable tenants. The verification system works both ways, which I really appreciate.",
    image: "/placeholder.svg?height=100&width=100&text=AB",
  },
]

export function Testimonials() {
  return (
    <section className="container py-16">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold tracking-tight">What Our Users Say</h2>
        <p className="mt-2 text-muted-foreground">
          Hear from people who found their perfect rooms through our platform
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="overflow-hidden border-2 border-blue-200 bg-gradient-to-b from-blue-50 to-white">
            <CardContent className="p-6">
              <div className="mb-4 flex items-center gap-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="h-14 w-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>

              <div className="mb-4 flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "fill-muted text-muted"
                    }`}
                  />
                ))}
              </div>

              <p className="text-muted-foreground">{testimonial.text}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

