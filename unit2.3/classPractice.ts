//First Class
class Employee {
    //properties are next
    id: number;
    name: string;
    phone: number;
    email: string;
    //set our properties with a constructor; 
    //these are all the required properties in order to make the class employee work
    constructor(id:number, name:string, phone:number, email:string) {
        this.id = id
        this.name = name
        this.phone = phone
        this.email = email
    };
    //return the strong we want for an employee record
    toString(): string {
        let output = 
        `Employee Record ------- ID: ${this.id}\n` +
        `\tName: ${this.name}\n` + 
        `Contact Information\n` +
        `\tPhone: ${this.phone}\n` +
        `\tEmail: ${this.email}`;
        return output;
    }
}

let oneAndOnly = new Employee (
    1,
    "Trevor Phillips",
    8018675309,
    "trevor@tpinc.org",
    );
    console.log(oneAndOnly.toString())