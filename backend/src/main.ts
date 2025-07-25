import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Opcional: configurar CORS se o frontend estiver em outro domínio (como Netlify)
  app.enableCors({
    origin: '*', // você pode trocar por 'https://seu-frontend.netlify.app'
    credentials: true,
  });

  await app.listen(3333);
  console.log(`🚀 Backend rodando em http://localhost:3333`);
}
bootstrap();
