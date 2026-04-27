import type { ErrorResponse } from 'types';

export async function apiFetchEx<T>(
  path: string,
  params?: RequestInit
): Promise<{ json: T; res: Response }> {
  const pathPart = path.startsWith('/') ? path : `/${path}`;
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}${pathPart}`;

  const res = await fetch(url, {
    ...params,
    headers: {
      Accept: 'application/json',
      'x-vercel-protection-bypass': process.env.VERCEL_PROTECTION_KEY ?? '',
      ...params?.headers,
    },
  });

  let json: unknown;
  try {
    json = await res.json();
  } catch {
    throw new Error(`Invalid JSON response: ${res.statusText}`, {
      cause: res.status,
    });
  }

  if (!res.ok) {
    const err = json as ErrorResponse;
    throw new Error(`${err.error?.message ?? res.statusText}`, {
      cause: res.status,
    });
  }

  return { json: json as T, res };
}

export async function apiFetch<T>(
  path: string,
  params?: RequestInit
): Promise<T> {
  const { json } = await apiFetchEx<T>(path, params);
  return json;
}
