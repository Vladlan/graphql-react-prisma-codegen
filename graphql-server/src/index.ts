import { createServer } from "node:http";
import { createYoga } from "graphql-yoga";
import { schema } from "./schema";

const yoga = createYoga({
  schema,
});

const port = Number(process.env.API_PORT) || 4000;

const server = createServer(yoga);

server.listen(port, () => {
  console.info(`Server is running on http://localhost:${port}/graphql`);
});
