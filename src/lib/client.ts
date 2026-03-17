export function fetchApi(url: string, options?: RequestInit) {
    
    if (options?.body) {
      const headers = new Headers(options.headers || {});
      headers.set("Content-Type", "application/json");
      options.headers = headers;
    }
  
    //${process.env.NEXT_PUBLIC_API_BASE_URL} 를 여기서 정의해서
    //보일러 플레이트를 훨씬 줄임
    return fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}${url}`, options).then(
      (res) => res.json());
    }