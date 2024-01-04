export interface Friend {
   firstName: string,
   lastName: string,
   gender: Gender,
   age: number,
   email: string,
   active?: boolean,
};

type Gender = 'male' | 'female';