class Hello {
  constructor(private word: string) { }

  getTheWord(): Promise<string> {
    return new Promise((resolve, reject) => {
      return resolve(this.word);
    });
  }
}
const helloService: Hello = new Hello('world');
export default helloService;
