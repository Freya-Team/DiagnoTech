import React, { useState } from 'react';

function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  let i = 5;
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
    i += 6;
  }
  return true;
}

const PrimeComponent = () => {
  const [startNumber, setStartNumber] = useState('');
  const [finishNumber, setFinishNumber] = useState('');
  const [primeNumbers, setPrimeNumbers] = useState([]);

  const handleFindPrimes = () => {
    const start = parseInt(startNumber);
    const finish = parseInt(finishNumber);
    let primes = [];
    for (let i = start; i <= finish; i++) {
      if (isPrime(i)) {
        primes.push(i);
      }
    }
    setPrimeNumbers(primes);
  };

  return (
    <div className="container mx-auto mt-10">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-semibold mb-6 text-center">Prime Number Finder</h1>
        <div className="flex items-center mb-4">
          <label htmlFor="startNumber" className="mr-4">Start Number:</label>
          <input
            type="number"
            id="startNumber"
            className="border rounded px-2 py-1"
            value={startNumber}
            onChange={(e) => setStartNumber(e.target.value)}
          />
        </div>
        <div className="flex items-center mb-4">
          <label htmlFor="finishNumber" className="mr-4">Finish Number:</label>
          <input
            type="number"
            id="finishNumber"
            className="border rounded px-2 py-1"
            value={finishNumber}
            onChange={(e) => setFinishNumber(e.target.value)}
          />
        </div>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          onClick={handleFindPrimes}
        >
          Find Primes
        </button>
        <div className="mt-4">
          {primeNumbers.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold mb-2">Prime Numbers:</h2>
              <ul>
                {primeNumbers.map((prime) => (
                  <li key={prime}>{prime}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PrimeComponent
