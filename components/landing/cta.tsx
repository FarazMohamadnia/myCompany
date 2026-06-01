import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/90 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            آماده شروع پروژه جدید هستید؟
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            همین امروز با کارشناسان ما تماس بگیرید و اولین قدم را به سوی تحول دیجیتال بردارید
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+989109275889">
              <Button size="lg" className="gap-2 px-8 py-6 text-lg">
                  تماس با ما
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </a>
            <Link to={'/portfolio'}>
              <Button variant="outline" size="lg" className="gap-2 px-8 py-6 text-lg">
               پروژه ها 
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
