import { Filter, Search, SlidersHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { RoomCard } from "@/components/room-card"
import { RoomFilters } from "@/components/room-filters"

export default function RoomsPage() {
  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Find Rooms</h1>
        <p className="text-muted-foreground">Browse through our collection of available rooms</p>
      </div>

      {/* Search and Filter Bar */}
      <div className="mb-8 flex flex-col gap-4 rounded-lg border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 shadow-sm md:flex-row md:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search by location, title..." className="pl-9" />
        </div>

        <div className="flex flex-1 gap-2">
          <select className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
            <option value="">Room Type</option>
            <option value="single">Single Room</option>
            <option value="shared">Shared Room</option>
            <option value="apartment">Apartment</option>
            <option value="flat">Flat</option>
          </select>

          <select className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
            <option value="">Price Range</option>
            <option value="0-5000">Under Rs. 5,000</option>
            <option value="5000-10000">Rs. 5,000 - 10,000</option>
            <option value="10000-15000">Rs. 10,000 - 15,000</option>
            <option value="15000+">Above Rs. 15,000</option>
          </select>
        </div>

        <div className="flex gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="flex gap-2 md:hidden">
                <SlidersHorizontal className="h-4 w-4" />
                Filters
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="py-4">
                <h3 className="mb-4 text-lg font-semibold">Filters</h3>
                <RoomFilters />
              </div>
            </SheetContent>
          </Sheet>

          <Button>
            <Search className="mr-2 h-4 w-4" />
            Search
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
        {/* Filters - Desktop */}
        <div className="hidden md:block">
          <div className="sticky top-24 rounded-lg border-2 border-blue-200 bg-gradient-to-b from-blue-50 to-white p-4 shadow-sm">
            <h3 className="mb-4 flex items-center gap-2 font-semibold">
              <Filter className="h-4 w-4" />
              Filters
            </h3>
            <RoomFilters />
          </div>
        </div>

        {/* Room Listings */}
        <div className="md:col-span-3">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">Showing 24 results</p>
            <select className="h-8 rounded-md border border-input bg-background px-2 py-1 text-xs ring-offset-background file:border-0 file:bg-transparent file:text-xs file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
              <option value="newest">Newest First</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
            <RoomCard
              id="5"
              title="Budget Single Room for Students"
              location="Kirtipur, Kathmandu"
              price={4500}
              type="Single Room"
              rating={4.0}
              reviewCount={12}
              imageUrl="/placeholder.svg?height=300&width=400"
            />
            <RoomCard
              id="6"
              title="Furnished Room with Kitchen Access"
              location="Kupondole, Lalitpur"
              price={9000}
              type="Single Room"
              rating={4.6}
              reviewCount={21}
              imageUrl="/placeholder.svg?height=300&width=400"
            />
          </div>

          {/* Pagination */}
          <div className="mt-8 flex justify-center">
            <nav className="flex items-center gap-1">
              <Button variant="outline" size="icon" disabled>
                <span className="sr-only">Previous page</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground"
              >
                1
              </Button>
              <Button variant="outline" size="sm">
                2
              </Button>
              <Button variant="outline" size="sm">
                3
              </Button>
              <Button variant="outline" size="sm">
                4
              </Button>
              <Button variant="outline" size="icon">
                <span className="sr-only">Next page</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </Button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}

