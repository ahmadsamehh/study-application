import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, major } = body

    // إنشاء محتوى الإيميل
    const emailContent = `
      طلب استشارة جديد من موقع ZAD Edugate
      
      بيانات الطالب:
      - الاسم: ${firstName} ${lastName}
      - البريد الإلكتروني: ${email}
      - رقم الهاتف: ${phone}
      - التخصص المرغوب: ${major}
      
      تاريخ الطلب: ${new Date().toLocaleString("ar-EG")}
      
      يرجى التواصل مع الطالب في أقرب وقت ممكن.
    `

    // هنا يمكنك إضافة خدمة إرسال الإيميل مثل Resend أو SendGrid
    // مؤقتاً سنحفظ البيانات ونرسل رد نجاح

    console.log("New contact form submission:", {
      firstName,
      lastName,
      email,
      phone,
      major,
      timestamp: new Date().toISOString(),
    })

    // يمكنك هنا إضافة كود إرسال الإيميل الفعلي
    // await sendEmail({
    //   to: 'zadedugate@gmail.com',
    //   subject: 'طلب استشارة جديد - ZAD Edugate',
    //   text: emailContent
    // })

    return NextResponse.json({
      success: true,
      message: "تم إرسال طلبك بنجاح! سنتواصل معك خلال 24 ساعة.",
    })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json(
      { success: false, message: "حدث خطأ في إرسال الطلب. يرجى المحاولة مرة أخرى." },
      { status: 500 },
    )
  }
}
