export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="border-b">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <a href="#" className="text-xl font-bold">
            IndusLab
          </a>
          <div className="flex gap-6">
            <a href="#" className="text-sm">
              The Brand
            </a>
            <a href="#" className="text-sm">
              Stories
            </a>
            <a href="#" className="text-sm">
              Fabrics
            </a>
            <a href="#" className="text-sm">
              Stockist
            </a>
            <a href="#" className="text-sm">
              Reviews
            </a>
          </div>
          <div className="flex gap-4">
            <a href="#" className="text-sm">
              Login
            </a>
            <a href="#" className="text-sm">
              Sign Up
            </a>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="bg-[#FFC5A8] relative">
          <div className="container mx-auto px-4 py-16 flex items-center justify-between">
            <div className="">
              <h1 className="text-4xl font-bold mb-4">Add color to your masterpiece</h1>
              <button className="bg-white px-6 py-2 rounded-full">Shop Now</button>
            </div>
          </div>
        </section>

        {/* Product Gallery */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-3 gap-4" id="productCarousel">
              <div className="relative group cursor-pointer">
                <img
                  src="/placeholder.svg?height=300&width=400"
                  alt="Product 1"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white text-lg">SILK</span>
                </div>
              </div>
              <div className="relative group cursor-pointer">
                <img
                  src="/placeholder.svg?height=300&width=400"
                  alt="Product 2"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white text-lg">COTTON</span>
                </div>
              </div>
              <div className="relative group cursor-pointer">
                <img
                  src="/placeholder.svg?height=300&width=400"
                  alt="Product 3"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white text-lg">LINEN</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Store Locator */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-md">
              <h2 className="text-2xl font-bold mb-2">Retail Store Locator</h2>
              <p className="mb-4">Buy our products in more than 600 retail stores worldwide</p>
              <button className="bg-black text-white px-6 py-2 rounded-full">Find Store</button>
            </div>
            <div className="mt-8">
              <img src="/placeholder.svg?height=300&width=800" alt="World Map" className="w-full" />
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">FEATURED PRODUCTS</h2>
            <div className="grid grid-cols-4 gap-8">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="text-center">
                  <img
                    src="/placeholder.svg?height=200&width=200"
                    alt={`Featured product ${i + 1}`}
                    className="w-full mb-4"
                  />
                  <h3 className="font-medium">Product Name</h3>
                  <p className="text-gray-600">$99.99</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-[#E8F3E8] py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-8">TESTIMONIALS</h2>
            <div className="max-w-2xl mx-auto">
              <p className="text-gray-600 italic mb-4">
                "As a machine quilter, I love the sheen of Glide and how it adds an extra special touch to my quilts. It's the perfect blend of beauty and strength. Not only do I love the thread, but I love working with Hab+Dash to bring out the best in my quilting. They have been an integral part of our Free Motion Quilting Challenges and helped meet our thread needs each time."

  
              </p>
              <p className="font-medium">- Angela Walters</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">About Us</h3>
              <p className="text-sm text-gray-600">
                bsvsdfsafdsgsddsfghgdfghfdhdfhdghdfgjfdnkjfsdbfhjbfbsdhfbjshdbhjsdjbghfbgjdbfjbdgjbdjfbgjdbfjgbjhdfbgjhbgfjd
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-gray-600">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600">
                    Shipping
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600">
                    Returns
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Shop</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-gray-600">
                    All Products
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600">
                    New Arrivals
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600">
                    Sale
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-gray-600">
                    Email Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600">
                    Live Chat
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

