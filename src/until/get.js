const url = 'http://localhost:3000/data'
export function post(data) {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  })
  .catch(error => {
    console.error('Lỗi khi gửi dữ liệu:', error);
  });
}