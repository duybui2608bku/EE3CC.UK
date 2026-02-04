import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ProductGrid } from "@/components/product-grid";
import { getFeaturedProducts, getAllCategories, getAllProducts } from "@/lib/data";
import { ArrowRight, Speaker, Zap, Mic, Radio, Award, Headphones, Volume2, Shield, Star,  } from "lucide-react";

export default function Home() {
  const featuredProducts = getFeaturedProducts();
  const categories = getAllCategories().slice(0, 6);
  const allProducts = getAllProducts();
  const galleryProducts = allProducts.slice(0, 8);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1">
        <section className="relative overflow-hidden py-20 sm:py-32">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background z-10" />
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1920&q=80")'
              }}
            />
          </div>
          
          <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm text-primary backdrop-blur-sm">
                <Award className="h-4 w-4" />
                <span>Leading Professional Audio Brand</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
                Professional Audio Systems
                <span className="block text-primary mt-2">of Superior Quality</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl max-w-2xl mx-auto">
                Discover our complete collection of speakers, amplifiers, microphones and audio processing equipment 
                designed for professional applications with superior quality.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-4">
                <Link
                  href="/category/loudspeakers"
                  className="rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-200 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary cursor-pointer"
                >
                  View Products
                </Link>
                <Link
                  href="#categories"
                  className="text-base font-semibold leading-6 text-foreground transition-colors hover:text-primary cursor-pointer inline-flex items-center gap-2"
                >
                  Explore Categories <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Why Choose E3 Audio?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We are committed to delivering the best audio quality
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: <Award className="h-8 w-8" />,
                  title: "High Quality",
                  description: "Products are rigorously tested to ensure superior quality"
                },
                {
                  icon: <Headphones className="h-8 w-8" />,
                  title: "Professional Audio",
                  description: "Advanced technology delivers an immersive audio experience"
                },
                {
                  icon: <Shield className="h-8 w-8" />,
                  title: "Reliable Warranty",
                  description: "Comprehensive warranty and dedicated customer support"
                },
                {
                  icon: <Volume2 className="h-8 w-8" />,
                  title: "Wide Product Range",
                  description: "Hundreds of products to meet all your audio needs"
                }
              ].map((feature, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl border bg-card p-6 transition-all duration-200 hover:shadow-xl hover:border-primary/50 hover:-translate-y-1 cursor-pointer"
                >
                  <div className="mb-4 text-primary transition-transform duration-200 group-hover:scale-110">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative py-20 sm:py-32 overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/50 to-background" />
          
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
          
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm text-primary backdrop-blur-sm">
                <span>Watch & Learn</span>
              </div>
              <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">
                Product Demonstration
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Experience the superior quality and professional performance of our audio equipment
              </p>
            </div>
            
            <div className="mx-auto max-w-5xl">
              <div className="group relative">
                {/* Outer glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Video container */}
                <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-card to-card/50 shadow-2xl backdrop-blur-sm">
                  {/* Decorative corner accents */}
                  <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-primary/30 rounded-tl-2xl" />
                  <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-primary/30 rounded-tr-2xl" />
                  <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-primary/30 rounded-bl-2xl" />
                  <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-primary/30 rounded-br-2xl" />
                  
                  {/* Video element */}
                  <video
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  >
                    <source
                     src="http://e3eec.uk/wp-content/uploads/2018/07/E3-Microphone.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  
                  {/* Overlay gradient for better video controls visibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
              
              {/* Additional info below video */}
              <div className="mt-8 text-center">
                <p className="text-sm text-muted-foreground">
                  Professional audio equipment designed for superior performance
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Product Collection
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Discover our featured products
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {galleryProducts.map((product) => (
                <Link
                  key={product.ID}
                  href={`/product/${product.ID}`}
                  className="group relative aspect-square overflow-hidden rounded-lg border bg-card transition-all duration-300 hover:shadow-xl hover:border-primary/50 hover:scale-105 cursor-pointer"
                >
                  {product.Images ? (
                    <Image
                      src={product.Images}
                      alt={product.Name || "Product image"}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-muted text-muted-foreground">
                      <Speaker className="h-12 w-12" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-sm font-semibold text-foreground line-clamp-1">
                      {product.Name}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      €{product["Sale price"] || product["Regular price"]}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="categories" className="py-16 sm:py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Product Categories
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Choose a category to explore products that meet your needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map((category) => {
                const icons: Record<string, React.ReactNode> = {
                  loudspeakers: <Speaker className="h-8 w-8" />,
                  "power-amplifier": <Zap className="h-8 w-8" />,
                  amplifier: <Zap className="h-8 w-8" />,
                  microphone: <Mic className="h-8 w-8" />,
                  "processor-equipment": <Radio className="h-8 w-8" />,
                  mixer: <Radio className="h-8 w-8" />,
                  crossover: <Radio className="h-8 w-8" />,
                };
                
                const icon = icons[category.slug] || <Speaker className="h-8 w-8" />;
                
                return (
                  <Link
                    key={category.slug}
                    href={`/category/${category.slug}`}
                    className="group relative overflow-hidden rounded-xl border bg-card p-6 transition-all duration-200 hover:shadow-xl hover:border-primary/50 hover:-translate-y-1 cursor-pointer"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="mb-4 text-primary transition-transform duration-200 group-hover:scale-110">
                          {icon}
                        </div>
                        <h3 className="text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors">
                          {category.name}
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                          {category.count} products
                        </p>
                      </div>
                      <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="relative py-16 sm:py-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background z-10" />
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1920&q=80")'
              }}
            />
          </div>
          
          <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Our Achievements
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Numbers that speak to our service quality
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
              {[
                { value: "500+", label: "Products", icon: <Speaker className="h-6 w-6" /> },
                { value: "10K+", label: "Customers", icon: <Headphones className="h-6 w-6" /> },
                { value: "15+", label: "Years Experience", icon: <Award className="h-6 w-6" /> },
                { value: "98%", label: "Satisfaction", icon: <Star className="h-6 w-6" /> }
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-xl border bg-card/50 backdrop-blur-sm"
                >
                  <div className="flex justify-center mb-3 text-primary">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-muted/30 py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Featured Products
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Discover our most popular products
              </p>
            </div>
            
            <div className="mt-12">
              {featuredProducts.length > 0 ? (
                <ProductGrid products={featuredProducts} />
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">Loading products...</p>
                </div>
              )}
            </div>

            {featuredProducts.length > 0 && (
              <div className="mt-12 text-center">
                <Link
                  href="/category/loudspeakers"
                  className="inline-flex items-center gap-2 rounded-lg border border-primary bg-background px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground cursor-pointer"
                >
                  View All Products
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            )}
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                What Our Customers Say
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Feedback from customers who trust our products
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "John Smith",
                  role: "Professional DJ",
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces",
                  content: "Excellent sound quality, products meet my needs perfectly. Very satisfied with the service.",
                  rating: 5
                },
                {
                  name: "Sarah Johnson",
                  role: "Event Manager",
                  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces",
                  content: "E3 Audio provides perfect audio solutions for our events. The support team is very professional.",
                  rating: 5
                },
                {
                  name: "Michael Chen",
                  role: "Studio Owner",
                  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=faces",
                  content: "High quality products at reasonable prices. Have been using for many years and never disappointed.",
                  rating: 5
                }
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl border bg-card p-6 transition-all duration-200 hover:shadow-xl hover:border-primary/50 cursor-pointer"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-primary/20">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-card-foreground">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {testimonial.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
