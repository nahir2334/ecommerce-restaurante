import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '../omponents/button';
import { ChefHat, Sparkles, UtensilsCrossed, Clock, Award, Users } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      {/* Hero Section */}
      <div className="container px-4 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 flex justify-center">
            <div className="rounded-full bg-gold/10 p-6">
              <ChefHat className="h-16 w-16 text-gold" />
            </div>
          </div>
          
          <h1 className="mb-4 text-5xl font-serif font-bold md:text-6xl lg:text-7xl">
            Le Gourmet
          </h1>
          
          <p className="mb-8 text-xl text-muted-foreground md:text-2xl">
            Experiencia culinaria de alta cocina
          </p>

          <div className="mb-12 flex flex-wrap items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-gold" />
              <span>Platos Gourmet</span>
            </div>
            <div className="flex items-center gap-2">
              <UtensilsCrossed className="h-5 w-5 text-gold" />
              <span>Chef Ejecutivo</span>
            </div>
            <div className="flex items-center gap-2">
              <ChefHat className="h-5 w-5 text-gold" />
              <span>Ingredientes Premium</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 shadow-elegant"
              onClick={() => navigate(isAuthenticated ? '/menu' : '/auth')}
            >
              {isAuthenticated ? 'Ver Nuestro Menú' : 'Comenzar'}
            </Button>
            {!isAuthenticated && (
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-6"
                onClick={() => navigate('/auth')}
              >
                Iniciar Sesión
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-3 mb-16">
            <div className="rounded-lg border border-border bg-card p-6 shadow-soft">
              <h3 className="mb-2 text-xl font-serif font-semibold">Entradas</h3>
              <p className="text-sm text-muted-foreground">
                Aperitivos exquisitos que despiertan el paladar
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6 shadow-soft">
              <h3 className="mb-2 text-xl font-serif font-semibold">Platos Principales</h3>
              <p className="text-sm text-muted-foreground">
                Creaciones únicas con ingredientes selectos
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6 shadow-soft">
              <h3 className="mb-2 text-xl font-serif font-semibold">Postres</h3>
              <p className="text-sm text-muted-foreground">
                Dulces finales para una experiencia memorable
              </p>
            </div>
          </div>

          {/* About Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold mb-4">Nuestra Historia</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Le Gourmet nace de la pasión por la alta cocina y el deseo de ofrecer 
              experiencias gastronómicas inolvidables. Cada plato es una obra de arte 
              creada con los ingredientes más selectos y técnicas culinarias refinadas.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold/10 mb-4">
                <Clock className="h-6 w-6 text-gold" />
              </div>
              <h3 className="text-2xl font-bold mb-2">15+</h3>
              <p className="text-sm text-muted-foreground">Años de experiencia</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold/10 mb-4">
                <Award className="h-6 w-6 text-gold" />
              </div>
              <h3 className="text-2xl font-bold mb-2">3</h3>
              <p className="text-sm text-muted-foreground">Estrellas Michelin</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold/10 mb-4">
                <Users className="h-6 w-6 text-gold" />
              </div>
              <h3 className="text-2xl font-bold mb-2">50K+</h3>
              <p className="text-sm text-muted-foreground">Clientes satisfechos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
