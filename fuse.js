import { fusebox } from 'fuse-box';
const fuse = fusebox({
  entry: 'src/index.ts',
  target: 'server',
  devServer: true,
  webIndex: true,
});

fuse.runDev();