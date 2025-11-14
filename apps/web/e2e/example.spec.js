import { test, expect } from '@playwright/test';

// Aponta para a URL do seu PWA (no docker compose é http://localhost)
// O professor usa 'process.env.VITE_BASE_URL || 'http://localhost:8080'
// Vamos usar a porta 80 que definimos no docker-compose.
const BASE_URL = process.env.VITE_BASE_URL || 'http://localhost';

test('Testa o console-error "abc", localiza o título e clica no botão', async ({ page }) => {
  // O teste de "console-error" do professor
  page.on('console', msg => {
    if (msg.type() === 'error')
      expect(msg.text()).not.toContain('abc');
  });

  await page.goto(BASE_URL);

  // Exemplo: Verifica se o título "Bootcamp PWA" (do manifest) está na página
  await expect(page).toHaveTitle(/Bootcamp PWA/);

  // Exemplo do print (procurando um botão pelo test-id)
  await page.getByTestId('meu-botao').click();

  // Exemplo: Verificar se algo aconteceu após o clique
  await expect(page.getByTestId('resultado-do-clique')).toBeVisible();
});