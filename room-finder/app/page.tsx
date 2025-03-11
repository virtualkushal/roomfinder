import Link from "next/link"
import { Building, MapPin, Search, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { RoomCard } from "@/components/room-card"
import { FeaturedLocations } from "@/components/featured-locations"
import { HowItWorks } from "@/components/how-it-works"
import { Testimonials } from "@/components/testimonials"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative flex h-[600px] items-center justify-center bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-pink-500/20">
        <div className="absolute inset-0 z-0">
          <div className="h-full w-full bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center opacity-10"></div>
        </div>
        <div className="container z-10 px-4 text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-primary md:text-6xl">
            Find Your Perfect Room in Kathmandu & Lalitpur
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            Connect with verified room owners and find your ideal accommodation with ease. Thousands of options
            available for every budget.
          </p>

          {/* Search Bar */}
          <div className="mx-auto max-w-3xl rounded-lg bg-background p-4 shadow-lg">
            <div className="flex flex-col gap-4 md:flex-row">
              <div className="relative flex-1">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input placeholder="Location (e.g., Patan, Thamel)" className="pl-10" />
              </div>
              <div className="relative flex-1">
                <Building className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <select className="h-10 w-full rounded-md border border-input bg-background px-10 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                  <option value="">Room Type</option>
                  <option value="single">Single Room</option>
                  <option value="shared">Shared Room</option>
                  <option value="apartment">Apartment</option>
                  <option value="flat">Flat</option>
                </select>
              </div>
              <div className="relative flex-1">
                <Users className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <select className="h-10 w-full rounded-md border border-input bg-background px-10 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                  <option value="">Price Range</option>
                  <option value="0-5000">Under Rs. 5,000</option>
                  <option value="5000-10000">Rs. 5,000 - 10,000</option>
                  <option value="10000-15000">Rs. 10,000 - 15,000</option>
                  <option value="15000+">Above Rs. 15,000</option>
                </select>
              </div>
              <Button className="gap-2">
                <Search className="h-4 w-4" />
                Search
              </Button>
            </div>
          </div>

          <div className="mt-6 flex justify-center gap-4">
            <Button variant="outline" asChild>
              <Link href="/register?type=seeker">I'm Looking for a Room</Link>
            </Button>
            <Button asChild>
              <Link href="/register?type=owner">I Have a Room to Rent</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="container py-16">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Featured Rooms</h2>
            <p className="text-muted-foreground">Discover our handpicked selection of top-rated rooms</p>
          </div>
          <Button variant="outline" asChild>
            <Link href="/rooms">View All Rooms</Link>
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <RoomCard
            id="1"
            title="Modern Single Room in Patan"
            location="Patan, Lalitpur"
            price={8000}
            type="Single Room"
            rating={4.8}
            reviewCount={24}
            imageUrl="/placeholder.svg?height=300&width=400"
          />
          <RoomCard
            id="2"
            title="Spacious Flat near Durbar Square"
            location="Thamel, Kathmandu"
            price={15000}
            type="Flat"
            rating={4.5}
            reviewCount={18}
            imageUrl="/placeholder.svg?height=300&width=400"
          />
          <RoomCard
            id="3"
            title="Cozy Shared Room with Balcony"
            location="Jhamsikhel, Lalitpur"
            price={6000}
            type="Shared Room"
            rating={4.2}
            reviewCount={15}
            imageUrl="/placeholder.svg?height=300&width=400"
          />
          <RoomCard
            id="4"
            title="Luxury Apartment with City View"
            location="Baluwatar, Kathmandu"
            price={25000}
            type="Apartment"
            rating={4.9}
            reviewCount={32}
            imageUrl="/placeholder.svg?height=300&width=400"
          />
        </div>
      </section>

      {/* Featured Locations */}
      <FeaturedLocations />

      {/* How It Works */}
      <HowItWorks />

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 py-16 text-white">
        <div className="container text-center">
          <h2 className="mb-4 text-3xl font-bold">Ready to Find Your Perfect Room?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-primary-foreground/90">
            Join thousands of happy room seekers who found their ideal accommodation through our platform.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/rooms">Browse Rooms</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              asChild
            >
              <Link href="/register">Create Account</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

