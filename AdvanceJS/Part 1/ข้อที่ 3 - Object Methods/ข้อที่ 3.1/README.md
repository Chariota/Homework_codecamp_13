### Codecamp # 13

    1. ชลัฐ ภัทรกิจจานุรักษ์
    2. การทำงานของ code ดังกล่าวจะได้อะไรออกมา

            let user = {
                name: "John",
                go: function() { alert(this.name) }
            }

            (user.go)() // Error เพราะ go เป็น function ถ้าจะเรียกใช้ต้อง user.go();
