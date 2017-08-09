class Student {
    constructor(name, age, id) {
        // always initialize all instance properties
        this.name = name;
        this.age = age;
        this.id = id;
    }
    getStudentName() {
        return this.name;
    }
    getStudentAge() {
        return this.age;
    }
    getStudentId() {
        return this.id;
    }
}