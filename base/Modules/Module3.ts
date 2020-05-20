/*
 Module3.ts
*/

// Import Modules.
// Add Path Here.

export default class Module3 {
  // Types.
  private readonly letter: string

  public constructor(arg: string) {
    // Add Constructor.
    this.letter = arg
  }

  public core(): void {
    console.log(this.letter)
  }
}
