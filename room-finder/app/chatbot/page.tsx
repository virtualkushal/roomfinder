"use client"

import type React from "react"

import { useState } from "react"
import { Bot, Send, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

type Message = {
  role: "user" | "assistant"
  content: string
}

export default function ChatbotPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi there! I'm your RoomFinder assistant. I can help you find the perfect room in Kathmandu or Lalitpur. What are you looking for?",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()

    if (!input.trim()) return

    // Add user message
    const userMessage: Message = {
      role: "user",
      content: input,
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    // Simulate AI response
    setTimeout(() => {
      let response = ""

      if (input.toLowerCase().includes("budget") || input.toLowerCase().includes("price")) {
        response =
          "I can help you find rooms within your budget. What's your monthly budget for rent? For example, are you looking for something under Rs. 10,000 or higher?"
      } else if (input.toLowerCase().includes("location") || input.toLowerCase().includes("area")) {
        response =
          "Great! Location is important. Some popular areas in Kathmandu are Thamel, Baluwatar, and Lazimpat. In Lalitpur, Patan, Jhamsikhel, and Kupondole are popular. Which area are you interested in?"
      } else if (
        input.toLowerCase().includes("room type") ||
        input.toLowerCase().includes("single") ||
        input.toLowerCase().includes("shared")
      ) {
        response =
          "We have various room types available - single rooms, shared rooms, apartments, and flats. Which type are you looking for?"
      } else if (input.toLowerCase().includes("amenities") || input.toLowerCase().includes("facilities")) {
        response =
          "Common amenities include WiFi, attached bathroom, kitchen access, and furnished rooms. Which amenities are most important to you?"
      } else {
        response =
          "I'd be happy to help you find a room. To get started, could you tell me your preferred location, budget, and what type of room you're looking for (single, shared, apartment, etc.)?"
      }

      const assistantMessage: Message = {
        role: "assistant",
        content: response,
      }

      setMessages((prev) => [...prev, assistantMessage])
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="container flex min-h-[calc(100vh-4rem)] items-center justify-center py-8">
      <Card className="mx-auto w-full max-w-3xl border-2 border-blue-200 bg-gradient-to-b from-blue-50 to-white">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bot className="h-6 w-6 text-primary" />
            RoomFinder AI Assistant
          </CardTitle>
          <CardDescription>Ask me anything about finding rooms in Kathmandu and Lalitpur</CardDescription>
        </CardHeader>
        <Separator />
        <CardContent className="p-4 md:p-6">
          <div className="h-[400px] space-y-4 overflow-y-auto p-1">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className="flex max-w-[80%] gap-3">
                  {message.role === "assistant" && (
                    <div className="flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
                      <Bot className="h-4 w-4" />
                    </div>
                  )}
                  <div
                    className={`rounded-lg p-3 ${
                      message.role === "user"
                        ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
                        : "bg-gradient-to-r from-purple-100 to-blue-100"
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                  </div>
                  {message.role === "user" && (
                    <div className="flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                      <User className="h-4 w-4" />
                    </div>
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex max-w-[80%] gap-3">
                  <div className="flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Bot className="h-4 w-4" />
                  </div>
                  <div className="flex items-center rounded-lg bg-muted p-3">
                    <div className="flex space-x-1">
                      <div className="h-2 w-2 animate-bounce rounded-full bg-primary"></div>
                      <div
                        className="h-2 w-2 animate-bounce rounded-full bg-primary"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                      <div
                        className="h-2 w-2 animate-bounce rounded-full bg-primary"
                        style={{ animationDelay: "0.4s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </CardContent>
        <Separator />
        <CardFooter className="p-4 pt-3">
          <form onSubmit={handleSendMessage} className="flex w-full gap-2">
            <Input
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isLoading}
              className="flex-1"
            />
            <Button type="submit" disabled={isLoading || !input.trim()}>
              <Send className="mr-2 h-4 w-4" />
              Send
            </Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  )
}

