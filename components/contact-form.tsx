"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    major: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        setMessage("✅ " + result.message)
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          major: "",
        })
      } else {
        setMessage("❌ " + result.message)
      }
    } catch (error) {
      setMessage("❌ حدث خطأ في إرسال الطلب. يرجى المحاولة مرة أخرى.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="border-blue-100">
      <CardHeader>
        <CardTitle className="font-serif">احصل على استشارة مجانية</CardTitle>
        <CardDescription>املأ النموذج وسنتواصل معك خلال 24 ساعة</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-foreground">الاسم الأول</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                className="w-full mt-1 px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="أدخل اسمك الأول"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground">الاسم الأخير</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                className="w-full mt-1 px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="أدخل اسمك الأخير"
              />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-foreground">البريد الإلكتروني</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full mt-1 px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="أدخل بريدك الإلكتروني"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground">رقم الهاتف</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="w-full mt-1 px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="أدخل رقم هاتفك"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground">التخصص المرغوب</label>
            <select
              name="major"
              value={formData.major}
              onChange={handleInputChange}
              required
              className="w-full mt-1 px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">اختر التخصص</option>
              <option value="الهندسة">الهندسة</option>
              <option value="الطب">الطب</option>
              <option value="إدارة الأعمال">إدارة الأعمال</option>
              <option value="علوم الحاسوب">علوم الحاسوب</option>
              <option value="الصيدلة">الصيدلة</option>
              <option value="طب الأسنان">طب الأسنان</option>
              <option value="أخرى">أخرى</option>
            </select>
          </div>

          {message && (
            <div
              className={`p-3 rounded-md text-sm ${
                message.includes("✅")
                  ? "bg-green-50 text-green-700 border border-green-200"
                  : "bg-red-50 text-red-700 border border-red-200"
              }`}
            >
              {message}
            </div>
          )}

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary hover:bg-accent transition-colors disabled:opacity-50"
          >
            {isSubmitting ? "جاري الإرسال..." : "إرسال الطلب"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
