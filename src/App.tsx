import { ExternalLink, Award } from 'lucide-react'
import { Badge } from './components/ui/badge'

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex items-start justify-between mb-8">
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-black mb-3">Yilin Wang</h1>
            <p className="text-gray-700 mb-1">
              A product designer based in New York. Previously at{' '}
              <span className="text-red-500 font-medium">TikTok</span>, designing B2B and B2C features to
            </p>
            <p className="text-gray-700 mb-4">
              help creators sell products and earn more money💰
            </p>
            
            <div className="flex items-center gap-4 text-sm">
              <a href="#" className="flex items-center gap-1 text-gray-600 hover:text-gray-800">
                <span>🔗</span> LinkedIn
              </a>
              <a href="#" className="flex items-center gap-1 text-gray-600 hover:text-gray-800">
                <span>📄</span> Resume
              </a>
              <a href="#" className="flex items-center gap-1 text-gray-600 hover:text-gray-800">
                <span>✍️</span> Medium
              </a>
            </div>
          </div>
          
          <div className="ml-8">
            <div className="w-20 h-20 rounded-full bg-gray-200 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face" 
                alt="Yilin Wang"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <hr className="border-gray-200 mb-12" />

        {/* TikTok 2024 Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-black mb-3">TikTok 2024</h2>
          <p className="text-gray-700 mb-8">
            During my internship at TikTok Global e-commerce - Creator and Affiliate team, I owned and shipped the features below across the LIVE 
            stream platform, TikTok mobile, and partner center.
          </p>

          {/* First Row - LIVE Diagnosis and Rollick Out-of-stock Products */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* LIVE Diagnosis */}
            <div>
              <h3 className="text-lg font-semibold text-black mb-2">LIVE Diagnosis</h3>
              <p className="text-gray-600 text-sm mb-4">
                Help TikTok live-streamers identify, understand, and solve problems promptly 
                while on LIVE.
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop" 
                  alt="LIVE Diagnosis Interface"
                  className="w-full h-48 object-cover rounded"
                />
              </div>
            </div>

            {/* Rollick Out-of-stock Products */}
            <div>
              <h3 className="text-lg font-semibold text-black mb-2">Rollick Out-of-stock Products</h3>
              <p className="text-gray-600 text-sm mb-4">
                Help TikTok creators minimize traffic and revenue loss 
                due to out-of-stock items in their videos.
              </p>
              <div className="flex justify-center gap-4">
                <div className="w-32 h-64 bg-black rounded-2xl p-2">
                  <div className="w-full h-full bg-white rounded-xl overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=200&h=400&fit=crop" 
                      alt="Mobile Interface 1"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="w-32 h-64 bg-black rounded-2xl p-2">
                  <div className="w-full h-full bg-white rounded-xl overflow-hidden">
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
          <div className="grid md:grid-cols-2 gap-8">
            {/* Streamer Desktop Responsive Design */}
            <div>
              <h3 className="text-lg font-semibold text-black mb-2">Streamer Desktop Responsive Design</h3>
              <p className="text-gray-600 text-sm mb-4">
                Shipped responsive design principles for the whole 
                platform to increase screen effectiveness.
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop" 
                  alt="Desktop Responsive Design"
                  className="w-full h-48 object-cover rounded"
                />
              </div>
            </div>

            {/* Product Selection Pools for Agencies */}
            <div>
              <h3 className="text-lg font-semibold text-black mb-2">Product Selection Pools for Agencies</h3>
              <p className="text-gray-600 text-sm mb-4">
                Help TikTok shop agencies improve the efficiency of product selection and 
                creator outreach by integrating information and streamlining processes.
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop" 
                  alt="Product Selection Interface"
                  className="w-full h-48 object-cover rounded"
                />
              </div>
            </div>
          </div>
        </div>

        <hr className="border-gray-200 mb-12" />

        {/* Capybara.AI Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-black mb-3">Capybara.AI 2023 - 2024</h2>
          <p className="text-gray-700 mb-8">
            Leading the design of Capybara.AI to help individual investigators understand stock news and practice trading. Gained 1500+ active users 
            and investment from Microsoft, Amazon, and NVIDIA within one week of the launch.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* MVP, 2023 */}
            <div>
              <h3 className="text-lg font-semibold text-black mb-2">MVP, 2023</h3>
              <p className="text-gray-600 text-sm mb-4">
                Designed the MVP of the application with the key feature of AI summarized 
                stock news and more than 5 features.
              </p>
              <div className="flex justify-center gap-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-24 h-48 bg-black rounded-2xl p-1">
                    <div className="w-full h-full bg-white rounded-xl overflow-hidden">
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
              <h3 className="text-lg font-semibold text-black mb-2">Company Profiling, 2024</h3>
              <p className="text-gray-600 text-sm mb-4">
                Help users better understand the industry and analyze 
                company's recent performance with qualified data.
              </p>
              <div className="flex justify-center gap-2">
                {[1, 2].map((i) => (
                  <div key={i} className="w-32 h-64 bg-black rounded-2xl p-2">
                    <div className="w-full h-full bg-white rounded-xl overflow-hidden">
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

          <div className="mt-8">
            <h3 className="text-lg font-semibold text-black mb-2">Design System Upgrade, 2024</h3>
            <p className="text-gray-600 text-sm">
              Enhance the visual design system to improve readability and ensure consistency.
            </p>
          </div>
        </div>

        <hr className="border-gray-200 mb-12" />

        {/* Passion Projects & Recent Wins */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-black mb-8">Passion Projects & Recent Wins</h2>

          {/* DataSense, 2024 */}
          <div className="mb-12">
            <div className="flex items-start gap-6">
              <div className="w-80 h-48 bg-yellow-200 rounded-lg p-4 flex-shrink-0">
                <div className="w-full h-full bg-gray-900 rounded overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop" 
                    alt="DataSense Interface"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-black mb-2">DataSense, 2024</h3>
                <p className="text-gray-700 mb-3">
                  A feature that streamlines the process of bulk data entry and improves 
                  the accuracy of entity matching.
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-blue-600">🏆</span>
                  <span className="text-blue-600 font-medium">NYU Product Management Competition 3rd Prize</span>
                </div>
              </div>
            </div>
          </div>

          {/* Globbbo, 2023 */}
          <div className="mb-12">
            <div className="flex items-start gap-6">
              <div className="w-80 h-48 bg-teal-200 rounded-lg p-4 flex-shrink-0">
                <div className="w-full h-full bg-white rounded overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop" 
                    alt="Globbbo Interface"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-black mb-2">Globbbo, 2023</h3>
                <p className="text-gray-700 mb-3">
                  An innovative educational app that integrates time and space into a 
                  four-dimensional information system.
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-red-500">🔴</span>
                  <span className="text-blue-600 font-medium">Awarded by Red Dot and 5 other Design Competitions</span>
                </div>
              </div>
            </div>
          </div>

          {/* The Game of Equality, 2022 */}
          <div className="mb-12">
            <div className="flex items-start gap-6">
              <div className="w-80 h-48 bg-orange-200 rounded-lg p-4 flex-shrink-0">
                <div className="w-full h-full bg-white rounded overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=250&fit=crop" 
                    alt="Game of Equality"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-black mb-2">The Game of Equality, 2022</h3>
                <p className="text-gray-700 mb-3">
                  Designed an AR game to help kids understand the basic concepts of 
                  gender equality.
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-blue-600">🏆</span>
                  <span className="text-blue-600 font-medium">Awarded by European Product Design at it's highest award</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats Section */}
        <div className="border-t border-gray-200 pt-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-purple-100 rounded flex items-center justify-center">
                <span className="text-purple-600 text-sm">💻</span>
              </div>
              <div>
                <span className="font-medium text-black">Collection of coding projects</span>
                <span className="text-gray-500 ml-2">↗</span>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                <span className="text-blue-600 text-sm">📊</span>
              </div>
              <div>
                <span className="font-medium text-black">100 days of HCI and design research</span>
                <span className="text-gray-500 ml-2">↗</span>
              </div>
            </div>
          </div>

          <div className="mt-8 text-sm text-gray-600">
            <p className="mb-2">
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