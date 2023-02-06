const username: string | number = 'nicobytes';

const sum = (a:number, b:number) => {
  return a+b;
}
sum (1,2);

class Person {
  constructor(public age:number, public lastName:string){ }
}

const Nico = new Person(18,"Molina");
