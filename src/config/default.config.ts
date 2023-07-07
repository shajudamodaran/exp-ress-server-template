import dotenv from 'dotenv';

dotenv.config();

interface Config {
  port: number;
  mongodbUri: string;
}

const config: Config = {
  port: parseInt(process.env.PORT || '3000', 10),
  mongodbUri: process.env.MONGODB_URI || 'mongodb://localhost:27017/mydatabase',
};

export default config;
