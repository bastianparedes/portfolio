import { Dropbox } from 'dropbox';
import fetch from 'node-fetch';

const config = {
  accessToken: process.env.dropboxAccessToken,
  fetch
};

const dbx = new Dropbox(config);

const GET = async () => {
  const file = await dbx.filesDownload({
    path: '/resume.pdf'
  });

  const response = new Response((file.result as any).fileBinary);
  response.headers.set('Content-Type', 'application/pdf');

  return response;
};

export { GET };
