function Student(firstname, lastname) {
    that = this;

    that.firstname = firstname;
    that.lastname = lastname;

    that.getname = function() {
        return that.firstname + " " + that.lastname;
    }
}

module.exports = Student;