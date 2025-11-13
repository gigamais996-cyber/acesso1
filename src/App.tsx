import { MessageCircle, Wifi, Zap, Phone } from 'lucide-react';

function App() {
  const whatsappUrl = 'https://wa.me/5511946697518?text=Atendimento';

  const handleContact = () => {
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Wifi className="w-8 h-8 text-green-600" />
            <h1 className="text-2xl font-bold text-gray-900">Nio Fibra</h1>
          </div>
          <button
            onClick={handleContact}
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-2.5 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp
          </button>
        </div>
      </header>

      <main className="container mx-auto px-4">
        <section className="py-20 text-center">
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Conecte-se com a melhor fibra óptica da região. Velocidade, estabilidade e suporte de qualidade.
          </p>
          <button
            onClick={handleContact}
            className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
            Fale Conosco
          </button>
        </section>

        <section className="py-16 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Ultra Rápida</h3>
            <p className="text-gray-600">
              Velocidade de ponta para streaming, jogos e trabalho sem interrupções.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Wifi className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Estável</h3>
            <p className="text-gray-600">
              Conexão confiável com fibra óptica de última geração.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Suporte 24/7</h3>
            <p className="text-gray-600">
              Atendimento rápido e eficiente sempre que você precisar.
            </p>
          </div>
        </section>

        <section className="py-20 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Pronto para se conectar?
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Entre em contato agora e conheça nossos planos
          </p>
          <button
            onClick={handleContact}
            className="bg-green-500 hover:bg-green-600 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 inline-flex items-center gap-3"
          >
            <MessageCircle className="w-6 h-6" />
            Falar no WhatsApp
          </button>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-8 mt-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Wifi className="w-6 h-6" />
            <span className="text-xl font-bold">Nio Fibra</span>
          </div>
          <p className="text-gray-400">Internet de alta velocidade para você</p>
        </div>
      </footer>

      <button
        onClick={handleContact}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center transform hover:scale-110 z-50"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
      </button>
    </div>
  );
}

export default App;
