"use client"

import type React from "react"

import { useState } from "react"
import { MessageSquare, Phone, Search, Send, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

const conversations = [
  {
    id: "1",
    name: "Sudip Dhungana",
    avatar: "/placeholder.svg?height=50&width=50&text=SD",
    lastMessage: "Is the room still available?",
    time: "10:30 AM",
    unread: 2,
    isOnline: true,
  },
  {
    id: "2",
    name: "Kushal Acharya",
    avatar: "/placeholder.svg?height=50&width=50&text=KA",
    lastMessage: "I'd like to schedule a viewing tomorrow.",
    time: "Yesterday",
    unread: 0,
    isOnline: false,
  },
  {
    id: "3",
    name: "Aditya Bajracharya",
    avatar: "/placeholder.svg?height=50&width=50&text=AB",
    lastMessage: "Thank you for the information.",
    time: "Yesterday",
    unread: 0,
    isOnline: true,
  },
  {
    id: "4",
    name: "Ayush Ranjitkar",
    avatar: "/placeholder.svg?height=50&width=50&text=AR",
    lastMessage: "Is WiFi included in the rent?",
    time: "2 days ago",
    unread: 0,
    isOnline: false,
  },
]

const messages = [
  {
    id: "1",
    sender: "other",
    text: "Hello, I'm interested in your room listing in Patan.",
    time: "10:15 AM",
  },
  {
    id: "2",
    sender: "other",
    text: "Is the room still available?",
    time: "10:16 AM",
  },
  {
    id: "3",
    sender: "me",
    text: "Hi Rajesh, yes the room is still available.",
    time: "10:20 AM",
  },
  {
    id: "4",
    sender: "me",
    text: "Would you like to schedule a viewing?",
    time: "10:20 AM",
  },
  {
    id: "5",
    sender: "other",
    text: "That would be great! Is tomorrow at 2 PM possible?",
    time: "10:25 AM",
  },
  {
    id: "6",
    sender: "me",
    text: "Tomorrow at 2 PM works for me. Here's the address: Patan Dhoka, near the temple.",
    time: "10:28 AM",
  },
  {
    id: "7",
    sender: "other",
    text: "Perfect! I'll be there. Is there parking available nearby?",
    time: "10:30 AM",
  },
]

export default function ChatPage() {
  const [activeConversation, setActiveConversation] = useState(conversations[0])
  const [messageInput, setMessageInput] = useState("")

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (messageInput.trim()) {
      // In a real app, you would send this to an API
      console.log("Sending message:", messageInput)
      setMessageInput("")
    }
  }

  return (
    <div className="container grid h-[calc(100vh-4rem)] grid-cols-1 py-4 md:grid-cols-3 lg:grid-cols-4">
      {/* Conversations List */}
      <div className="border-r md:col-span-1">
        <div className="flex h-full flex-col">
          <div className="p-4">
            <h1 className="text-xl font-bold">Messages</h1>
            <p className="text-sm text-muted-foreground">Connect with room owners and seekers</p>
          </div>

          <div className="relative px-4 pb-2">
            <Search className="absolute left-7 top-3 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search conversations..." className="pl-9" />
          </div>

          <Tabs defaultValue="all" className="px-4">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="unread">Unread</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="flex-1 overflow-auto py-2">
            {conversations.map((conversation) => (
              <div
                key={conversation.id}
                className={`cursor-pointer p-4 transition-colors hover:bg-muted/50 ${
                  activeConversation.id === conversation.id ? "bg-muted" : ""
                }`}
                onClick={() => setActiveConversation(conversation)}
              >
                <div className="flex items-start gap-3">
                  <div className="relative">
                    <img
                      src={conversation.avatar || "/placeholder.svg"}
                      alt={conversation.name}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    {conversation.isOnline && (
                      <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-background bg-green-500"></span>
                    )}
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">{conversation.name}</h3>
                      <span className="text-xs text-muted-foreground">{conversation.time}</span>
                    </div>
                    <p className="truncate text-sm text-muted-foreground">{conversation.lastMessage}</p>
                  </div>
                  {conversation.unread > 0 && (
                    <div className="flex h-5 min-w-5 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground">
                      {conversation.unread}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex flex-col md:col-span-2 lg:col-span-3">
        {activeConversation ? (
          <>
            {/* Chat Header */}
            <div className="flex items-center justify-between border-b p-4">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img
                    src={activeConversation.avatar || "/placeholder.svg"}
                    alt={activeConversation.name}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  {activeConversation.isOnline && (
                    <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-background bg-green-500"></span>
                  )}
                </div>
                <div>
                  <h3 className="font-medium">{activeConversation.name}</h3>
                  <p className="text-xs text-muted-foreground">{activeConversation.isOnline ? "Online" : "Offline"}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon">
                  <Phone className="h-5 w-5" />
                  <span className="sr-only">Call</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                  <span className="sr-only">View Profile</span>
                </Button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-auto p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.sender === "me" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[75%] rounded-lg p-3 ${
                        message.sender === "me"
                          ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
                          : "bg-gradient-to-r from-gray-100 to-blue-100"
                      }`}
                    >
                      <p>{message.text}</p>
                      <p className="mt-1 text-right text-xs opacity-70">{message.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Message Input */}
            <div className="border-t p-4">
              <form onSubmit={handleSendMessage} className="flex gap-2">
                <Input
                  placeholder="Type a message..."
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  className="flex-1"
                />
                <Button type="submit" size="icon">
                  <Send className="h-4 w-4" />
                  <span className="sr-only">Send</span>
                </Button>
              </form>
            </div>
          </>
        ) : (
          <div className="flex h-full flex-col items-center justify-center p-4 text-center">
            <MessageSquare className="mb-4 h-12 w-12 text-muted-foreground" />
            <h3 className="text-lg font-medium">No conversation selected</h3>
            <p className="text-sm text-muted-foreground">Select a conversation from the list to start chatting</p>
          </div>
        )}
      </div>
    </div>
  )
}

