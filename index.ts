import concurrently from 'concurrently';

concurrently([
   {
      command: 'bun run dev',
      cwd: 'packages/server',
      name: 'server',
      prefixColor: 'green',
   },
   {
      command: 'bun run dev',
      cwd: 'packages/client',
      name: 'client',
      prefixColor: 'blue',
   },
]);
