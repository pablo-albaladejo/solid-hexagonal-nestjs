import { createServer } from './app';

const server = createServer();
const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});