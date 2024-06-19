export default function Home() {
  return (
    <main>
      <div className="bg-black text-neutral-50 flex justify-center min-h-80">
        <h1>Name</h1>
        <h2>usps. usps. usps</h2>
        <button className="p-3 rounded-full bg-blue-500">CTA button 1</button>
        <button className="p-3 rounded-full border-2 border-blue-500">
          CTA button 2
        </button>
      </div>
      <div className="bg-pink-600 text-neutral-50 flex justify-center min-h-80">
        Other products
      </div>
    </main>
  );
}
