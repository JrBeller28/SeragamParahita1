import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <img 
                src="https://raw.githubusercontent.com/Antigravity-Studio/media-assets/main/garment/parahita-logo.png" 
                alt="Parahita Logo" 
                className="h-12 w-auto object-contain brightness-0 invert"
                referrerPolicy="no-referrer"
              />
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Leading garment manufacturer specializing in high-quality uniforms, corporate wear, and safety gear.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link to="/" className="hover:text-red-500 transition-colors">Home</Link></li>
              <li><Link to="/products" className="hover:text-red-500 transition-colors">Products</Link></li>
              <li><Link to="/partner" className="hover:text-red-500 transition-colors">Partner</Link></li>
              <li><Link to="/about" className="hover:text-red-500 transition-colors">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Products</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link to="/products" className="hover:text-red-500 transition-colors">Uniforms</Link></li>
              <li><Link to="/products" className="hover:text-red-500 transition-colors">Safety Gear</Link></li>
              <li><Link to="/products" className="hover:text-red-500 transition-colors">Corporate Wear</Link></li>
              <li><Link to="/products" className="hover:text-red-500 transition-colors">Workwear</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-gray-400">
              <li>Jl. Garment No. 123</li>
              <li>Jakarta, Indonesia</li>
              <li>info@parahita.com</li>
              <li>+62 21 1234 5678</li>
            </ul>
          </div>
        </div>

        <Separator className="bg-gray-800 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2024 Parahita Garment. All rights reserved.</p>
          <div className="flex gap-8">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
