for (let i = 1; i <= 100; i++) {
  const fizz = (i % 3 === 0);
  const buzz = (i % 5 === 0);
  const value = fizz 
    ? (buzz 
        ? 'FizzBuzz' 
        : 'Fizz') 
    : (buzz 
        ? 'Buzz' 
        : i);

  console.log(value);
}