let motorGP = [
  {
    circuit: "Losail",
    location: "Qatar",
    winner: {
      firstName: "Andrea",
      lastName: "Dovizioso",
      country: "Italy",
    },
  },
  {
    circuit: "Autodromo",
    location: "Argentine",
    winner: {
      firstName: "Cal",
      lastName: "Crutchlow",
      country: "UK",
    },
  },
  {
    circuit: "De Jerez",
    location: "Spain",
    winner: {
      firstName: "Valentino",
      lastName: "Rossi",
      country: "Italy",
    },
  },
  {
    circuit: "Mugello",
    location: "Italy",
    winner: {
      firstName: "Andrea",
      lastName: "Dovizioso",
      country: "Italy",
    },
  },
];

// menyimpan hasil pengelompokan berdasarkan negara pemenang
let hasil = {};

// melakukan perulangan untuk setiap event MotorGP
for (let i = 0; i < motorGP.length; i++) {
  let event = motorGP[i];

  // mengambil negara asal pemenang
  let negara = event.winner.country;

  // buat data baru jika negara belum ada di hasil
  if (!hasil[negara]) {
    hasil[negara] = {
      winningCircuits: [], 
      totalWin: 0,         
    };
  }

  // menyimpan nama pemenang dan lokasi sirkuit
  hasil[negara].winningCircuits.push({
    name: event.winner.firstName + " " + event.winner.lastName,
    winLocation: event.circuit + ", " + event.location,
  });

  // menambahkan jumlah kemenangan negara tersebut
  hasil[negara].totalWin++;
}

// menampilkan total kemenangan setiap negara
Object.entries(hasil).forEach(([negara, data]) => {
  console.log(`${negara}: ${data.totalWin} kemenangan`);

  // menampilkan nama pemenang dan lokasi setiap kemenangan
  data.winningCircuits.forEach(({ name, winLocation }) => {
    console.log(`  - ${name}, ${winLocation}`);
  });
});