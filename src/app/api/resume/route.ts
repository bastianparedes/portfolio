import { Dropbox } from 'dropbox';
import fetch from 'node-fetch';

const config = {
  accessToken: process.env.dropboxAccessToken,
  fetch
};

const dbx = new Dropbox(config);

const GET = async () => {
  const response = await dbx.filesDownload({
    path: '/resume.pdf'
  });

  return new Response((response.result as any).fileBinary);
};

export { GET };
