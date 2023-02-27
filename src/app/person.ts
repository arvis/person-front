export interface Person {
    id: number;
    personalId: string;
    dateOfBirth:string;
    firstName: string;
    lastName: string;
    gender: string;
}

export enum Gender {
    Male,
    Femal,
};