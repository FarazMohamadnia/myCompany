import { motion } from "framer-motion";
import { 
  Code2, 
  Smartphone, 
  Cloud, 
  Shield, 
  Cpu, 
  LineChart 
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "توسعه نرم‌افزار",
    description: "طراحی و توسعه نرم‌افزارهای اختصاصی با جدیدترین تکنولوژی‌ها",
  },
  {
    icon: Smartphone,
    title: "اپلیکیشن موبایل",
    description: "ساخت اپلیکیشن‌های iOS و Android با بهترین تجربه کاربری",
  },
  {
    icon: Cloud,
    title: "سرویس‌های ابری",
    description: "راه‌اندازی و مدیریت زیرساخت ابری برای کسب‌وکار شما",
  },
  {
    icon: Shield,
    title: "امنیت سایبری",
    description: "محافظت از داده‌ها و سیستم‌های شما در برابر تهدیدات",
  },
  {
    icon: Cpu,
    title: "هوش مصنوعی",
    description: "پیاده‌سازی راهکارهای هوشمند با استفاده از AI و ML",
  },
  {
    icon: LineChart,
    title: "تحلیل داده",
    description: "استخراج بینش‌های ارزشمند از داده‌های کسب‌وکار",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function Services() {
  return (
    <section id="services" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 border border-primary/20">
            خدمات ما
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            راهکارهای جامع فناوری
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            مجموعه‌ای کامل از خدمات فناوری برای رشد و توسعه کسب‌وکار شما
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative p-8 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                <motion.div
                  className="mt-6 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ x: 10 }}
                  whileHover={{ x: 0 }}
                >
                  <span className="text-sm font-medium">بیشتر بدانید</span>
                  <span>←</span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
