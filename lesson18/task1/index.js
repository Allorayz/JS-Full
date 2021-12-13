export const event = {
  message: 'Welcome to the party!',
  guests: [
    { name: 'John', age: 18, email: 'mail1@email.com' },
    { name: 'Fil', age: 24, email: 'mail2@email.com' },
    { name: 'Max', age: 17, email: 'mail3@email.com' },
  ],
  getInvitations() {
    return this.guests
      .filter(({ age }) => age >= 18)
      .map(({ name, email }) => {
        return {
          email,
          message: `Dear ${name}! ${this.message}`,
        };
      });
  },
};

console.log(event.getInvitations());
