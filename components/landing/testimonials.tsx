import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "علی محمدی",
    role: "مدیرعامل شرکت فناوران نوین",
    content: "همکاری با تکنوژن تجربه‌ای فوق‌العاده بود. تیم حرفه‌ای و متخصص آن‌ها توانست نیازهای ما را به بهترین شکل برآورده کند.",
    avatar: "ع",
  },
  {
    name: "مریم احمدی",
    role: "مدیر فنی استارتاپ رشد",
    content: "کیفیت کار و سرعت تحویل پروژه واقعاً چشمگیر بود. پشتیبانی عالی و ارتباط مؤثر از نقاط قوت این شرکت است.",
    avatar: "م",
  },
  {
    name: "رضا کریمی",
    role: "بنیانگذار اپلیکیشن هوشمند",
    content: "تکنوژن نه تنها یک پیمانکار، بلکه یک شریک استراتژیک برای ما شد. ایده‌های نوآورانه آن‌ها ارزش افزوده زیادی به پروژه ما داد.",
    avatar: "ر",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 border border-primary/20">
            نظرات مشتریان
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            آنچه مشتریان ما می‌گویند
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            موفقیت مشتریان ما، بزرگترین افتخار ماست
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="relative p-8 rounded-2xl bg-background border border-border"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Quote className="w-10 h-10 text-primary/20 mb-4" />
              
              <p className="text-foreground leading-relaxed mb-6">
                {testimonial.content}
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
