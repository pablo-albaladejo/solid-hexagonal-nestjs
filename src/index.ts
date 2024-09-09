import { Factory } from './infrastructure/factory';

const server = Factory.createServer();
const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});