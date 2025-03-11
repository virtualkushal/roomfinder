import Link from "next/link"
import {
  Bath,
  Bed,
  Building,
  Calendar,
  Check,
  ChevronLeft,
  MapPin,
  MessageSquare,
  Phone,
  Share2,
  Star,
  Wifi,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RoomReviews } from "@/components/room-reviews"

export default function RoomDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="container py-8">
      {/* Breadcrumb */}
      <div className="mb-4">
        <Link href="/rooms" className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
          <ChevronLeft className="h-4 w-4" />
          Back to search results
        </Link>
      </div>

      {/* Room Title */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Modern Single Room in Patan</h1>
        <div className="mt-2 flex flex-wrap items-center gap-3 text-sm">
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <span>Patan, Lalitpur</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">4.8</span>
            <span className="text-muted-foreground">(24 reviews)</span>
          </div>
        </div>
      </div>

      {/* Room Images */}
      <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="col-span-full lg:col-span-2">
          <img
            src="/placeholder.svg?height=500&width=800"
            alt="Room main view"
            className="h-full w-full rounded-lg object-cover"
          />
        </div>
        <div className="hidden grid-rows-2 gap-4 lg:grid">
          <img
            src="/placeholder.svg?height=240&width=400"
            alt="Room view 2"
            className="h-full w-full rounded-lg object-cover"
          />
          <img
            src="/placeholder.svg?height=240&width=400"
            alt="Room view 3"
            className="h-full w-full rounded-lg object-cover"
          />
        </div>
      </div>

      {/* Room Details */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Tabs defaultValue="details">
            <TabsList className="mb-4 grid w-full grid-cols-3 bg-gradient-to-r from-blue-500 to-indigo-500">
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="amenities">Amenities</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>

            <TabsContent value="details" className="space-y-6">
              <div>
                <h2 className="mb-3 text-xl font-semibold">Room Description</h2>
                <p className="text-muted-foreground">
                  This modern single room is located in the heart of Patan, just a 5-minute walk from Patan Durbar
                  Square. The room is fully furnished with a comfortable bed, study table, wardrobe, and has an attached
                  bathroom. It's perfect for students or working professionals looking for a clean, quiet place to stay.
                </p>
                <p className="mt-3 text-muted-foreground">
                  The property is located in a safe neighborhood with plenty of restaurants, cafes, and shops nearby.
                  Public transportation is easily accessible, making it convenient to travel around the city.
                </p>
              </div>

              <Separator />

              <div>
                <h2 className="mb-3 text-xl font-semibold">Room Details</h2>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                  <div className="flex items-center gap-2">
                    <Building className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Room Type</p>
                      <p className="text-sm text-muted-foreground">Single Room</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bed className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Bed</p>
                      <p className="text-sm text-muted-foreground">Single Bed</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bath className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Bathroom</p>
                      <p className="text-sm text-muted-foreground">Attached</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Available From</p>
                      <p className="text-sm text-muted-foreground">Immediately</p>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h2 className="mb-3 text-xl font-semibold">Location</h2>
                <div className="h-[300px] w-full overflow-hidden rounded-lg bg-muted">
                  <img
                    src="/placeholder.svg?height=300&width=800&text=Google+Map"
                    alt="Location map"
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Located in Patan, Lalitpur. Near Patan Durbar Square.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="amenities" className="space-y-6">
              <h2 className="mb-3 text-xl font-semibold">Amenities & Facilities</h2>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                <div className="flex items-center gap-2">
                  <Wifi className="h-5 w-5 text-primary" />
                  <span>WiFi</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Attached Bathroom</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Furnished</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>24/7 Water Supply</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Kitchen Access</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Parking</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Laundry</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Study Table</span>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="reviews">
              <RoomReviews />
            </TabsContent>
          </Tabs>
        </div>

        {/* Booking Card */}
        <div>
          <Card className="sticky top-24 border-2 border-blue-200 bg-gradient-to-b from-blue-50 to-white">
            <CardContent className="p-6">
              <div className="mb-4">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">Rs. 8,000</span>
                  <span className="text-sm text-muted-foreground">per month</span>
                </div>
                <div className="mt-1 flex items-center gap-1 text-sm">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">4.8</span>
                  <span className="text-muted-foreground">(24 reviews)</span>
                </div>
              </div>

              <Separator className="mb-4" />

              <div className="mb-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Security Deposit</span>
                  <span className="font-medium">Rs. 8,000</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Minimum Stay</span>
                  <span className="font-medium">3 months</span>
                </div>
              </div>

              <div className="space-y-3">
                <Button className="w-full gap-2">
                  <MessageSquare className="h-4 w-4" />
                  Message Owner
                </Button>
                <Button variant="outline" className="w-full gap-2">
                  <Phone className="h-4 w-4" />
                  Call Owner
                </Button>
                <Button variant="ghost" className="w-full gap-2">
                  <Share2 className="h-4 w-4" />
                  Share
                </Button>
              </div>

              <div className="mt-6 rounded-lg border bg-muted/50 p-4">
                <div className="flex items-center gap-3">
                  <img
                    src="/placeholder.svg?height=50&width=50"
                    alt="Owner"
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium">Kushal Acharya</p>
                    <p className="text-sm text-muted-foreground">Room Owner</p>
                  </div>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Response rate: <span className="font-medium">95%</span>
                </p>
                <p className="text-sm text-muted-foreground">
                  Response time: <span className="font-medium">Within 2 hours</span>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

