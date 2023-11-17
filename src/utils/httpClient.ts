// const BASE_SERVER = "http://localhost:8080/api/v1/";
const BASE_SERVER = "http://192.168.1.202:8080/api/v1/";

export const getData = async <T>(endpoint: string) => {
  const res = await fetch(`${BASE_SERVER}${endpoint}`);
  if (!res.ok) throw new Error(`Get misslyckades, endpoint: ${endpoint}`);

  const data = (await res.json()) as unknown;
  return data as T;
};

export const postData = async <T, R>(endpoint: string, body: T) => {
  const res = await fetch(BASE_SERVER + endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (res.status !== 201) {
    throw new Error(`Post misslyckades, endpoint: ${endpoint}, body: ${body}`);
  }

  const data = (await res.json()) as unknown;
  return data as R;
};
