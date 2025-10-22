'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CreditCard, Smartphone, Barcode, Check, Copy, X } from 'lucide-react';
import Image from 'next/image';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  planName: string;
  planPrice: number;
}

export default function PaymentModal({ isOpen, onClose, planName, planPrice }: PaymentModalProps) {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<'pix' | 'card' | 'boleto'>('pix');
  const [pixCopied, setPixCopied] = useState(false);
  const [cardType, setCardType] = useState<'credit' | 'debit'>('credit');
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  // Mock PIX code
  const pixCode = `00020126580014br.gov.bcb.pix0136${Math.random().toString(36).substring(7)}52040000530398654${planPrice.toFixed(2)}5802BR5925GLAMPASS SERVICOS LTDA6014SAO PAULO62070503***63041D3A`;

  const handleCopyPix = () => {
    navigator.clipboard.writeText(pixCode);
    setPixCopied(true);
    setTimeout(() => setPixCopied(false), 2000);
  };

  const handleCardSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentSuccess(true);
      setTimeout(() => {
        setPaymentSuccess(false);
        onClose();
      }, 2000);
    }, 2000);
  };

  const handleBoletoGenerate = () => {
    setIsProcessing(true);
    // Simulate boleto generation
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentSuccess(true);
      setTimeout(() => {
        setPaymentSuccess(false);
        onClose();
      }, 2000);
    }, 1500);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-purple-600">
            Finalizar Assinatura - {planName}
          </DialogTitle>
          <DialogDescription className="text-gray-600">
            Escolha a forma de pagamento para sua assinatura de R$ {planPrice.toFixed(2)}/mês
          </DialogDescription>
        </DialogHeader>

        {paymentSuccess ? (
          <div className="flex flex-col items-center justify-center py-12">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <Check className="text-green-600" size={48} strokeWidth={3} />
            </div>
            <h3 className="text-2xl font-bold text-green-600 mb-2">Pagamento Confirmado!</h3>
            <p className="text-gray-600 text-center">
              Sua assinatura foi processada com sucesso.
            </p>
          </div>
        ) : (
          <Tabs value={selectedPaymentMethod} onValueChange={(v) => setSelectedPaymentMethod(v as any)} className="w-full mt-4">
            {/* Payment Method Tabs */}
            <TabsList className="grid grid-cols-3 w-full bg-gray-100 p-1 rounded-2xl">
              <TabsTrigger
                value="pix"
                className="rounded-xl flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:text-purple-600 data-[state=active]:shadow-md"
              >
                <Smartphone size={18} />
                <span className="hidden sm:inline">PIX</span>
              </TabsTrigger>
              <TabsTrigger
                value="card"
                className="rounded-xl flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:text-purple-600 data-[state=active]:shadow-md"
              >
                <CreditCard size={18} />
                <span className="hidden sm:inline">Cartão</span>
              </TabsTrigger>
              <TabsTrigger
                value="boleto"
                className="rounded-xl flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:text-purple-600 data-[state=active]:shadow-md"
              >
                <Barcode size={18} />
                <span className="hidden sm:inline">Boleto</span>
              </TabsTrigger>
            </TabsList>

            {/* PIX Payment */}
            <TabsContent value="pix" className="mt-6">
              <div className="space-y-6">
                <div className="bg-purple-50 rounded-2xl p-6 text-center">
                  <h4 className="text-lg font-semibold text-purple-600 mb-3">
                    Pague com PIX
                  </h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Escaneie o QR Code ou copie o código abaixo
                  </p>

                  {/* QR Code Placeholder */}
                  <div className="flex justify-center mb-4">
                    <div className="w-48 h-48 bg-white rounded-2xl flex items-center justify-center border-2 border-purple-200 shadow-md">
                      <div className="text-center">
                        <Smartphone className="text-purple-400 mx-auto mb-2" size={48} />
                        <p className="text-xs text-gray-500">QR Code PIX</p>
                      </div>
                    </div>
                  </div>

                  {/* PIX Code */}
                  <div className="bg-white rounded-xl p-4 border border-purple-200">
                    <p className="text-xs text-gray-600 mb-2 font-medium">Código PIX:</p>
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        value={pixCode}
                        readOnly
                        className="flex-1 text-xs bg-gray-50 px-3 py-2 rounded-lg border border-gray-200 font-mono"
                      />
                      <button
                        onClick={handleCopyPix}
                        className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
                      >
                        {pixCopied ? <Check size={16} /> : <Copy size={16} />}
                        <span className="hidden sm:inline text-sm">
                          {pixCopied ? 'Copiado!' : 'Copiar'}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
                  <p className="text-sm text-amber-800">
                    <strong>💡 Como pagar:</strong> Abra o app do seu banco, escolha PIX, escaneie o QR Code ou cole o código copiado.
                  </p>
                </div>
              </div>
            </TabsContent>

            {/* Card Payment */}
            <TabsContent value="card" className="mt-6">
              <form onSubmit={handleCardSubmit} className="space-y-4">
                {/* Card Type Selection */}
                <div className="flex gap-3 mb-4">
                  <button
                    type="button"
                    onClick={() => setCardType('credit')}
                    className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all ${
                      cardType === 'credit'
                        ? 'bg-purple-600 text-white shadow-md'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    Crédito
                  </button>
                  <button
                    type="button"
                    onClick={() => setCardType('debit')}
                    className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all ${
                      cardType === 'debit'
                        ? 'bg-purple-600 text-white shadow-md'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    Débito
                  </button>
                </div>

                {/* Card Number */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Número do Cartão
                  </label>
                  <input
                    type="text"
                    placeholder="0000 0000 0000 0000"
                    maxLength={19}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>

                {/* Cardholder Name */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Nome no Cartão
                  </label>
                  <input
                    type="text"
                    placeholder="Como está impresso no cartão"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>

                {/* Expiry and CVV */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Validade
                    </label>
                    <input
                      type="text"
                      placeholder="MM/AA"
                      maxLength={5}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      CVV
                    </label>
                    <input
                      type="text"
                      placeholder="000"
                      maxLength={4}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    />
                  </div>
                </div>

                {/* CPF */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    CPF do Titular
                  </label>
                  <input
                    type="text"
                    placeholder="000.000.000-00"
                    maxLength={14}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-6 rounded-full
                           transition-all duration-300 gold-button-glow shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed mt-6"
                >
                  {isProcessing ? 'Processando...' : `Pagar R$ ${planPrice.toFixed(2)}`}
                </button>

                <p className="text-xs text-center text-gray-500 mt-4">
                  🔒 Pagamento seguro e criptografado
                </p>
              </form>
            </TabsContent>

            {/* Boleto Payment */}
            <TabsContent value="boleto" className="mt-6">
              <div className="space-y-6">
                <div className="bg-blue-50 rounded-2xl p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <Barcode className="text-blue-600 flex-shrink-0" size={48} />
                    <div>
                      <h4 className="text-lg font-semibold text-blue-600 mb-2">
                        Pagamento via Boleto
                      </h4>
                      <p className="text-gray-600 text-sm">
                        O boleto será gerado e enviado para seu e-mail. Você pode pagá-lo em qualquer banco ou casa lotérica.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-4 border border-blue-200 mb-4">
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start gap-2">
                        <Check className="text-green-600 flex-shrink-0 mt-0.5" size={16} />
                        <span>Vencimento em 3 dias úteis</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="text-green-600 flex-shrink-0 mt-0.5" size={16} />
                        <span>Confirmação em até 2 dias úteis após pagamento</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="text-green-600 flex-shrink-0 mt-0.5" size={16} />
                        <span>Acesso liberado após confirmação bancária</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Email Input */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    E-mail para envio do boleto
                  </label>
                  <input
                    type="email"
                    placeholder="seu@email.com"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                {/* CPF */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    CPF
                  </label>
                  <input
                    type="text"
                    placeholder="000.000.000-00"
                    maxLength={14}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                {/* Generate Button */}
                <button
                  onClick={handleBoletoGenerate}
                  disabled={isProcessing}
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-6 rounded-full
                           transition-all duration-300 gold-button-glow shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isProcessing ? 'Gerando Boleto...' : 'Gerar Boleto'}
                </button>

                <p className="text-xs text-center text-gray-500">
                  📧 O boleto será enviado para o e-mail informado
                </p>
              </div>
            </TabsContent>
          </Tabs>
        )}
      </DialogContent>
    </Dialog>
  );
}
