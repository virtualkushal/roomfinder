import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Slider } from "@/components/ui/slider"

export function RoomFilters() {
  return (
    <div className="space-y-6">
      {/* Price Range */}
      <div>
        <h4 className="mb-3 text-sm font-medium">Price Range</h4>
        <div className="space-y-4">
          <Slider defaultValue={[5000, 15000]} min={1000} max={30000} step={500} className="py-4" />
          <div className="flex items-center justify-between">
            <div className="rounded-md border px-2 py-1 text-xs">Rs. 5,000</div>
            <div className="rounded-md border px-2 py-1 text-xs">Rs. 15,000</div>
          </div>
        </div>
      </div>

      <Separator />

      {/* Room Type */}
      <div>
        <h4 className="mb-3 text-sm font-medium">Room Type</h4>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="single" />
            <Label htmlFor="single" className="text-sm font-normal">
              Single Room
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="shared" />
            <Label htmlFor="shared" className="text-sm font-normal">
              Shared Room
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="apartment" />
            <Label htmlFor="apartment" className="text-sm font-normal">
              Apartment
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="flat" />
            <Label htmlFor="flat" className="text-sm font-normal">
              Flat
            </Label>
          </div>
        </div>
      </div>

      <Separator />

      {/* Amenities */}
      <div>
        <h4 className="mb-3 text-sm font-medium">Amenities</h4>
        <div className="space-y-2">
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
        </div>
      </div>

      <Separator />

      {/* Location */}
      <div>
        <h4 className="mb-3 text-sm font-medium">Location</h4>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="thamel" />
            <Label htmlFor="thamel" className="text-sm font-normal">
              Thamel, Kathmandu
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="patan" />
            <Label htmlFor="patan" className="text-sm font-normal">
              Patan, Lalitpur
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="jhamsikhel" />
            <Label htmlFor="jhamsikhel" className="text-sm font-normal">
              Jhamsikhel, Lalitpur
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="baluwatar" />
            <Label htmlFor="baluwatar" className="text-sm font-normal">
              Baluwatar, Kathmandu
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="kirtipur" />
            <Label htmlFor="kirtipur" className="text-sm font-normal">
              Kirtipur, Kathmandu
            </Label>
          </div>
        </div>
      </div>
    </div>
  )
}

