import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link
              href="/"
              className="flex items-center transition-opacity hover:opacity-80"
            >
              <Image
                src="http://e3eec.uk/wp-content/uploads/2018/08/E3-LOGO-TEXT-1.png"
                alt="E3 Audio Logo"
                width={160}
                height={40}
                className="h-8 w-auto"
                unoptimized
              />
            </Link>
            <p className="text-sm text-muted-foreground">
              Specializing in professional speakers and high-quality audio equipment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/category/loudspeakers"
                  className="text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
                >
                  Speakers
                </Link>
              </li>
              <li>
                <Link
                  href="/category/power-amplifier"
                  className="text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
                >
                  Amplifier
                </Link>
              </li>
              <li>
                <Link
                  href="/category/microphone"
                  className="text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
                >
                  Microphone
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/category/loudspeakers"
                  className="text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
                >
                  Loudspeakers
                </Link>
              </li>
              <li>
                <Link
                  href="/category/power-amplifier"
                  className="text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
                >
                  Power Amplifier
                </Link>
              </li>
              <li>
                <Link
                  href="/category/microphone"
                  className="text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
                >
                  Microphone
                </Link>
              </li>
              <li>
                <Link
                  href="/category/processor-equipment"
                  className="text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
                >
                  Processor Equipment
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="space-y-2">
                <p>Bockenheimer Landstraße 57-51, 60323 Frankfurt am Main, Germany</p>
                <p>26/F, Tower One Time Square, 1 Matheson Street, Causeway Bay, Hong Kong</p>
                <p>E3 AUDIO & ELECTRONICS EQUIPMENT CO., LTD., SHENZHEN, 523050, CHINA</p>
              </li>
              <li>
                <a
                  href="mailto:e3eecelectronics@gmail.com"
                  className="flex items-center gap-2 transition-colors hover:text-foreground"
                >
                  <Mail className="h-4 w-4" />
                  <span>e3eecelectronics@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; Copyright 2026 - E3 AUDIO & ELECTRONICS EQUIPMENT CO., LTD.,</p>
        </div>
      </div>
    </footer>
  );
}
