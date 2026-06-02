import { motion } from 'framer-motion'
import { Footer } from '@/components/landing/footer'
import { Code2, Shield, Cpu, LineChart, Target, BitcoinIcon } from 'lucide-react'

const serviceCards = [
  {
    icon: Code2,
    title: 'توسعه نرم‌افزار',
    text: 'با بهره‌گیری از اکوسیستم JavaScript، راهکارهای مدرن و مقیاس‌پذیر برای وب، موبایل و سرویس‌های ابری توسعه می‌دهیم. از طراحی فرانت‌اند و بک‌اند تا توسعه APIها و معماری‌های پیچیده، تمامی مراحل با استانداردهای روز انجام می‌شود. هدف ما ارائه محصولاتی سریع، پایدار و آماده رشد برای کسب‌وکارهای دیجیتال است.',
  },
  {
    icon: Target,
    title: 'ساخت محصول',
    text: 'ما از مرحله ایده‌پردازی تا طراحی، توسعه و بهینه‌سازی محصول، همراه کسب‌وکارها هستیم. با ترکیب طراحی تجربه کاربری، مهندسی نرم‌افزار و تحلیل نیاز بازار، محصولاتی کارآمد و کاربرمحور خلق می‌کنیم. تمرکز ما بر ساخت محصولاتی است که علاوه بر کیفیت فنی بالا، توانایی رشد و موفقیت در بازارهای رقابتی را داشته باشند.',
  },
  {
    icon: Shield,
    title: 'امنیت سایبری',
    text: 'خدمات امنیت سایبری ما شامل ارزیابی امنیتی، تست نفوذ، تحلیل ریسک، پایش تهدیدات و بهبود زیرساخت‌های امنیتی است. با شناسایی نقاط ضعف و ارائه راهکارهای عملی، به سازمان‌ها کمک می‌کنیم تا از دارایی‌های دیجیتال خود محافظت کنند. رویکرد ما ترکیبی از دانش فنی، استانداردهای بین‌المللی و تجربه عملی در مقابله با تهدیدات نوین است.',
  },
  {
    icon: Cpu,
    title: 'هوش مصنوعی',
    text: 'ما به کسب‌وکارها کمک می‌کنیم تا از ظرفیت هوش مصنوعی برای افزایش بهره‌وری، خودکارسازی فرایندها و خلق ارزش جدید استفاده کنند. خدمات ما شامل توسعه مدل‌های هوشمند، سیستم‌های پردازش داده، چت‌بات‌ها، ابزارهای تحلیل محتوا و راهکارهای مبتنی بر یادگیری ماشین است. هدف ما تبدیل فناوری AI به یک مزیت رقابتی واقعی برای سازمان‌ها است.',
  },
  {
    icon: LineChart,
    title: 'تحلیل داده',
    text: 'با استفاده از روش‌های پیشرفته تحلیل داده، اطلاعات خام را به بینش‌های ارزشمند و قابل تصمیم‌گیری تبدیل می‌کنیم. خدمات ما شامل جمع‌آوری، پردازش، تحلیل و مصورسازی داده‌ها برای شناسایی الگوها و فرصت‌های رشد است. این رویکرد به کسب‌وکارها کمک می‌کند تصمیمات دقیق‌تر، سریع‌تر و مبتنی بر داده اتخاذ کنند.',
  },
  {
    icon: BitcoinIcon,
    title: 'بلاکچین و امنیت بلاکچین',
    text: 'ما در حوزه بلاکچین، از طراحی معماری و توسعه قراردادهای هوشمند تا پیاده‌سازی زیرساخت‌های Web3 را به‌صورت تخصصی ارائه می‌کنیم. تمرکز ما بر ساخت راهکارهای مقیاس‌پذیر، امن و متناسب با نیاز کسب‌وکارها است. همچنین با انجام ممیزی امنیتی، بررسی کد، تحلیل آسیب‌پذیری‌ها و ارزیابی ریسک، امنیت پروژه‌های بلاکچینی را در تمامی مراحل توسعه تضمین می‌کنیم.'
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8 mb-14">
            <div className="hidden md:block rounded-[32px] border border-primary/20 p-0 overflow-hidden shadow-lg shadow-primary/10">
              <video
                src="/robot.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 object-cover rounded-3xl"
              />
            </div>

            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-primary mb-4">
                خدمات ما
              </span>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
                راهکارهای حرفه‌ای و جامع فناوری
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                ما مجموعه‌ای از خدمات تخصصی فناوری را ارائه می‌دهیم که به شما کمک می‌کند کسب‌وکار خود را رشد دهید، فرآیندها را بهینه کنید و تجربه مشتری را ارتقا دهید.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {serviceCards.map((service) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  className="rounded-[32px] p-[2px] shadow-sm shadow-primary/10 h-full"
                  style={{
                    background: 'linear-gradient(135deg, rgba(59,130,246,0.4), rgba(56,189,248,0.1), rgba(129,140,248,0.35))',
                    backgroundSize: '200% 200%',
                    backgroundPosition: '0% 50%',
                  }}
                  animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <div className="h-full min-h-[360px] rounded-[30px] bg-background p-7">
                    <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h2 className="text-2xl font-semibold mb-3">{service.title}</h2>
                    <p className="text-muted-foreground leading-relaxed">{service.text}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
