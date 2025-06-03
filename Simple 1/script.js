// Data tugas harian
const tasks = [
    {
      day: "Hari 1: Kumpulin Data",
      items: [
        "Dapetin laporan keuangan lengkap (Laba Rugi, Neraca, Arus Kas, Catatan)",
        "Cari info sektor pertambangan biar paham konteks"
      ],
    },
    {
      day: "Hari 2: Analisis Laporan Laba Rugi",
      items: [
        "Lihat total pendapatan dan bandingin sama tahun sebelumnya",
        "Cek biaya dan beban utama, terutama yang besar",
        "Hitung laba bersih dan margin laba"
      ],
    },
    {
      day: "Hari 3: Analisis Neraca",
      items: [
        "Cek total aset dan bandingkan dengan kewajiban",
        "Hitung rasio likuiditas (current ratio)",
        "Hitung rasio hutang terhadap ekuitas (debt to equity)"
      ],
    },
    {
      day: "Hari 4: Analisis Arus Kas",
      items: [
        "Periksa arus kas dari aktivitas operasi, investasi, dan pendanaan",
        "Pastikan perusahaan punya arus kas positif dari operasi"
      ],
    },
    {
      day: "Hari 5: Rasio Keuangan & Bandingkan dengan Industri",
      items: [
        "Hitung rasio profitabilitas (ROA, ROE)",
        "Bandingkan rasio-rasio utama dengan standar sektor pertambangan",
        "Catat risiko dan peluang di sektor tambang"
      ],
    },
    {
      day: "Hari 6: Review & Kesimpulan",
      items: [
        "Rangkum semua temuan",
        "Tentukan apakah kondisi keuangan sehat atau perlu perbaikan",
        "Buat rekomendasi sederhana"
      ],
    },
  ];
  
  const container = document.getElementById('container');
  
  // Load progres dari localStorage
  function loadProgress() {
    const saved = localStorage.getItem('progresKeuangan');
    return saved ? JSON.parse(saved) : {};
  }
  
  // Simpan progres ke localStorage
  function saveProgress(progress) {
    localStorage.setItem('progresKeuangan', JSON.stringify(progress));
  }
  
  // Buat daftar tugas untuk satu hari
  function createTaskList(dayIndex, dayObj, progress) {
    const dayDiv = document.createElement('div');
    dayDiv.classList.add('day');
  
    const h2 = document.createElement('h2');
    h2.textContent = dayObj.day;
    dayDiv.appendChild(h2);
  
    const ul = document.createElement('ul');
  
    dayObj.items.forEach((task, i) => {
      const li = document.createElement('li');
  
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.id = `day${dayIndex}_task${i}`;
      checkbox.checked = progress[dayIndex]?.[i] || false;
  
      checkbox.addEventListener('change', () => {
        progress[dayIndex] = progress[dayIndex] || {};
        progress[dayIndex][i] = checkbox.checked;
        saveProgress(progress);
      });
  
      const label = document.createElement('label');
      label.htmlFor = checkbox.id;
      label.textContent = task;
  
      li.appendChild(checkbox);
      li.appendChild(label);
      ul.appendChild(li);
    });
  
    dayDiv.appendChild(ul);
    return dayDiv;
  }
  
  // Render semua hari dan tugas ke container
  function render() {
    const progress = loadProgress();
    container.innerHTML = '';
    tasks.forEach((day, i) => {
      const dayElement = createTaskList(i, day, progress);
      container.appendChild(dayElement);
    });
  }
  
  render();
  