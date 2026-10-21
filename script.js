let harga = [];

function totalBelanja(items, i) {
    for (i = 0; i < 2; i++) {
    total = items[i].harga * items[i].jumlah;
    console.log("Nama Barang : " + items[i].nama);
    console.log("Total Harga : Rp. " + total);
    harga.push(total);
    }
}

function hargaAkhir() {
    total = harga[0] + harga[1];
    console.log("Total Akhir : Rp. " + total);
}

totalBelanja([
    { nama: "Buku", harga: 50000, jumlah: 2 },
    { nama: "Pulpen", harga: 15000, jumlah: 3 },
])

hargaAkhir()
