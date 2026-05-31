import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const features = [
  "تیم متخصص و با تجربه",
  "پشتیبانی ۲۴ ساعته",
  "قیمت رقابتی",
  "تحویل به موقع پروژه",
  "امنیت بالا",
  "به‌روزرسانی مداوم",
];

export function Features() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-1/2 -left-1/4 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4 border border-accent/20">
              چرا تکنوژن؟
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              شریک مطمئن شما در{" "}
              <span className="text-primary">دنیای دیجیتال</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              با بیش از یک دهه تجربه در صنعت فناوری، ما به کسب‌وکارها کمک می‌کنیم 
              تا با استفاده از راهکارهای نوآورانه، به اهداف خود دست یابند.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Animated rings */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 rounded-full border border-primary/20"
                  style={{ 
                    scale: 0.6 + i * 0.2,
                  }}
                  animate={{
                    opacity: [0.2, 0.5, 0.2],
                    scale: [0.6 + i * 0.2, 0.65 + i * 0.2, 0.6 + i * 0.2],
                  }}
                  transition={{
                    duration: 3,
                    delay: i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}

              {/* Center content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-48 h-48 rounded-full bg-card border border-border flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                >
                  <div className="text-center">
                    <div className="text-5xl font-bold text-primary mb-1">۱۰+</div>
                    <div className="text-muted-foreground text-sm">سال تجربه</div>
                  </div>
                </motion.div>
              </div>

              {/* Floating elements */}
              {[
                { top: "10%", right: "10%", delay: 0 },
                { top: "60%", right: "0%", delay: 0.5 },
                { top: "80%", right: "50%", delay: 1 },
                { top: "20%", right: "70%", delay: 1.5 },
              ].map((pos, i) => (
                <motion.div
                  key={i}
                  className="absolute w-4 h-4 rounded-full bg-primary"
                  style={{ top: pos.top, right: pos.right }}
                  animate={{
                    y: [-10, 10, -10],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    delay: pos.delay,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
