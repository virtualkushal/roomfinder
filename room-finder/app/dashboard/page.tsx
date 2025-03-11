import Link from "next/link"
import { Building, ChevronRight, Home, MessageSquare, Plus, Settings, Star, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardSidebar } from "@/components/dashboard-sidebar"

export default function DashboardPage() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)]">
      <DashboardSidebar />

      <main className="flex-1 p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's an overview of your account.</p>
        </div>

        <Tabs defaultValue="owner" className="space-y-6">
          <TabsList>
            <TabsTrigger value="owner">Room Owner</TabsTrigger>
            <TabsTrigger value="seeker">Room Seeker</TabsTrigger>
          </TabsList>

          <TabsContent value="owner" className="space-y-6">
            {/* Stats */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card className="border-2 border-purple-200 bg-gradient-to-b from-purple-50 to-white">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Active Listings</CardTitle>
                  <Building className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3</div>
                  <p className="text-xs text-muted-foreground">+1 from last month</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-200 bg-gradient-to-b from-blue-50 to-white">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Total Views</CardTitle>
                  <User className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">142</div>
                  <p className="text-xs text-muted-foreground">+24 from last week</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-200 bg-gradient-to-b from-green-50 to-white">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Messages</CardTitle>
                  <MessageSquare className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">8</div>
                  <p className="text-xs text-muted-foreground">2 unread messages</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-yellow-200 bg-gradient-to-b from-yellow-50 to-white">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Rating</CardTitle>
                  <Star className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">4.8</div>
                  <div className="flex items-center">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3 w-3 ${i < 5 ? "fill-yellow-400 text-yellow-400" : "fill-muted text-muted"}`}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Room Listings */}
            <Card className="border-2 border-blue-200 bg-gradient-to-b from-blue-50 to-white">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Your Room Listings</CardTitle>
                    <CardDescription>Manage your active room listings</CardDescription>
                  </div>
                  <Button asChild>
                    <Link href="/list-room">
                      <Plus className="mr-2 h-4 w-4" />
                      Add New Listing
                    </Link>
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-lg border">
                    <div className="flex flex-col items-start justify-between p-4 sm:flex-row sm:items-center">
                      <div className="flex items-center gap-4">
                        <img
                          src="/placeholder.svg?height=100&width=100"
                          alt="Room"
                          className="h-16 w-16 rounded-md object-cover"
                        />
                        <div>
                          <h3 className="font-semibold">Modern Single Room in Patan</h3>
                          <p className="text-sm text-muted-foreground">Patan, Lalitpur</p>
                          <p className="font-medium">Aditya Bajracharya</p>
                          <div className="mt-1 flex items-center gap-2">
                            <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                              Active
                            </span>
                            <span className="text-xs text-muted-foreground">Listed 2 weeks ago</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 flex w-full flex-col gap-2 sm:mt-0 sm:w-auto sm:flex-row">
                        <Button variant="outline" size="sm" asChild>
                          <Link href="/rooms/1">View</Link>
                        </Button>
                        <Button variant="outline" size="sm" asChild>
                          <Link href="/dashboard/edit-room/1">Edit</Link>
                        </Button>
                      </div>
                    </div>
                    <div className="border-t p-4">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-4">
                          <div>
                            <p className="text-sm font-medium">Views</p>
                            <p className="text-sm text-muted-foreground">78</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium">Inquiries</p>
                            <p className="text-sm text-muted-foreground">5</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium">Price</p>
                            <p className="text-sm text-muted-foreground">Rs. 8,000/month</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="text-xs text-muted-foreground">Profile completion:</span>
                          <Progress value={90} className="h-2 w-20" />
                          <span className="text-xs font-medium">90%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border">
                    <div className="flex flex-col items-start justify-between p-4 sm:flex-row sm:items-center">
                      <div className="flex items-center gap-4">
                        <img
                          src="/placeholder.svg?height=100&width=100"
                          alt="Room"
                          className="h-16 w-16 rounded-md object-cover"
                        />
                        <div>
                          <h3 className="font-semibold">Spacious Flat near Durbar Square</h3>
                          <p className="text-sm text-muted-foreground">Thamel, Kathmandu</p>
                          <div className="mt-1 flex items-center gap-2">
                            <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                              Active
                            </span>
                            <span className="text-xs text-muted-foreground">Listed 1 month ago</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 flex w-full flex-col gap-2 sm:mt-0 sm:w-auto sm:flex-row">
                        <Button variant="outline" size="sm" asChild>
                          <Link href="/rooms/2">View</Link>
                        </Button>
                        <Button variant="outline" size="sm" asChild>
                          <Link href="/dashboard/edit-room/2">Edit</Link>
                        </Button>
                      </div>
                    </div>
                    <div className="border-t p-4">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-4">
                          <div>
                            <p className="text-sm font-medium">Views</p>
                            <p className="text-sm text-muted-foreground">42</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium">Inquiries</p>
                            <p className="text-sm text-muted-foreground">2</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium">Price</p>
                            <p className="text-sm text-muted-foreground">Rs. 15,000/month</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="text-xs text-muted-foreground">Profile completion:</span>
                          <Progress value={75} className="h-2 w-20" />
                          <span className="text-xs font-medium">75%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Messages */}
            <Card className="border-2 border-blue-200 bg-gradient-to-b from-blue-50 to-white">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Recent Messages</CardTitle>
                    <CardDescription>Recent inquiries about your listings</CardDescription>
                  </div>
                  <Button variant="outline" asChild>
                    <Link href="/chat">
                      View All
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-start gap-4 rounded-lg border p-4">
                      <img
                        src="/placeholder.svg?height=50&width=50"
                        alt="User"
                        className="h-10 w-10 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium">Sudip Dhungana</h4>
                          <span className="text-xs text-muted-foreground">2 hours ago</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Is the room still available? I'd like to schedule a viewing tomorrow if possible.
                        </p>
                        <div className="mt-2">
                          <Button size="sm" variant="outline" asChild>
                            <Link href="/chat">Reply</Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="seeker" className="space-y-6">
            {/* Stats */}
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-2 border-blue-200 bg-gradient-to-b from-blue-50 to-white">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Saved Rooms</CardTitle>
                  <Home className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-xs text-muted-foreground">4 new since last week</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-200 bg-gradient-to-b from-blue-50 to-white">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Recent Searches</CardTitle>
                  <Settings className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">8</div>
                  <p className="text-xs text-muted-foreground">Across 3 locations</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-200 bg-gradient-to-b from-blue-50 to-white">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Messages</CardTitle>
                  <MessageSquare className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">5</div>
                  <p className="text-xs text-muted-foreground">1 unread message</p>
                </CardContent>
              </Card>
            </div>

            {/* Saved Rooms */}
            <Card className="border-2 border-blue-200 bg-gradient-to-b from-blue-50 to-white">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Saved Rooms</CardTitle>
                    <CardDescription>Rooms you've saved for later</CardDescription>
                  </div>
                  <Button variant="outline" asChild>
                    <Link href="/rooms">
                      Find More Rooms
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="rounded-lg border">
                      <div className="aspect-video overflow-hidden">
                        <img
                          src="/placeholder.svg?height=200&width=300"
                          alt="Room"
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold">Modern Single Room in Patan</h3>
                        <p className="text-sm text-muted-foreground">Patan, Lalitpur</p>
                        <div className="mt-2 flex items-center justify-between">
                          <span className="font-medium text-primary">Rs. 8,000/month</span>
                          <Button size="sm" variant="outline" asChild>
                            <Link href="/rooms/1">View</Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Searches */}
            <Card className="border-2 border-blue-200 bg-gradient-to-b from-blue-50 to-white">
              <CardHeader>
                <CardTitle>Recent Searches</CardTitle>
                <CardDescription>Your recent room searches</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {[
                    "Single Room in Thamel, Kathmandu",
                    "Flat in Patan, Lalitpur",
                    "Shared Room near Pulchowk Campus",
                    "Apartment in Jhamsikhel under Rs. 15,000",
                  ].map((search, i) => (
                    <div key={i} className="flex items-center justify-between rounded-lg border p-3">
                      <span className="text-sm">{search}</span>
                      <Button size="sm" variant="ghost" asChild>
                        <Link href={`/rooms?search=${encodeURIComponent(search)}`}>Search Again</Link>
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

