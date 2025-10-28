import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Shield } from "lucide-react";

export const Pricing = () => {
  const features = [
    "Acesso imediato",
    "Atualizações vitalícias",
    "Cronograma completo",
    "Garantia de 7 dias",
  ];

  return (
    <section className="py-20 bg-gradient-section">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Invista no meu <span className="text-primary">método comprovado</span>!
          </h2>

          <Card className="p-8 md:p-12 bg-card/50 border-2 border-primary/50 backdrop-blur mt-12">
            <div className="text-center mb-8">
              <div className="text-muted-foreground mb-2">Por apenas 12x de</div>
              <div className="text-6xl md:text-7xl font-bold text-primary mb-2">
                R$ 19,08
              </div>
              <div className="text-xl text-muted-foreground">ou R$ 229,00 à vista</div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" />
                  <span className="text-lg">{feature}</span>
                </div>
              ))}
            </div>

            <div className="bg-success/10 border border-success/30 rounded-lg p-4 mb-8 flex items-start gap-3">
              <Shield className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
              <p className="text-sm">
                <strong className="text-success">Garantia de 7 dias:</strong> Se em até 7 dias você 
                sentir que meu cronograma não é para você, solicite o reembolso.
              </p>
            </div>

            <div className="text-center">
              <Button 
                size="lg" 
                className="w-full md:w-auto bg-gradient-cta hover:scale-105 transition-transform text-xl px-16 py-8 shadow-glow font-bold uppercase animate-pulse-glow"
                asChild
              >
                <a href="https://sun.eduzz.com/974476" target="_blank" rel="noopener noreferrer">
                  Adquirir Cronograma
                </a>
              </Button>
            </div>
          </Card>

          {/* Urgency Section */}
          <div className="mt-12 text-center space-y-4">
            <h3 className="text-3xl font-bold">O tempo está passando…</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              O concurso da Polícia Penal de Minas Gerais já tem edital publicado. 
              Eu sei que quanto antes você começar a se organizar, maiores serão suas chances de aprovação.
            </p>
            <div className="text-xl text-primary font-bold">
              ⏳ Minha oferta é por tempo limitado!
            </div>
            <p className="text-muted-foreground">Este é um preço promocional de lançamento.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
