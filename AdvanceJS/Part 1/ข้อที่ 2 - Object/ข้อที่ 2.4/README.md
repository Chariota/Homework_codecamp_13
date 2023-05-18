### Codecamp # 13
    1. ชลัฐ ภัทรกิจจานุรักษ์
    2. ให้ Object ชื่อ ladder มี method ขึ้นและลง

            let ladder = {
                step: 0,
                up() {
                    this.step++;
                },
                down() {
                    this.step--;
                },
                showStep: function() { // shows the current step
                    alert( this.step );
                }
            };
         
         3. Object ชื่อ ladder สามารถเรียก function แบบนี้ได้
        
            ladder.up();
            ladder.up();
            ladder.down();
            ladder.showStep(); // 1

        4. ดัดแปลง Object ชื่อ ladder สามารถเรียก function แบบนี้ได้

            ladder.up().up().down().showStep(); // 1
