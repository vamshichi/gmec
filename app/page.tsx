import Image from "next/image"
// import ClientQRScanner from "@/app/components/ClientQRScanner"
import bg from '@/public/images/bg.jpg'
import logo from '@/public/images/gmec logo.jpg'
import EventDetails from "./components/EventDetails"
import ExhibitorRegistrationForm from "./components/reg"

export default function HealthcareExpoLanding() {
return (
    <div className="min-h-screen relative">
      {/* Full-page background image */}
      <div className="fixed inset-0 z-0">
        <Image
          src={bg}
          alt="Healthcare background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="bg-sky-600 bg-opacity-90 text-white">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="w-16 h-16 relative">
                <Image
                  src={logo}
                  alt="Healthcare Expo Logo"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div>
                <h1 className="text-4xl font-extrabold text-center">GMEC India 2025</h1>
                <p className="text-center mt-2 text-lg">April 25th to 27th, 2025</p>
                <p> <span>Venue:</span> Palace Grounds, Tripura Vasini A/C, Bengaluru, India</p>
              </div>
              <div className="w-16 h-16"></div> {/* Placeholder for symmetry */}
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-8">
        <div className="py-20">
            <EventDetails />
          </div>
          {/* Event Details Section */}
          <section className="mb-12">
            <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-blue-700">Event Details</h2>
              <ul className="space-y-4 text-gray-700 text-lg">
                <li>
                  <strong>Venue:</strong> Palace Grounds, Tripura Vasini A/C, Bengaluru, India
                </li>
                <li>
                  <strong>Date:</strong> April 25th to 27th, 2025
                </li>
                <li>
                  Join us for India&apos;s largest Medical exhibition, showcasing cutting-edge innovations in medical
                  technology and services.
                </li>
              </ul>
            </div>
          </section>

          {/* QR Scanner Section */}
          {/* <section className="mb-12">
            <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-blue-700">Scan QR Code</h2>
              <p className="text-gray-600 text-lg mb-8">Scan the QR code to connect on WhatsApp.</p>
              <ClientQRScanner />
            </div>
          </section> */}

          {/* Exhibitor Registration Section */}
          <section>
            <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-blue-700">Exhibitor Registration</h2>
              <p className="text-gray-600 text-lg mb-8">Fill out the form below to register as an exhibitor.</p>
              <ExhibitorRegistrationForm />
            </div>
          </section>
          
        </main>

        {/* Footer */}
        <footer className="bg-gray-100 bg-opacity-90 mt-12">
          <div className="container mx-auto px-4 py-6 text-center">
            <p className="text-gray-600">&copy; 2025 Gmec India. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}

