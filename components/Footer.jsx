import Link from "next/link"
import Image from "next/image"
import Socials from "@/components/Socials"
import { MapPin, Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-white text-[#4d5089] w-full border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        {/* Main Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Our Locations */}
          <div>
            <div className="md:pt-0">
              <h3 className="text-xl font-bold mb-6">Our Locations</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-[#4d5089]" />
                  <Link href="/contact" className="text-sm text-gray-600 hover:text-[#4d5089] transition-colors duration-200">
                    401 Broadway, 24th Floor, Orchard Cloud View, London
                  </Link>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-[#4d5089]" />
                  <Link href="/contact" className="text-sm text-gray-600 hover:text-[#4d5089] transition-colors duration-200">
                    2nd Floor, Plaza Center, Downtown Dubai
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Useful Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-6">Useful Links</h3>
            <nav className="space-y-3">
              <Link 
                href="/about"
                className="block text-sm hover:text-[#4d5089] transition-colors duration-200"
              >
                About Us
              </Link>
              <Link 
                href="/services"
                className="block text-sm hover:text-[#4d5089] transition-colors duration-200"
              >
                Services
              </Link>
              <Link 
                href="/blog"
                className="block text-sm hover:text-[#4d5089] transition-colors duration-200"
              >
                Blog
              </Link>
              <Link 
                href="/careers"
                className="block text-sm hover:text-[#4d5089] transition-colors duration-200"
              >
                Join Us
              </Link>
              <Link 
                href="/contact"
                className="block text-sm hover:text-[#4d5089] transition-colors duration-200"
              >
                Contact Us
              </Link>
            </nav>
          </div>

          {/* How Can We Help */}
          <div>
            <h3 className="text-xl font-bold mb-6">How Can We Help?</h3>
            <div className="space-y-4">
              <Link 
                href="mailto:info@alphabrains.com"
                className="flex items-center gap-3 group"
              >
                <Mail className="w-5 h-5 text-[#4d5089]" />
                <span className="text-sm text-gray-600 group-hover:text-[#4d5089] transition-colors duration-200">
                  info@alphabrains.com
                </span>
              </Link>
              <Link 
                href="mailto:contact@alphabrains.com"
                className="flex items-center gap-3 group"
              >
                <Mail className="w-5 h-5 text-[#4d5089]" />
                <span className="text-sm text-gray-600 group-hover:text-[#4d5089] transition-colors duration-200">
                  contact@alphabrains.com
                </span>
              </Link>
              <Link 
                href="tel:+1234567890"
                className="flex items-center gap-3 group"
              >
                <Phone className="w-5 h-5 text-[#4d5089]" />
                <span className="text-sm text-gray-600 group-hover:text-[#4d5089] transition-colors duration-200">
                  +1 (234) 567-890
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="w-full pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/">
                <Image 
                  src="/logo_footer.png" 
                  alt="Alpha Brains Logo"
                  width={100}
                  height={40}
                  className="object-contain"
                  priority
                />
              </Link>
            </div>
            
            {/* Copyright */}
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Alpha Brains, All Rights Reserved
            </p>
            
            {/* Social Links */}
            <div className="flex-shrink-0">
              <Socials />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}