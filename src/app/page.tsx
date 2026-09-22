import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          Get In Touch
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Have a question or want to collaborate? Feel free to reach out. I'll get back to you as soon as possible!
        </p>
        
        <ContactForm />

        {/* Alternative Contact Methods */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Email</h3>
            <p className="text-gray-600 dark:text-gray-400">pralaymehta97@gmail.com</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">GitHub</h3>
            <a href="https://github.com/pralay143" className="text-blue-600 hover:underline">
              github.com/pralay143
            </a>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">LinkedIn</h3>
            <a href="https://linkedin.com/in/pralay" className="text-blue-600 hover:underline">
              linkedin.com/in/pralay
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}