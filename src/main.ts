import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import * as Aedes from 'aedes';
import { createServer } from 'net';

const port = 11883;
const aedes = Aedes.createBroker();
const mqttServer = createServer(aedes.handle);

mqttServer.listen(port, function () {
  console.log('server started and listening on port ', port);
});

process.on('uncaughtException', (err) => {
  console.error('未捕获的异常:', err);
  // 可以在这里添加一些清理逻辑
  // process.exit(1); // 强制退出程序
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('未处理的拒绝:', promise, '原因:', reason);
  // 应用的逻辑
});

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: '*', credentials: true });
  await app.listen(9503);
}
bootstrap();
