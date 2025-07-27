// Mock API utility functions

export const api = {
  get: async (url: string) => {
    console.log(`Fetching from ${url}`);
    return { ok: true, json: () => Promise.resolve({ data: [] }) };
  },
  post: async (url: string, data: any) => {
    console.log(`Posting to ${url} with data:`, data);
    return { ok: true, json: () => Promise.resolve({ success: true }) };
  },
};