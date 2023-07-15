export default async function Home() {
  const data = await getData();
  
  return (
    <div>{data.map(item => <div key={item.userId}>{item.title}</div>)}</div>
  )
}

async function getData(): Promise<{userId: number; title: string}[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', { next: { revalidate: 10 } });
  if (!res) {
    throw new Error('The api endpoint not responded')
  }
  return res.json();
}
