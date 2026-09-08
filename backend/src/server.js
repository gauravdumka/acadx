import app from './app.js';
import { connectDB } from './config/db.js';
import { env } from './config/env.js';

const startServer = async () => {
  await connectDB();

  const port = env.PORT;

  const server = app.listen(port, () => {
    console.log(`✅ Server running in ${env.NODE_ENV} mode on port ${port}`);
  });

  // Handle Unhandled Promise Rejections safely
  process.on('unhandledRejection', (err) => {
    console.error(`❌ UNHANDLED REJECTION! Shutting down...`);
    console.error(err.name, err.message);
    server.close(() => {
      process.exit(1);
    });
  });
};

startServer();
