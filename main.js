function Student(fname, lname, byear, marks, attendance) {
    this.fname = fname;
    this.lname = lname;
    this.byear = byear;
    this.marks = marks;
    this.attendance = attendance;

    this.age = function () {
        let date = new Date();
        let age = date.getFullYear() - this.byear;
        // console.log(age);
        return age;
    }

    this.avarage = function () {
        let sum = 0;
        for (i of this.marks) {
            sum += i;
        }
        sum = sum / this.marks.length;
        return sum
    }

    this.present = function () {
        if (attendance.length < 25) {
            attendance.push(true);
        } else {
            alert('The course of lectures is over');
        }
        return this.attendance;
    }

    this.absent = function () {
        if (attendance.length < 25) {
            attendance.push(false);
        } else {
            alert('The course of lectures is over');
        }
        return this.attendance;
    }

    this.summary = function () {
        if (this.avarage() > 90 & attendance.filter(val => val).length / 25 > 0.9) {
            return 'Молодець';
        } else {
            if (this.avarage() > 90 | attendance.filter(val => val).length / 25 > 0.9) {
                return 'Добре, але можна краще';
            } else {
                return 'Редиска';
            }
        }

    }
}

let ivanov = new Student('piotr', 'ivanov', 1986, [95, 80, 70, 100, 100], []);
let petrov = new Student('ivan', 'petrov', 1982, [95, 100, 98, 90, 100, 100], []);
let sidorov = new Student('sidor', 'sidorov', 1990, [50, 90, 98, 85], []);

function getRandomBoolean() {
    return Math.random() < 0.9;
}

list = [ivanov, petrov, sidorov];
for (i of list) {
    while (i.attendance.length < 25) {
        if (getRandomBoolean()) {
            i.present();
        } else {
            i.absent();
        }
    }
    console.log(i.attendance);
}

for (i of list) {
    console.log(i.fname.toUpperCase(), i.lname.toUpperCase());
    console.log(i.age(), ' years old');
    console.log(i.summary());
}