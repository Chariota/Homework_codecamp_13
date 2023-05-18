### Codecamp # 13

    1. ชลัฐ ภัทรกิจจานุรักษ์
    2. การทำงานของ code ดังกล่าวจะได้อะไรออกมา

            function makeUser() {
                return {
                    name: "John",
                    ref: this
                };
            };

            let user = makeUser();

            alert(user.ref.name);
            // undefined เพราะคนเรียก object คือ Window
