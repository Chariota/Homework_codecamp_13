let styles = ["Jazz", "Blues"];

styles.push("Rock-n-Roll"); // เพิ่มต่อท้าย

styles[1] = "Classics"; // เปลี่ยนค่าที่ 1

styles.shift(); // เอาตัวแรกออก

styles.unshift("Rap", "Reggae"); // เพิ่มไปข้างหน้า

console.log(styles); //(4) ['Rap', 'Reggae', 'Classics', 'Rock-n-Roll']
