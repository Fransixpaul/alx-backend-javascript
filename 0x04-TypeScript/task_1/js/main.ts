interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any; // allows additional properties
}

const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};

console.log(teacher3);

//Define the Teacher interface
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    readonly location: string;
    [prooName: string]: any; // allow additional properties like 'contract'
}

//Define the Directors interface that extends Teacher
interface Directors extends Teacher {
    numberofReports: number;
}

//Exmaple usage:
const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};

console.log(director1);