class Pendaftar {
    constructor(nama, umur, uangSangu) {
      this.nama = nama;
      this.umur = umur;
      this.uangSangu = uangSangu;
    }
  }
  
  let pendaftarList = [];
  
  const form = document.getElementById("registrationForm");
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const nama = document.getElementById("nama").value;
    const umur = parseInt(document.getElementById("umur").value);
    const uangSangu = parseInt(document.getElementById("uangSangu").value);
    
    // Validasi form
    if (nama.length < 10 || umur < 25 || uangSangu < 100000 || uangSangu > 1000000) {
      alert("Mohon lengkapi form dengan benar!");
      return;
    }
  
    const pendaftar = new Pendaftar(nama, umur, uangSangu);
    pendaftarList.push(pendaftar);
    updateListPendaftar();
    form.reset();
  });
  
  function updateListPendaftar() {
    const listPendaftarDiv = document.getElementById("listPendaftar");
    listPendaftarDiv.innerHTML = "";
  
    // Membuat tabel
    const table = document.createElement("table");
    table.classList.add("table");
  
    // Membuat header tabel
    const thead = document.createElement("thead");
    thead.innerHTML = `
      <tr>
        <th>Nama</th>
        <th>Umur</th>
        <th>Uang Sangu (Rp)</th>
      </tr>
    `;
    table.appendChild(thead);
  
    // Membuat body tabel
    const tbody = document.createElement("tbody");
    pendaftarList.forEach(pendaftar => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${pendaftar.nama}</td>
        <td>${pendaftar.umur}</td>
        <td>${pendaftar.uangSangu}</td>
      `;
      tbody.appendChild(tr);
    });
    table.appendChild(tbody);
  
    // Menambahkan tabel ke dalam div listPendaftar
    listPendaftarDiv.appendChild(table);
  
    // Menghitung rata-rata umur dan uang sangu
    const totalUmur = pendaftarList.reduce((total, pendaftar) => total + pendaftar.umur, 0);
    const totalUangSangu = pendaftarList.reduce((total, pendaftar) => total + pendaftar.uangSangu, 0);
    const rataRataUmur = totalUmur / pendaftarList.length;
    const rataRataUangSangu = totalUangSangu / pendaftarList.length;
  
    // Menampilkan rata-rata
    const rataRataDiv = document.createElement("div");
    rataRataDiv.innerHTML = `Rata rata pendaftar memiliki uang sangu sebesar ${rataRataUangSangu} dengan rata rata umur ${rataRataUmur}`;
    listPendaftarDiv.appendChild(rataRataDiv);
  }
  