interface Key {
  getSignature(): number;
}
interface Pers {
  getKey(): number;
}
interface Build {
  comeIn(pers: object): void;
}

const tenant = [];

function statusDoor(): boolean {
  return Math.random() > 0.5;
}
class Key implements Key {
  private signature = Math.random();
  getSignature(): number {
    return this.signature;
  }
}

class Person implements Pers {
  constructor(private key: number) {
    this.key = key;
  }
  getKey(): number {
    return this.key;
  }
}

class House implements Build {
  constructor(protected door: boolean, protected key: number) {
    this.door = door;
    this.key = key;
  }
  comeIn(pers: Pers): void {
    if (this.door) {
      tenant.push(pers);
    }
  }
  openDoor(persnKey) {}
}

class MyHouse extends House {
  constructor(protected door, protected key) {
    super(door, key);
  }

  openDoor(persnKey): any {
    if (!this.door && this.key === persnKey) {
      return (this.door = true);
    }
  }
}

const key = new Key();

const person = new Person(key.getSignature());
person.getKey();

const house = new MyHouse(statusDoor(), key.getSignature());
house.openDoor(person.getKey());

house.comeIn(person);

export {};
