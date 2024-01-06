"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import BlogList from "./blog-list"
import SermonList from "./sermon-list"

function ResourcesTabs() {
  return (
    <Tabs defaultValue="blogs" className="w-full">
      <TabsList className="grid w-full max-w-sm grid-cols-2">
        <TabsTrigger value="blogs">Blogs</TabsTrigger>
        <TabsTrigger value="sermons">Sermons</TabsTrigger>
      </TabsList>
      <TabsContent value="blogs">
        <BlogList />
      </TabsContent>
      <TabsContent value="sermons">
        <SermonList />
      </TabsContent>
    </Tabs>
  )
}

export default ResourcesTabs
