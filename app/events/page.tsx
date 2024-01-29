import { type Metadata } from "next"
import { format } from "date-fns"

import { Badge } from "@/components/ui/badge"
import Banner from "@/components/banner"
import Container from "@/components/container"

export const metadata: Metadata = {
  title: "Events",
}

const events = [
  {
    id: "event-1",
    title: "Leadership Training Level 2",
    date: new Date("January 21, 2023"),
    timeStart: "11:00 AM",
    timeEnd: "12:00 PM",
    tags: ["Training"],
  },
  {
    id: "event-2",
    title: "Worship Service",
    date: new Date("January 22, 2023"),
    timeStart: "8:00 AM",
    timeEnd: "10:00 AM",
    tags: ["Worship"],
  },
  {
    id: "event-3",
    title: "Women's Gathering",
    date: new Date("January 27, 2023"),
    timeStart: "3:00 PM",
    timeEnd: "5:00 PM",
    tags: ["Women's Ministry"],
  },
  {
    id: "event-4",
    title: "Music Team Training",
    date: new Date("January 28, 2023"),
    timeStart: "8:00 AM",
    timeEnd: "12:00 PM",
    tags: ["Music Ministry"],
  },
]

function EventsPage() {
  return (
    <>
      <Banner />
      <Container className="mt-4 bg-offwhite py-4">
        <section className="space-y-6 divide-y-2">
          <h1 className="text-lg font-bold">Events</h1>
          <ul className="divide-y">
            {events.map((event) => (
              <li key={event.id}>
                <div className="flex items-center py-6">
                  <div className="flex w-1/4 flex-col">
                    <span className="text-xs font-light uppercase tracking-wider">
                      {format(event.date, "MMM")}
                    </span>
                    <span className="text-2xl font-bold uppercase">
                      {format(event.date, "dd")}
                    </span>
                  </div>
                  <div className="flex-1">
                    <time className="inline-block text-xs font-light md:hidden">
                      {event.timeStart} - {event.timeEnd}
                    </time>
                    <h2 className="text-base font-bold md:text-lg">
                      {event.title}
                    </h2>
                    <div>
                      {event.tags.map((tag) => (
                        <Badge key={`${event.id}-tag-${tag}`}>{tag}</Badge>
                      ))}
                    </div>
                  </div>
                  <time className="hidden text-sm font-semibold md:inline-block">
                    {event.timeStart} - {event.timeEnd}
                  </time>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </Container>
    </>
  )
}

export default EventsPage
