import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    content: "توسعه صرافی غیر متمرکز و امنیت و بازرسی آن توسط تیم تکنوژن، تجربه‌ای بی‌نظیر بود. تخصص و تعهد ما به کیفیت باعث ساخت پروژه هایی خاص و موفق می شود.",
  },
  {
    content: "پروژه رمز ارزی Axora protocol که توکنی با قابلیت استیکینگ و فروش اولیه بود توسط تیم تکنوژن توسعه یافت. همکاری ما  بسیار حرفه‌ای و نتیجه‌محور بود، و مشتری از نتیجه نهایی بسیار راضی بود.",
  },
  {
    content: "توسعه سیستم های پرداختی روی بلاکچین تون و بلاکچین های EVM Base و سیستم ارسال جمعی NFT روی بلاکچین تون توسط تیم تکنوژن انجام شد که در سطح جهانی تجربه ایی بزرگ بود.",
  },
  {
    content: "ساخت چندین وب اپلیکشن برای شرکت های مختلف با بالاترین کیفیت و رضایت کامل مشتری و بازخورد خوب از آن ها پروژه ها ",
  },
  {
    content: " برای اولین بار در ایران اقدام به توسعه ابزار های اختصاصی برای امنیت قرارداد هوشمند کردیم که بازرسی قرارداد هوشمند و تامین امنیت ان را برای تیم ما بسیار آسان می کند",
  },
  {
    content : "دیزاین کردن محصول های مختلف و حل مشکلات بیزینس پلن پروژه های استارت اپی و دیتا انالیز محصول ها برای بهبود آن ها یکی از کار های بزرگیست که توسط تیم ما انجام میشود ",
  }
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
            تجربیات ما 
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            تجربیات تخصصی که باعث افتخار ماست
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            تجربیات موفق مشتریان ما در صنایع مختلف، گواهی بر تعهد و کیفیت خدمات ما است. هر پروژه یک داستان موفقیت است که با همکاری نزدیک با مشتریانمان نوشته شده است.
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
              
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
