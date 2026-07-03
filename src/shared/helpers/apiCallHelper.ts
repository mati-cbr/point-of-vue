import { ref } from "vue";

export interface IRequestParameters {
  apiUrl: string,
  endpoint: string,
  method: 'GET' | 'POST',
  body: string
}

async function makeRequest<T>(params: IRequestParameters) {
  const response = ref<T>();
  const request = await fetch(`${params.apiUrl}${params.endpoint}`);
  response.value = await request.json();
  return response;
}

export default async function apiCallHelper<T>(params: IRequestParameters) {
  return await makeRequest<T>(params);
}
