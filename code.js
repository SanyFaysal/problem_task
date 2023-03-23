const vaxTrail = (users) => {
  const result = {
    A: [],
    B: [],
    C: [],
    D: [],
  };

  users.map((user) => {
    if (user.age >= 20 && user.age <= 30 && user.temperature < 100) {
      result.A.push(user);
    }
    if (user.age >= 31 && user.age <= 40 && user.temperature < 100) {
      result.B.push(user);
    }
    if (user.age >= 41 && user.age <= 50 && user.temperature < 100) {
      result.C.push(user);
    }
    if (user.temperature >= 100) {
      result.D.push(user);
    }
  });
  return result;
};

const users = [
  { name: "manik", age: 33, temperature: 98 },
  { name: "faysal", age: 22, temperature: 99 },
  { name: "sohel", age: 26, temperature: 100 },
  { name: "kamal", age: 50, temperature: 99 },
  { name: "hasna", age: 38, temperature: 99 },
  { name: "soyaeb", age: 20, temperature: 100 },
  { name: "safa", age: 29, temperature: 101 },
  { name: "kowshik", age: 32, temperature: 102 },
  { name: "sabiha", age: 26, temperature: 98 },
  { name: "simul", age: 22, temperature: 99 },
  { name: "keya", age: 44, temperature: 99 },
  { name: "rahman", age: 28, temperature: 100 },
  { name: "payel", age: 22, temperature: 103 },
  { name: "subro", age: 36, temperature: 98 },
];
console.log(vaxTrail(users));
