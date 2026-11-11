import { useState } from 'react';
import { BookFormat, FormatId } from './data/bookData';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PressBanner } from './components/PressBanner';
import { CorePillars } from './components/CorePillars';
import { TableOfContents } from './components/TableOfContents';
import { BonusToolkit } from './components/BonusToolkit';
import { ReviewsSection } from './components/ReviewsSection';
import { AuthorSection } from './components/AuthorSection';
import { PricingSection } from './components/PricingSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { ChapterReaderModal } from './components/ChapterReaderModal';
import { CartDrawer, CartItem } from './components/CartDrawer';

export function App() {
  const [selectedFormat, setSelectedFormat] = useState<FormatId>('bundle');
  const [isReaderOpen, setIsReaderOpen] = useState<boolean>(false);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleAddToCart = (format: BookFormat) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.format.id === format.id);
      if (existing) {
        return prev.map((item) =>
          item.format.id === format.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { format, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (formatId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.format.id === formatId
            ? { ...item, quantity: item.quantity + delta }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleRemoveItem = (formatId: string) => {
    setCartItems((prev) => prev.filter((item) => item.format.id !== formatId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-alabaster text-obsidian">
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenReader={() => setIsReaderOpen(true)}
      />

      <main className="flex-1">
        <HeroSection
          selectedFormat={selectedFormat}
          onSelectFormat={setSelectedFormat}
          onAddToCart={handleAddToCart}
          onOpenReader={() => setIsReaderOpen(true)}
        />

        {/* <PressBanner /> */}

        {/* <CorePillars /> */}

        <TableOfContents onOpenReader={() => setIsReaderOpen(true)} />

        {/* <BonusToolkit /> */}

        {/* <ReviewsSection /> */}

        <AuthorSection />

        {/* <PricingSection onAddToCart={handleAddToCart} /> */}

        {/* <FaqSection /> */}
      </main>

      <Footer onOpenReader={() => setIsReaderOpen(true)} />

      <ChapterReaderModal
        isOpen={isReaderOpen}
        onClose={() => setIsReaderOpen(false)}
        onAddToCart={handleAddToCart}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    </div>
  );
}

export default App;
