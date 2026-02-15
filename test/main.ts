type Event = {
  id: string
  payload: Record<string, any>
}

async function post(url: string, body: any): Promise<void> {
  const res = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' }
  })

  if (!res.ok) {
    throw new Error('Request failed')
  }
}

export async function sendEvent(event: Event) {
  await post('/api/events', {
    id: event.id,
    payload: event.payload
  })
}
