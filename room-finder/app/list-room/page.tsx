"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft, ImagePlus, Loader2, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function ListRoomPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      // Redirect or show success message
    }, 2000)
  }

  return (
    <div className="container py-8">
      <div className="mb-6">
        <Link href="/" className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
          <ChevronLeft className="h-4 w-4" />
          Back to home
        </Link>
        <h1 className="mt-2 text-3xl font-bold tracking-tight">List Your Room</h1>
        <p className="text-muted-foreground">Provide details about your room to find the perfect tenant</p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Basic Information */}
            <Card className="border-2 border-blue-200 bg-gradient-to-b from-blue-50 to-white">
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
                <CardDescription>Provide basic details about your room</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="title">Room Title</Label>
                  <Input id="title" placeholder="e.g., Modern Single Room in Patan" required />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe your room, including its features, surroundings, and any rules"
                    className="min-h-32"
                    required
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <Label htmlFor="room-type">Room Type</Label>
                    <Select required>
                      <SelectTrigger id="room-type">
                        <SelectValue placeholder="Select room type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="single">Single Room</SelectItem>
                        <SelectItem value="shared">Shared Room</SelectItem>
                        <SelectItem value="apartment">Apartment</SelectItem>
                        <SelectItem value="flat">Flat</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="price">Monthly Rent (Rs.)</Label>
                    <Input id="price" type="number" placeholder="e.g., 8000" required />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <Label htmlFor="security-deposit">Security Deposit (Rs.)</Label>
                    <Input id="security-deposit" type="number" placeholder="e.g., 8000" />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="min-stay">Minimum Stay (months)</Label>
                    <Input id="min-stay" type="number" placeholder="e.g., 3" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Location */}
            <Card className="border-2 border-blue-200 bg-gradient-to-b from-blue-50 to-white">
              <CardHeader>
                <CardTitle>Location</CardTitle>
                <CardDescription>Where is your room located?</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <Label htmlFor="city">City</Label>
                    <Select required>
                      <SelectTrigger id="city">
                        <SelectValue placeholder="Select city" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="kathmandu">Kathmandu</SelectItem>
                        <SelectItem value="lalitpur">Lalitpur</SelectItem>
                        <SelectItem value="bhaktapur">Bhaktapur</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="area">Area</Label>
                    <Input id="area" placeholder="e.g., Thamel, Patan, Jhamsikhel" required />
                  </div>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="address">Full Address</Label>
                  <Input id="address" placeholder="Enter the complete address" required />
                </div>

                <div className="grid gap-2">
                  <Label>Pin Location on Map</Label>
                  <div className="h-[200px] w-full overflow-hidden rounded-md border bg-muted">
                    <div className="flex h-full items-center justify-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>Map will be displayed here</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Amenities */}
            <Card className="border-2 border-blue-200 bg-gradient-to-b from-blue-50 to-white">
              <CardHeader>
                <CardTitle>Amenities & Facilities</CardTitle>
                <CardDescription>Select the amenities available with your room</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="wifi" />
                    <Label htmlFor="wifi" className="text-sm font-normal">
                      WiFi
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="attached-bathroom" />
                    <Label htmlFor="attached-bathroom" className="text-sm font-normal">
                      Attached Bathroom
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="kitchen" />
                    <Label htmlFor="kitchen" className="text-sm font-normal">
                      Kitchen Access
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="parking" />
                    <Label htmlFor="parking" className="text-sm font-normal">
                      Parking
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="furnished" />
                    <Label htmlFor="furnished" className="text-sm font-normal">
                      Furnished
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="water-supply" />
                    <Label htmlFor="water-supply" className="text-sm font-normal">
                      24/7 Water Supply
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="laundry" />
                    <Label htmlFor="laundry" className="text-sm font-normal">
                      Laundry
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="study-table" />
                    <Label htmlFor="study-table" className="text-sm font-normal">
                      Study Table
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="balcony" />
                    <Label htmlFor="balcony" className="text-sm font-normal">
                      Balcony
                    </Label>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Photos */}
            <Card className="border-2 border-blue-200 bg-gradient-to-b from-blue-50 to-white">
              <CardHeader>
                <CardTitle>Room Photos</CardTitle>
                <CardDescription>Upload clear photos of your room (minimum 3 photos)</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                  <div className="flex h-32 cursor-pointer flex-col items-center justify-center rounded-md border border-dashed border-muted-foreground/25 bg-muted/50 transition-colors hover:border-muted-foreground/50">
                    <ImagePlus className="mb-2 h-8 w-8 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">Add Photo</span>
                  </div>

                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="relative h-32 overflow-hidden rounded-md border bg-muted">
                      <div className="flex h-full items-center justify-center text-xs text-muted-foreground">
                        Photo slot {i + 1}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-sm text-muted-foreground">
                  <p>Tips for good photos:</p>
                  <ul className="ml-5 list-disc">
                    <li>Ensure good lighting</li>
                    <li>Show all areas of the room</li>
                    <li>Include bathroom and kitchen photos if applicable</li>
                    <li>Show the exterior and surroundings</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Preferences */}
            <Card className="border-2 border-blue-200 bg-gradient-to-b from-blue-50 to-white">
              <CardHeader>
                <CardTitle>Preferences</CardTitle>
                <CardDescription>Specify your preferences for potential tenants</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Preferred Gender</Label>
                  <RadioGroup defaultValue="any" className="flex gap-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="any" id="any-gender" />
                      <Label htmlFor="any-gender" className="cursor-pointer">
                        Any
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="male" id="male" />
                      <Label htmlFor="male" className="cursor-pointer">
                        Male
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="female" id="female" />
                      <Label htmlFor="female" className="cursor-pointer">
                        Female
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label>Preferred Tenant Type</Label>
                  <div className="grid gap-2 sm:grid-cols-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="students" />
                      <Label htmlFor="students" className="text-sm font-normal">
                        Students
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="working-professionals" />
                      <Label htmlFor="working-professionals" className="text-sm font-normal">
                        Working Professionals
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="families" />
                      <Label htmlFor="families" className="text-sm font-normal">
                        Families
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="couples" />
                      <Label htmlFor="couples" className="text-sm font-normal">
                        Couples
                      </Label>
                    </div>
                  </div>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="additional-rules">Additional Rules or Preferences</Label>
                  <Textarea id="additional-rules" placeholder="Any specific rules or preferences you want to mention" />
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-end gap-4">
              <Button variant="outline" type="button">
                Save as Draft
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Publishing...
                  </>
                ) : (
                  "Publish Listing"
                )}
              </Button>
            </div>
          </form>
        </div>

        <div className="md:col-span-1">
          <div className="sticky top-24 space-y-6">
            <Card className="border-2 border-blue-200 bg-gradient-to-b from-blue-50 to-white">
              <CardHeader>
                <CardTitle>Listing Guidelines</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-sm">
                  <p>Follow these guidelines to create an effective listing:</p>
                  <ul className="ml-5 list-disc space-y-1">
                    <li>Provide accurate and detailed information</li>
                    <li>Upload clear, well-lit photos</li>
                    <li>Be specific about rent and deposit amounts</li>
                    <li>Clearly state your rules and preferences</li>
                    <li>Respond promptly to inquiries</li>
                  </ul>
                  <p className="text-muted-foreground">Listings that don't meet our guidelines may be removed.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 bg-gradient-to-b from-blue-50 to-white">
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-sm">
                  <p>If you need assistance with creating your listing, our support team is here to help.</p>
                  <Button variant="outline" className="w-full">
                    Contact Support
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

