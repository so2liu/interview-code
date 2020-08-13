class Dictionary<T> {
  #datastore: { [key: string]: T };
  constructor() {
    this.#datastore = {};
  }

  add(key: string, value: T) {
    this.#datastore[key] = value;
  }

  find(key: string) {
    return this.#datastore[key];
  }

  remove(key: string) {
    delete this.#datastore[key];
  }

  toString() {
    return Object.keys(this.#datastore)
      .sort()
      .map((key) => `${key} => ${this.#datastore[key]}`)
      .join("\n");
  }

  get length() {
    return Object.keys(this.#datastore).length;
  }

  clear() {
    this.#datastore = {};
  }
}

// Test
const dict = new Dictionary();
dict.add("mother", "Mutter");
dict.add("father", "Vater");
dict.add("son", "Son");
console.log(dict.toString());
