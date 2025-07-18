import { ExternalLink, Award } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header Section */}
        <div className="flex items-start justify-between mb-8">
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-black mb-4">Yilin Wang</h1>
            <p className="text-gray-700 text-lg mb-1">
              A product designer based in New York. Previously at{' '}
              <span className="text-red-500 font-medium">TikTok</span>, designing B2B and B2C features to
            </p>
            <p className="text-gray-700 text-lg mb-6">
              help creators sell products and earn more money💰
            </p>
            
            <div className="flex items-center gap-6 text-base">
              <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors">
                <span>🔗</span> LinkedIn
              </a>
              <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors">
                <span>📄</span> Resume
              </a>
              <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors">
                <span>✍️</span> Medium
              </a>
            </div>
          </div>
          
          <div className="ml-12">
            <div className="w-24 h-24 rounded-full bg-gray-200 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face" 
                alt="Yilin Wang"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <hr className="border-gray-300 mb-16" />

        {/* TikTok 2024 Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-black mb-4">TikTok 2024</h2>
          <p className="text-gray-700 text-lg mb-12 leading-relaxed">
            During my internship at TikTok Global e-commerce - Creator and Affiliate team, I owned and shipped the features below across the LIVE 
            stream platform, TikTok mobile, and partner center.
          </p>

          {/* First Row - LIVE Diagnosis and Rollick Out-of-stock Products */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* LIVE Diagnosis */}
            <div>
              <h3 className="text-xl font-bold text-black mb-3">LIVE Diagnosis</h3>
              <p className="text-gray-600 text-base mb-6 leading-relaxed">
                Help TikTok live-streamers identify, understand, and solve problems promptly 
                while on LIVE.
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=350&fit=crop" 
                  alt="LIVE Diagnosis Interface"
                  className="w-full h-56 object-cover rounded-lg shadow-sm"
                />
              </div>
            </div>

            {/* Rollick Out-of-stock Products */}
            <div>
              <h3 className="text-xl font-bold text-black mb-3">Rollick Out-of-stock Products</h3>
              <p className="text-gray-600 text-base mb-6 leading-relaxed">
                Help TikTok creators minimize traffic and revenue loss 
                due to out-of-stock items in their videos.
              </p>
              <div className="flex justify-center gap-4">
                <div className="w-36 h-72 bg-black rounded-3xl p-2 shadow-lg">
                  <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=200&h=400&fit=crop" 
                      alt="Mobile Interface 1"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="w-36 h-72 bg-black rounded-3xl p-2 shadow-lg">
                  <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=200&h=400&fit=crop" 
                      alt="Mobile Interface 2"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second Row - Streamer Desktop and Product Selection */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Streamer Desktop Responsive Design */}
            <div>
              <h3 className="text-xl font-bold text-black mb-3">Streamer Desktop Responsive Design</h3>
              <p className="text-gray-600 text-base mb-6 leading-relaxed">
                Shipped responsive design principles for the whole 
                platform to increase screen effectiveness.
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=350&fit=crop" 
                  alt="Desktop Responsive Design"
                  className="w-full h-56 object-cover rounded-lg shadow-sm"
                />
              </div>
            </div>

            {/* Product Selection Pools for Agencies */}
            <div>
              <h3 className="text-xl font-bold text-black mb-3">Product Selection Pools for Agencies</h3>
              <p className="text-gray-600 text-base mb-6 leading-relaxed">
                Help TikTok shop agencies improve the efficiency of product selection and 
                creator outreach by integrating information and streamlining processes.
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=350&fit=crop" 
                  alt="Product Selection Interface"
                  className="w-full h-56 object-cover rounded-lg shadow-sm"
                />
              </div>
            </div>
          </div>
        </div>

        <hr className="border-gray-300 mb-16" />

        {/* Capybara.AI Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-black mb-4">Capybara.AI 2023 - 2024</h2>
          <p className="text-gray-700 text-lg mb-12 leading-relaxed">
            Leading the design of Capybara.AI to help individual investigators understand stock news and practice trading. Gained 1500+ active users 
            and investment from Microsoft, Amazon, and NVIDIA within one week of the launch.
          </p>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* MVP, 2023 */}
            <div>
              <h3 className="text-xl font-bold text-black mb-3">MVP, 2023</h3>
              <p className="text-gray-600 text-base mb-6 leading-relaxed">
                Designed the MVP of the application with the key feature of AI summarized 
                stock news and more than 5 features.
              </p>
              <div className="flex justify-center gap-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-28 h-56 bg-black rounded-3xl p-2 shadow-lg">
                    <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                      <img 
                        src={`https://images.unsplash.com/photo-156301354${i}-824ae1b704d3?w=150&h=300&fit=crop`} 
                        alt={`MVP Interface ${i}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Company Profiling, 2024 */}
            <div>
              <h3 className="text-xl font-bold text-black mb-3">Company Profiling, 2024</h3>
              <p className="text-gray-600 text-base mb-6 leading-relaxed">
                Help users better understand the industry and analyze 
                company's recent performance with qualified data.
              </p>
              <div className="flex justify-center gap-3">
                {[1, 2].map((i) => (
                  <div key={i} className="w-36 h-72 bg-black rounded-3xl p-2 shadow-lg">
                    <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                      <img 
                        src={`https://images.unsplash.com/photo-151294193766${i}-90a1b58e7e9c?w=200&h=400&fit=crop`} 
                        alt={`Company Profiling ${i}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-black mb-3">Design System Upgrade, 2024</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Enhance the visual design system to improve readability and ensure consistency.
            </p>
          </div>
        </div>

        <hr className="border-gray-300 mb-16" />

        {/* Passion Projects & Recent Wins */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-black mb-12">Passion Projects & Recent Wins</h2>

          {/* DataSense, 2024 */}
          <div className="mb-16">
            <div className="flex items-start gap-8">
              <div className="w-96 h-56 bg-yellow-200 rounded-2xl p-6 flex-shrink-0 shadow-sm">
                <div className="w-full h-full bg-gray-900 rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop" 
                    alt="DataSense Interface"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-2xl font-bold text-black mb-4">DataSense, 2024</h3>
                <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                  A feature that streamlines the process of bulk data entry and improves 
                  the accuracy of entity matching.
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-blue-600 text-lg">🏆</span>
                  <span className="text-blue-600 font-semibold text-base">NYU Product Management Competition 3rd Prize</span>
                </div>
              </div>
            </div>
          </div>

          {/* Globbbo, 2023 */}
          <div className="mb-16">
            <div className="flex items-start gap-8">
              <div className="w-96 h-56 bg-teal-200 rounded-2xl p-6 flex-shrink-0 shadow-sm">
                <div className="w-full h-full bg-white rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop" 
                    alt="Globbbo Interface"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-2xl font-bold text-black mb-4">Globbbo, 2023</h3>
                <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                  An innovative educational app that integrates time and space into a 
                  four-dimensional information system.
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-red-500 text-lg">🔴</span>
                  <span className="text-blue-600 font-semibold text-base">Awarded by Red Dot and 5 other Design Competitions</span>
                </div>
              </div>
            </div>
          </div>

          {/* The Game of Equality, 2022 */}
          <div className="mb-16">
            <div className="flex items-start gap-8">
              <div className="w-96 h-56 bg-orange-200 rounded-2xl p-6 flex-shrink-0 shadow-sm">
                <div className="w-full h-full bg-white rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=250&fit=crop" 
                    alt="Game of Equality"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-2xl font-bold text-black mb-4">The Game of Equality, 2022</h3>
                <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                  Designed an AR game to help kids understand the basic concepts of 
                  gender equality.
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-blue-600 text-lg">🏆</span>
                  <span className="text-blue-600 font-semibold text-base">Awarded by European Product Design at it's highest award</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats Section */}
        <div className="border-t border-gray-300 pt-12">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-purple-600 text-lg">💻</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-black text-lg">Collection of coding projects</span>
                <ExternalLink className="w-4 h-4 text-gray-500" />
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-blue-600 text-lg">📊</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-black text-lg">100 days of HCI and design research</span>
                <ExternalLink className="w-4 h-4 text-gray-500" />
              </div>
            </div>
          </div>

          <div className="text-base text-gray-600 leading-relaxed">
            <p className="mb-4">
              Design is not an emotional expression, but through rational deduction and 
              categorization to present complex information and logic in a way that best fits the 
              user's mental model.
            </p>
            <p>
              Designed and organized by Yilin with ❤️
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App