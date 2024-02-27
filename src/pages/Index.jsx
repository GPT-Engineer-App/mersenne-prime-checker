import React, { useState, useEffect } from "react";
import { Input, Button, VStack, Text } from "@chakra-ui/react";

// Function to check if a number is prime
const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); ++i) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

// Function to check for Mersenne primes
const findMersennePrimes = (limit) => {
  const primes = [];
  for (let i = 2; i <= limit; ++i) {
    let mersenneNumber = Math.pow(2, i) - 1;
    if (isPrime(mersenneNumber)) {
      primes.push(`2^${i} - 1 = ${mersenneNumber}`);
    }
  }
  return primes;
};

const IndexPage = () => {
  const [limit, setLimit] = useState("");
  const [mersennePrimes, setMersennePrimes] = useState([]);

  useEffect(() => {
    if (limit) {
      setMersennePrimes(findMersennePrimes(parseInt(limit, 10)));
    }
  }, [limit]);

  return (
    <VStack spacing={4}>
      <Text>Enter the limit for Mersenne prime search:</Text>
      <Input placeholder="Enter a number" value={limit} onChange={(e) => setLimit(e.target.value)} />
      <Button onClick={() => setMersennePrimes(findMersennePrimes(parseInt(limit, 10)))}>Find Mersenne Primes</Button>
      <VStack spacing={2}>
        {mersennePrimes.map((prime, index) => (
          <Text key={index}>{prime} is a Mersenne prime.</Text>
        ))}
      </VStack>
    </VStack>
  );
};

export default IndexPage;
