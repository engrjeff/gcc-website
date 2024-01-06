"use client"

import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"

function VisitorForm() {
  return (
    <form className="max-w-screen-md lg:max-w-md">
      <div className="mb-6">
        <h2 className="my-5 text-2xl font-semibold">
          Visit us this coming Sunday
        </h2>
        <p className="text-muted-foreground">
          We would like to welcome you in our church for our worship service
          gathering. The service starts at 8:00 AM.
          <br />
          <br />
          Please confirm your attendance by filling in the form below.
        </p>
      </div>
      <fieldset className="space-y-3">
        <div className="space-y-1">
          <Label htmlFor="firstName">First Name</Label>
          <Input
            name="firstName"
            id="firstName"
            placeholder="Enter your first name"
          />
        </div>
        <div>
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            name="lastName"
            id="lastName"
            placeholder="Enter your last name"
          />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            name="email"
            id="email"
            type="email"
            placeholder="email@example.com"
          />
        </div>
        <div className="max-w-xs">
          <Label htmlFor="phoneNumber">Phone Number</Label>
          <Input
            name="phoneNumber"
            id="phoneNumber"
            type="tel"
            inputMode="tel"
            placeholder="+639xxxxxxxxx"
          />
        </div>
        <div className="max-w-xs pt-3 lg:pt-6">
          <Button size="lg" className="w-full">
            Confirm My Attendance
          </Button>
        </div>
      </fieldset>
    </form>
  )
}

export default VisitorForm
