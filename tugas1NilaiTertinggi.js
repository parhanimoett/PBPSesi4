let studentsScore = [
  { name: "Parhan", score: 90 },
  { name: "Bunga", score: 80 },
  { name: "Adit", score: 100 },
  { name: "Rizky", score: 70},
  { name: "Warda", score: 84},
  { name: "Lestari", score: 93}
];

studentsScore.sort((a, b) => b.score - a.score);

for (let i = 0; i < studentsScore.length; i++) {
  console.log("Peringkat " + (i + 1));
  console.log("Nama  : " + studentsScore[i].name);
  console.log("Nilai : " + studentsScore[i].score);
}