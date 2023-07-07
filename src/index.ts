import 'reflect-metadata';
import { createExpressServer } from 'routing-controllers';
import * as bodyParser from 'body-parser';
import cors from 'cors';

import { logger } from './logger';
import config from './config/default.config';
import { requestLogger } from './middlewares/requestLogger';

const PORT =config?.port || 3001


// Create express app
const app = createExpressServer({
  controllers: [__dirname + "/controllers/**/*.js"],
  middlewares: [bodyParser.json()],
});

// Add middleware
app.use(cors());
app.use(requestLogger);

// Start the server
app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});