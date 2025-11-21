// Načteme naši třídu ze souboru student.js
import { Student } from './student.js';

console.log("--- ZAČÁTEK PROGRAMU ---");

// 1. Vytvoříme první instanci (Student Petr)
const student1 = new Student("Petr Novák", 2);

// 2. Vytvoříme druhou instanci (Studentka Jana)
const student2 = new Student("Jana Malá", 3);

// --- Práce s Petrem ---
// Zkusíme přidat známky
student1.pridatZnamku(1);
student1.pridatZnamku(2);
student1.pridatZnamku(1);
// Zkusíme přidat nesmyslnou známku (test zapouzdření)
student1.pridatZnamku(8); 

// Vypíšeme info
console.log(student1.predstavitSe());


// --- Práce s Janou ---
student2.pridatZnamku(3);
student2.pridatZnamku(1);

// Vypíšeme info
console.log(student2.predstavitSe());

console.log("--- KONEC PROGRAMU ---");