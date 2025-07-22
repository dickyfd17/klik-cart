export default function Banner() {
    return (
      <div className="mx-6 my-8 bg-blue-900 rounded-lg flex p-6 items-center justify-between text-white">
        <div>
          <p className="uppercase text-sm mb-1">Best Deal Online on smart watches</p>
          <h2 className="text-3xl font-bold mb-2">SMART WEARABLE.</h2>
          <p className="uppercase text-sm">UP to 80% OFF</p>
          <div className="mt-2 space-x-1">
            {Array.from({ length: 6 }).map((_, i) => (
              <span key={i} className={`inline-block w-2 h-2 rounded-full ${i === 0 ? 'bg-white' : 'bg-blue-700'}`}></span>
            ))}
          </div>
        </div>
        <img
          src="https://file.aiquickdraw.com/imgcompressed/img/compressed_10bc64b044f7b628ae9c772d27355c0e.webp"
          alt="Smart Watch"
          className="h-32 w-32 object-contain"
        />
      </div>
    );
  }
  