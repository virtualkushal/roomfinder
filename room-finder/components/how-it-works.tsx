import { Building, Search, UserCheck } from "lucide-react"

export function HowItWorks() {
  return (
    <section className="container py-16 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 rounded-xl">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold tracking-tight">How It Works</h2>
        <p className="mt-2 text-muted-foreground">Find your perfect room in just a few simple steps</p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
            <Search className="h-8 w-8" />
          </div>
          <h3 className="mb-2 text-xl font-semibold">Search & Filter</h3>
          <p className="text-muted-foreground">
            Browse through our extensive collection of rooms and use filters to narrow down your search based on
            location, budget, and amenities.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
            <Building className="h-8 w-8" />
          </div>
          <h3 className="mb-2 text-xl font-semibold">Contact Owners</h3>
          <p className="text-muted-foreground">
            Once you find a room you like, connect directly with verified room owners through our secure messaging
            system or phone calls.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
            <UserCheck className="h-8 w-8" />
          </div>
          <h3 className="mb-2 text-xl font-semibold">Move In</h3>
          <p className="text-muted-foreground">
            Schedule a viewing, finalize the details with the owner, and move into your new room. Don't forget to leave
            a review after your experience!
          </p>
        </div>
      </div>
    </section>
  )
}

