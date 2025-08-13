"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  GraduationCap,
  Users,
  Award,
  Phone,
  Mail,
  Star,
  FileText,
  Home,
  Scale,
  Facebook,
  MessageCircle,
} from "lucide-react"
import ContactForm from "@/components/contact-form"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-blue-100">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between" role="navigation" aria-label="التنقل الرئيسي">
            <div className="flex items-center gap-2">
              <img
                src="/zad-logo.jpeg"
                alt="شعار ZAD Edugate - شركة الدراسة في الجامعات المصرية"
                className="h-12 w-auto"
              />
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#services" className="text-foreground hover:text-primary transition-colors">
                خدماتنا
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">
                من نحن
              </a>
              <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">
                آراء الطلاب
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">
                تواصل معنا
              </a>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/zadedugate11"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors"
                aria-label="تابعنا على فيسبوك"
              >
                <Facebook className="h-5 w-5 text-white" />
              </a>
              <a
                href="https://wa.me/201080360400"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="تواصل معنا عبر واتساب"
              >
                <MessageCircle className="h-5 w-5 text-white" />
              </a>
              <a
                href="tel:201080360400"
                className="w-10 h-10 bg-primary hover:bg-accent rounded-full flex items-center justify-center transition-colors"
                aria-label="اتصل بنا"
              >
                <Phone className="h-5 w-5 text-white" />
              </a>
              <Button
                className="bg-primary hover:bg-accent transition-colors ml-2"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                aria-label="فتح استمارة التواصل المجانية"
              >
                استمارة مجانية
              </Button>
            </div>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-20 px-4 relative" aria-labelledby="hero-heading">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-right">
                <Badge className="mb-6 bg-blue-100 text-primary hover:bg-blue-200">
                  ✨ بوابتك للتعلم في مصر | Study in Egypt
                </Badge>
                <h1
                  id="hero-heading"
                  className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6 leading-tight"
                >
                  التعلم في مصر مع ZAD Edugate:
                  <span className="text-primary block">Study in Egypt - رحلتك التعليمية تبدأ هنا</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  نحن شركة رائدة في التعلم في مصر وخدمات Study in Egypt للطلاب الوافدين في الجامعات المصرية المعتمدة، مع
                  فريق من الخبراء والمتخصصين في التعليم المصري
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-accent transition-all duration-300 transform hover:scale-105"
                    onClick={() => document.getElementById("universities")?.scrollIntoView({ behavior: "smooth" })}
                    aria-label="اكتشف الجامعات المصرية المعتمدة"
                  >
                    ابدأ رحلتك اليوم
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 bg-transparent"
                    onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                    aria-label="تعرف على خدماتنا المتميزة"
                  >
                    تعرف على خدماتنا
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/study-egypt-banner.jpeg"
                  alt="الدراسة في مصر - أهرامات الجيزة مع شعار Study in Egypt وهاشتاج #Study_in_Egypt"
                  className="rounded-lg shadow-2xl w-full max-w-lg mx-auto"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Universities Section */}
        <section
          id="universities"
          className="py-20 px-4 bg-gradient-to-r from-blue-50 to-indigo-50"
          aria-labelledby="universities-heading"
        >
          <div className="container mx-auto">
            <header className="text-center mb-16">
              <h2 id="universities-heading" className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                التعلم في مصر - الجامعات المصرية المعتمدة لـ Study in Egypt
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                اكتشف أفضل الجامعات المصرية المعتمدة دولياً للتعلم في مصر والتي تقدم برامج Study in Egypt عالية الجودة في
                مختلف التخصصات
              </p>
            </header>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
              <article
                className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-blue-200"
                role="listitem"
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="font-serif text-xl text-primary">جامعة القاهرة</CardTitle>
                    <CardDescription>أعرق الجامعات المصرية وأكثرها تميزاً في التعليم والبحث العلمي</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">التصنيف العالمي:</span>
                        <span className="text-sm font-semibold text-primary">601-650</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">عدد الكليات:</span>
                        <span className="text-sm font-semibold">20+ كلية</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">التخصصات المتاحة:</span>
                        <span className="text-sm font-semibold">150+ تخصص</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </article>

              {/* Added semantic article tags and proper structure for other university cards */}
              <article
                className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-blue-200"
                role="listitem"
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="font-serif text-xl text-primary">جامعة عين شمس</CardTitle>
                    <CardDescription>
                      جامعة رائدة في التعليم الطبي والهندسي مع تاريخ عريق في التميز الأكاديمي
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">التصنيف العالمي:</span>
                        <span className="text-sm font-semibold text-primary">651-700</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">عدد الكليات:</span>
                        <span className="text-sm font-semibold">15+ كلية</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">التخصصات المتاحة:</span>
                        <span className="text-sm font-semibold">120+ تخصص</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </article>

              <article
                className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-blue-200"
                role="listitem"
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="font-serif text-xl text-primary">الجامعة الأمريكية بالقاهرة</CardTitle>
                    <CardDescription>
                      جامعة خاصة معتمدة أمريكياً تقدم تعليماً عالمي المستوى باللغة الإنجليزية
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">التصنيف العالمي:</span>
                        <span className="text-sm font-semibold text-primary">395</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">عدد الكليات:</span>
                        <span className="text-sm font-semibold">5 مدارس</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">التخصصات المتاحة:</span>
                        <span className="text-sm font-semibold">40+ تخصص</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </article>

              <article
                className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-blue-200"
                role="listitem"
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="font-serif text-xl text-primary">جامعة الإسكندرية</CardTitle>
                    <CardDescription>
                      جامعة عريقة تقع في مدينة الإسكندرية التاريخية مع تميز في العلوم والطب
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">التصنيف العالمي:</span>
                        <span className="text-sm font-semibold text-primary">701-750</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">عدد الكليات:</span>
                        <span className="text-sm font-semibold">22+ كلية</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">التخصصات المتاحة:</span>
                        <span className="text-sm font-semibold">130+ تخصص</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </article>

              <article
                className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-blue-200"
                role="listitem"
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="font-serif text-xl text-primary">جامعة أسيوط</CardTitle>
                    <CardDescription>جامعة حكومية رائدة في صعيد مصر مع تميز في الطب والزراعة والهندسة</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">التصنيف المحلي:</span>
                        <span className="text-sm font-semibold text-primary">المرتبة 5</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">عدد الكليات:</span>
                        <span className="text-sm font-semibold">16+ كلية</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">التخصصات المتاحة:</span>
                        <span className="text-sm font-semibold">100+ تخصص</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </article>

              <article
                className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-blue-200"
                role="listitem"
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="font-serif text-xl text-primary">جامعة المنصورة</CardTitle>
                    <CardDescription>جامعة متميزة في الدلتا مع سمعة ممتازة في الطب والهندسة والعلوم</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">التصنيف المحلي:</span>
                        <span className="text-sm font-semibold text-primary">المرتبة 6</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">عدد الكليات:</span>
                        <span className="text-sm font-semibold">18+ كلية</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">التخصصات المتاحة:</span>
                        <span className="text-sm font-semibold">110+ تخصص</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </article>
            </div>

            <div className="mt-16 text-center">
              <div
                className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
                role="list"
                aria-label="إحصائيات الجامعات المصرية"
              >
                <div className="text-center" role="listitem">
                  <div className="text-3xl font-bold text-primary mb-2">25+</div>
                  <div className="text-muted-foreground">جامعة معتمدة</div>
                </div>
                <div className="text-center" role="listitem">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-muted-foreground">تخصص متاح</div>
                </div>
                <div className="text-center" role="listitem">
                  <div className="text-3xl font-bold text-primary mb-2">95%</div>
                  <div className="text-muted-foreground">معدل القبول</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 px-4 bg-blue-50/50" aria-labelledby="services-heading">
          <div className="container mx-auto">
            <header className="text-center mb-16">
              <h2 id="services-heading" className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                خدماتنا المتميزة للتعلم في مصر | Study in Egypt Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                نقدم مجموعة شاملة من الخدمات لضمان نجاح رحلة التعلم في مصر وتجربة Study in Egypt المتميزة
              </p>
            </header>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
              {/* Added semantic structure and proper headings for services */}
              <article
                className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-blue-100"
                role="listitem"
              >
                <Card>
                  <CardHeader>
                    <GraduationCap className="h-12 w-12 text-primary mb-4" aria-hidden="true" />
                    <CardTitle className="font-serif">التسجيل في الجامعات المصرية</CardTitle>
                    <CardDescription>إنهاء إجراءات التسجيل في كافة الجامعات المصرية المعتمدة</CardDescription>
                  </CardHeader>
                </Card>
              </article>

              <article
                className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-blue-100"
                role="listitem"
              >
                <Card>
                  <CardHeader>
                    <Users className="h-12 w-12 text-primary mb-4" aria-hidden="true" />
                    <CardTitle className="font-serif">المتابعة حتى القبول النهائي</CardTitle>
                    <CardDescription>نتابع معك كل خطوة حتى الحصول على القبول النهائي في الجامعة</CardDescription>
                  </CardHeader>
                </Card>
              </article>

              <article
                className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-blue-100"
                role="listitem"
              >
                <Card>
                  <CardHeader>
                    <FileText className="h-12 w-12 text-primary mb-4" aria-hidden="true" />
                    <CardTitle className="font-serif">توثيق وترجمة الشهادات</CardTitle>
                    <CardDescription>نقوم بتوثيق وترجمة جميع الشهادات والوثائق المطلوبة</CardDescription>
                  </CardHeader>
                </Card>
              </article>

              <article
                className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-blue-100"
                role="listitem"
              >
                <Card>
                  <CardHeader>
                    <Award className="h-12 w-12 text-primary mb-4" aria-hidden="true" />
                    <CardTitle className="font-serif">تجهيز إجراءات الإقامة</CardTitle>
                    <CardDescription>تسهيل وتجهيز إجراءات الإقامة بأنواعها في مصر</CardDescription>
                  </CardHeader>
                </Card>
              </article>

              <article
                className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-blue-100"
                role="listitem"
              >
                <Card>
                  <CardHeader>
                    <Home className="h-12 w-12 text-primary mb-4" aria-hidden="true" />
                    <CardTitle className="font-serif">توفير السكن المناسب</CardTitle>
                    <CardDescription>نساعدك في العثور على السكن المناسب والآمن في مصر</CardDescription>
                  </CardHeader>
                </Card>
              </article>

              <article
                className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-blue-100"
                role="listitem"
              >
                <Card>
                  <CardHeader>
                    <Scale className="h-12 w-12 text-primary mb-4" aria-hidden="true" />
                    <CardTitle className="font-serif">استشارات قانونية</CardTitle>
                    <CardDescription>استشارات قانونية لكل ما تحتاجه في مصر</CardDescription>
                  </CardHeader>
                </Card>
              </article>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4" aria-labelledby="about-heading">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <article>
                <h2 id="about-heading" className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                  لماذا ZAD Edugate للتعلم في مصر؟
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  مع سنوات من الخبرة في تقديم خدمات التعلم في مصر وبرامج Study in Egypt للطلاب الوافدين في الجامعات
                  المصرية، أصبحت زاد إيدجيت الشريك الموثوق للعديد من الطلاب الراغبين في التعلم في مصر. فريقنا المتخصص
                  يمتلك معرفة عميقة بنظام التعليم المصري وبرامج Study in Egypt.
                </p>

                <h3 className="text-xl font-serif font-semibold text-foreground mb-4">خبرتنا:</h3>
                <ul className="space-y-4 mb-6" role="list">
                  <li className="flex items-start gap-3" role="listitem">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2" aria-hidden="true"></div>
                    <span className="text-foreground">
                      فهم عميق للجامعات المصرية: نمتلك معرفة واسعة بالجامعات المصرية وبرامجها الدراسية
                    </span>
                  </li>
                  <li className="flex items-start gap-3" role="listitem">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2" aria-hidden="true"></div>
                    <span className="text-foreground">
                      علاقات قوية مع الجامعات: لقد بنينا علاقات قوية مع العديد من الجامعات المصرية
                    </span>
                  </li>
                  <li className="flex items-start gap-3" role="listitem">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2" aria-hidden="true"></div>
                    <span className="text-foreground">فريق متخصص: فريقنا يتكون من خبراء ومتخصصين في مجال التعليم</span>
                  </li>
                </ul>

                <h3 className="text-xl font-serif font-semibold text-foreground mb-4">نتائج ملموسة:</h3>
                <ul className="space-y-4" role="list">
                  <li className="flex items-start gap-3" role="listitem">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2" aria-hidden="true"></div>
                    <span className="text-foreground">
                      معدلات قبول عالية: ساعدنا العديد من الطلاب في الحصول على قبول في الجامعات المصرية
                    </span>
                  </li>
                  <li className="flex items-start gap-3" role="listitem">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2" aria-hidden="true"></div>
                    <span className="text-foreground">
                      رضا الطلاب: نحن نفخر بتلبية احتياجات طلابنا وتقديم خدمات متميزة لهم
                    </span>
                  </li>
                </ul>
              </article>
              <div className="relative">
                <img
                  src="/diverse-students-library.png"
                  alt="مجموعة متنوعة من الطلاب يدرسون في مكتبة جامعية حديثة"
                  className="rounded-lg shadow-lg w-full"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 px-4 bg-blue-50/50" aria-labelledby="testimonials-heading">
          <div className="container mx-auto">
            <header className="text-center mb-16">
              <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                قصص نجاح التعلم في مصر - Study in Egypt Success Stories
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                اكتشف تجارب الطلاب الذين حققوا أحلامهم في التعلم في مصر وبرامج Study in Egypt معنا في الجامعات المصرية
                المعتمدة
              </p>
            </header>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
              {/* Added semantic structure for testimonials */}
              <article className="hover:shadow-lg transition-all duration-300 border-blue-100" role="listitem">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-1 mb-2" role="img" aria-label="تقييم 5 نجوم">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                      ))}
                    </div>
                    <CardTitle className="font-serif text-lg">أحمد محمد</CardTitle>
                    <CardDescription>طالب هندسة - جامعة القاهرة</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <blockquote className="text-muted-foreground leading-relaxed">
                      "فريق ZAD Edugate ساعدني في كل خطوة من التسجيل حتى القبول. الآن أدرس الهندسة في جامعة القاهرة!"
                    </blockquote>
                  </CardContent>
                </Card>
              </article>

              <article className="hover:shadow-lg transition-all duration-300 border-blue-100" role="listitem">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-1 mb-2" role="img" aria-label="تقييم 5 نجوم">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                      ))}
                    </div>
                    <CardTitle className="font-serif text-lg">فاطمة علي</CardTitle>
                    <CardDescription>طالبة طب - جامعة عين شمس</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <blockquote className="text-muted-foreground leading-relaxed">
                      "الخدمة المتميزة والمتابعة المستمرة جعلت حلمي بدراسة الطب في مصر حقيقة. شكراً ZAD Edugate!"
                    </blockquote>
                  </CardContent>
                </Card>
              </article>

              <article className="hover:shadow-lg transition-all duration-300 border-blue-100" role="listitem">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-1 mb-2" role="img" aria-label="تقييم 5 نجوم">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                      ))}
                    </div>
                    <CardTitle className="font-serif text-lg">خالد السعيد</CardTitle>
                    <CardDescription>طالب إدارة الأعمال - الجامعة الأمريكية بالقاهرة</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <blockquote className="text-muted-foreground leading-relaxed">
                      "بفضل إرشادهم المتخصص، تمكنت من الحصول على قبول في الجامعة الأمريكية بالقاهرة بسهولة."
                    </blockquote>
                  </CardContent>
                </Card>
              </article>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4" aria-labelledby="contact-heading">
          <div className="container mx-auto">
            <header className="text-center mb-16">
              <h2 id="contact-heading" className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                ابدأ رحلة التعلم في مصر | Start Your Study in Egypt Journey
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                ابدأ رحلة التعلم في مصر اليوم مع ZAD Edugate واحصل على استشارة مجانية لبرامج Study in Egypt
              </p>
            </header>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-foreground">اتصل بنا</h3>
                    <p className="text-muted-foreground">
                      <a href="tel:201080360400" className="hover:text-primary transition-colors">
                        201080360400
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center">
                    <MessageCircle className="h-6 w-6 text-green-500" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-foreground">واتساب</h3>
                    <p className="text-muted-foreground">
                      <a
                        href="https://wa.me/201080360400"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-green-500 transition-colors"
                      >
                        201080360400
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-foreground">راسلنا</h3>
                    <p className="text-muted-foreground">
                      <a href="mailto:zadedugate@gmail.com" className="hover:text-primary transition-colors">
                        zadedugate@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center">
                    <Facebook className="h-6 w-6 text-blue-600" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-foreground">فيسبوك</h3>
                    <p className="text-muted-foreground">
                      <a
                        href="https://www.facebook.com/zadedugate11"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 transition-colors"
                      >
                        ZAD Edugate
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4" role="contentinfo">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="/zad-logo.jpeg" alt="شعار ZAD Edugate" className="h-10 w-auto brightness-0 invert" />
              </div>
              <p className="text-slate-300 leading-relaxed mb-4">
                بوابتك للتعلم في مصر - Study in Egypt - نحن شركتك الموثوقة لتحقيق أحلامك التعليمية في الجامعات المصرية
                المعتمدة والتميز في التعلم في مصر.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/zadedugate11"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors"
                  aria-label="تابعنا على فيسبوك"
                >
                  <Facebook className="h-5 w-5 text-white" />
                </a>
                <a
                  href="https://wa.me/201080360400"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors"
                  aria-label="تواصل معنا عبر واتساب"
                >
                  <MessageCircle className="h-5 w-5 text-white" />
                </a>
                <a
                  href="tel:201080360400"
                  className="w-10 h-10 bg-slate-700 hover:bg-slate-600 rounded-full flex items-center justify-center transition-colors"
                  aria-label="اتصل بنا"
                >
                  <Phone className="h-5 w-5 text-white" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-serif font-semibold mb-4">خدماتنا</h3>
              <ul className="space-y-2 text-slate-300" role="list">
                <li role="listitem">التسجيل في الجامعات المصرية</li>
                <li role="listitem">توثيق وترجمة الشهادات</li>
                <li role="listitem">تجهيز إجراءات الإقامة</li>
                <li role="listitem">توفير السكن المناسب</li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif font-semibold mb-4">الجامعات المصرية</h3>
              <ul className="space-y-2 text-slate-300" role="list">
                <li role="listitem">جامعة القاهرة</li>
                <li role="listitem">جامعة عين شمس</li>
                <li role="listitem">الجامعة الأمريكية بالقاهرة</li>
                <li role="listitem">جامعة الإسكندرية</li>
                <li role="listitem">جامعة أسيوط</li>
                <li role="listitem">جامعة المنصورة</li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif font-semibold mb-4">تواصل معنا</h3>
              <ul className="space-y-2 text-slate-300" role="list">
                <li role="listitem">
                  <a href="tel:201080360400" className="hover:text-white transition-colors flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    201080360400
                  </a>
                </li>
                <li role="listitem">
                  <a
                    href="https://wa.me/201080360400"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors flex items-center gap-2"
                  >
                    <MessageCircle className="h-4 w-4" />
                    واتساب
                  </a>
                </li>
                <li role="listitem">
                  <a
                    href="mailto:zadedugate@gmail.com"
                    className="hover:text-white transition-colors flex items-center gap-2"
                  >
                    <Mail className="h-4 w-4" />
                    zadedugate@gmail.com
                  </a>
                </li>
                <li role="listitem">
                  <a
                    href="https://www.facebook.com/zadedugate11"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors flex items-center gap-2"
                  >
                    <Facebook className="h-4 w-4" />
                    فيسبوك
                  </a>
                </li>
                <li role="listitem">القاهرة، جمهورية مصر العربية</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 ZAD Edugate. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
