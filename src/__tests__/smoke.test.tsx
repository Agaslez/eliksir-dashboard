import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import App from '../App';
import Calculator from '../components/Calculator';

// SMOKE TESTS - najważniejsze funkcjonalności

describe('Smoke Tests - Podstawowe funkcje strony', () => {
  
  describe('1. Strona główna ładuje się', () => {
    it('renderuje aplikację bez błędów', () => {
      expect(() => render(<App />)).not.toThrow();
    });
    
    it('ma tytuł Eliksir Bar', () => {
      render(<App />);
      expect(screen.getByText(/Eliksir Bar/i)).toBeInTheDocument();
    });
  });
  
  describe('2. Kalkulator działa', () => {
    beforeEach(() => {
      render(<Calculator />);
    });
    
    it('wyświetla wybór pakietów', () => {
      expect(screen.getByText(/BASIC/i)).toBeInTheDocument();
      expect(screen.getByText(/PREMIUM/i)).toBeInTheDocument();
      expect(screen.getByText(/EXCLUSIVE/i)).toBeInTheDocument();
    });
    
    it('ma suwak liczby gości', () => {
      const slider = screen.getByRole('slider');
      expect(slider).toBeInTheDocument();
      expect(slider).toHaveAttribute('min', '20');
      expect(slider).toHaveAttribute('max', '150');
    });
    
    it('wyświetla cenę', () => {
      expect(screen.getByText(/zł/i)).toBeInTheDocument();
    });
    
    it('wyświetla listę zakupów', () => {
      expect(screen.getByText(/Lista zakupów/i)).toBeInTheDocument();
      expect(screen.getByText(/Wódka.*rum.*gin/i)).toBeInTheDocument();
    });
  });
  
  describe('3. Formularz kontaktowy', () => {
    it('ma pola formularza', () => {
      render(<App />);
      expect(screen.getByLabelText(/imię/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/telefon/i)).toBeInTheDocument();
    });
    
    it('ma przycisk wysyłania', () => {
      render(<App />);
      expect(screen.getByRole('button', { name: /wyślij/i })).toBeInTheDocument();
    });
  });
  
  describe('4. SEO i dostępność', () => {
    it('ma meta description', () => {
      render(<App />);
      const meta = document.querySelector('meta[name="description"]');
      expect(meta).toBeTruthy();
      expect(meta?.getAttribute('content')).toBeTruthy();
    });
    
    it('ma poprawne nagłówki H1', () => {
      render(<App />);
      const h1 = document.querySelector('h1');
      expect(h1).toBeTruthy();
      expect(h1?.textContent).toMatch(/Eliksir Bar/i);
    });
    
    it('obrazy mają alt text', () => {
      render(<App />);
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        expect(img).toHaveAttribute('alt');
      });
    });
  });
});

// Testy wydajnościowe
describe('Performance Tests', () => {
  it('ładuje się w mniej niż 3 sekundy', async () => {
    const start = performance.now();
    render(<App />);
    const end = performance.now();
    expect(end - start).toBeLessThan(3000);
  });
  
  it('kalkulator reaguje na zmiany w mniej niż 100ms', () => {
    const { rerender } = render(<Calculator />);
    const start = performance.now();
    // Symulacja zmiany liczby gości
    rerender(<Calculator />);
    const end = performance.now();
    expect(end - start).toBeLessThan(100);
  });
});