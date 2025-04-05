import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ClipboardDocumentIcon, TrashIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline'

function App() {
  const [text, setText] = useState('')
  const [stats, setStats] = useState({
    words: 0,
    characters: 0,
    charactersNoSpaces: 0,
    sentences: 0,
    paragraphs: 0,
    readingTime: 0
  })

  useEffect(() => {
    const calculateStats = () => {
      const words = text.trim() ? text.trim().split(/\s+/).length : 0
      const characters = text.length
      const charactersNoSpaces = text.replace(/\s/g, '').length
      const sentences = text.split(/[.!?]+/).filter(Boolean).length
      const paragraphs = text.split(/\n\s*\n/).filter(Boolean).length
      const readingTime = Math.ceil(words / 200) // Assuming 200 words per minute

      setStats({
        words,
        characters,
        charactersNoSpaces,
        sentences,
        paragraphs,
        readingTime
      })
    }

    calculateStats()
  }, [text])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      alert('Text copied to clipboard!')
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  const handleClear = () => {
    setText('')
  }

  const handleDownload = () => {
    const blob = new Blob([text], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'word-counter.txt'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-md mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center text-gray-900 mb-8"
        >
          Free Online Word Counter Tool
        </motion.h1>

        {/* Top Banner Ad */}
        <div className="mb-8">
          <ins className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-XXXXXXXXXXXX"
            data-ad-slot="XXXXXXXXXX"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type or paste your text here..."
            className="w-full h-64 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            aria-label="Text input area for word counting"
          />

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-gray-500">Words</h3>
              <p className="text-2xl font-bold text-gray-900">{stats.words}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-gray-500">Characters</h3>
              <p className="text-2xl font-bold text-gray-900">{stats.characters}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-gray-500">Characters (no spaces)</h3>
              <p className="text-2xl font-bold text-gray-900">{stats.charactersNoSpaces}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-gray-500">Sentences</h3>
              <p className="text-2xl font-bold text-gray-900">{stats.sentences}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-gray-500">Paragraphs</h3>
              <p className="text-2xl font-bold text-gray-900">{stats.paragraphs}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-gray-500">Reading Time</h3>
              <p className="text-2xl font-bold text-gray-900">{stats.readingTime} min</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mt-6">
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              aria-label="Copy text to clipboard"
            >
              <ClipboardDocumentIcon className="h-5 w-5" />
              Copy Text
            </button>
            <button
              onClick={handleClear}
              className="flex items-center gap-2 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
              aria-label="Clear text"
            >
              <TrashIcon className="h-5 w-5" />
              Clear Text
            </button>
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
              aria-label="Download text as file"
            >
              <ArrowDownTrayIcon className="h-5 w-5" />
              Download as .txt
            </button>
          </div>
        </div>

        {/* Inline Ad */}
        <div className="mb-8">
          <ins className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-XXXXXXXXXXXX"
            data-ad-slot="XXXXXXXXXX"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins>
        </div>

        <article className="prose max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Use a Word Counter?</h2>
          <p className="text-gray-600 mb-4">
            A word counter is an essential tool for writers, students, and content creators. It helps you maintain the perfect length for your content, whether you're writing a blog post, academic paper, or social media update.
          </p>
          
          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Key Benefits</h3>
            <ul className="list-disc pl-5 text-gray-600 mb-4">
              <li>Ensure your content meets length requirements</li>
              <li>Optimize for SEO and readability</li>
              <li>Track writing progress and goals</li>
              <li>Maintain consistent content length</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Common Use Cases</h3>
            <ul className="list-disc pl-5 text-gray-600 mb-4">
              <li>Academic papers and essays</li>
              <li>Blog posts and articles</li>
              <li>Social media content</li>
              <li>SEO content writing</li>
              <li>Creative writing projects</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Writing Tips</h3>
            <ul className="list-disc pl-5 text-gray-600 mb-4">
              <li>Twitter/X: 280 characters maximum</li>
              <li>Blog posts: 1,500-2,500 words for optimal SEO</li>
              <li>Academic papers: Follow specific word count requirements</li>
              <li>Email subject lines: 50 characters or less</li>
            </ul>
          </section>
        </article>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold text-gray-900">How accurate is this word counter?</h3>
              <p className="text-gray-600 mt-2">Our word counter is highly accurate and processes text in real-time. It counts words, characters, sentences, and paragraphs exactly as they appear in your text.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold text-gray-900">Is this tool free?</h3>
              <p className="text-gray-600 mt-2">Yes, this word counter tool is completely free to use. There are no hidden charges or premium features.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold text-gray-900">Does it count punctuation?</h3>
              <p className="text-gray-600 mt-2">The character count includes all characters, including punctuation and spaces. We also provide a character count without spaces for your convenience.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold text-gray-900">Will my text be saved or shared?</h3>
              <p className="text-gray-600 mt-2">No, your text is never saved or shared. Everything runs locally in your browser, ensuring complete privacy.</p>
            </div>
          </div>
        </section>

        <p className="text-sm text-gray-500 text-center mt-8">
          Your text is never saved or sent anywhere. Everything runs in your browser.
        </p>
      </div>

      {/* Sticky Footer Ad */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4">
        <ins className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-XXXXXXXXXXXX"
          data-ad-slot="XXXXXXXXXX"
          data-ad-format="auto"
          data-full-width-responsive="true"></ins>
      </div>
    </div>
  )
}

export default App 