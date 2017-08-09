const Student = (() => {
    let _Student = class {};
    let props = {
        Age: null,
        Name: null,
        ID: null
    };
    for (let prop in props) {
        Object.defineProperty(_Student, prop, {
            get: function() {
                return props[prop];
            },
            set: function(newValue) {
                props[prop] = newValue;
            },
            enumerable: true
        });
    }
    return _Student;
})();

let student = new Student();
student.Age = 12;
student.Name = "Tolani";
student.ID = "Pokemon1234";
console.log(student.Age, student.Name, student.ID);