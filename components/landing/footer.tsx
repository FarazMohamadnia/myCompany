import { motion } from "framer-motion";
import { 
  Instagram, 
  Linkedin, 
  Twitter, 
  Mail, 
  Phone, 
  MapPin 
} from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = {
  services: [
    { label: "توسعه نرم‌افزار", href: "/services" },
    { label: "توسعه بلاکچین", href: "/services" },
    { label: "امنیت نرم افزار", href: "/services" },
    { label: "مشاوره فنی", href: "/contact" },
  ],
  company: [
    { label: "درباره ما", href: "/about" },
    { label: "تیم ما", href: "/about" },
    { label: "نمونه کارها", href: "/portfolio" },
    // { label: "استخدام", href: "#" },
    // { label: "بلاگ", href: "#" },
  ],
  support: [
    // { label: "پشتیبانی", href: "#" },
    { label: "سوالات متداول", href: "#" },
    { label: "قوانین", href: "#" },
    // { label: "حریم خصوصی", href: "#" },
  ],
};

const socialLinks = [
  // { icon: Instagram, href: "#", label: "اینستاگرام" },
  // { icon: Linkedin, href: "#", label: "لینکدین" },
  // { icon: Twitter, href: "#", label: "توییتر" },
];

export function Footer() {
  return (
    <footer id="contact" className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.a
              href="#"
              className="text-2xl font-bold text-foreground inline-block mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-primary">تکنو</span>ژن
            </motion.a>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-sm">
              شرکت پیشرو در ارائه راهکارهای فناوری اطلاعات و خدمات نرم‌افزاری با بیش از ۶ سال تجربه
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a href="mailto:info@technogen.ir" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="w-5 h-5 text-primary" />
                info@technogen.ir
              </a>
              <a href="tel:+982112345678" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="w-5 h-5 text-primary" />
                ۰۹۱۰۹۲۷۵۸۸۹
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                تهران، خیابان تهرانپارس 
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">خدمات</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">شرکت</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">پشتیبانی</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © ۱۴۰۳ تکنوژن. تمامی حقوق محفوظ است.
          </p>
          
          {/* <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                whileHover={{ scale: 1.1 }}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div> */}
        </div>
      </div>
    </footer>
  );
}
