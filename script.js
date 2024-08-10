// Fungsi untuk menambahkan baris baru ke tabel
function addRow() {
    const tableBody = document.getElementById('productTableBody');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td><input type="text" class="productName" placeholder=""></td>
        <td><input type="number" class="productWeight" placeholder=""></td>
        <td class="energyResult"></td>
        <td class="proteinResult"></td>
        <td class="fatResult"></td>
        <td class="fiberResult"></td>
        <td class="carbsResult"></td>
        <td class="CarbonResult"></td>
        <td class="CalciumResult"></td>
        <td class="PhosporResult"></td>
        <td class="IronResult"></td>
        <td class="SodiumResult"></td>
        <td class="PotassiumResult"></td>
        <td class="CuprumResult"></td>
        <td class="ZincResult"></td>
        <td class="RetinolResult"></td>
        <td class="BKarResult"></td>
        <td class="KarTotResult"></td>
        <td class="ThaminResult"></td>
        <td class="RiboflavinResult"></td>
        <td class="NiasinResult"></td>
        <td class="VitaminCResult"></td>
    `;
    tableBody.appendChild(newRow);

    // Tambahkan event listener ke input baru untuk kalkulasi otomatis
    newRow.querySelector('.productName').addEventListener('input', calculateAndDisplay);
    newRow.querySelector('.productWeight').addEventListener('input', calculateAndDisplay);
}

// Fungsi untuk menambahkan 7 baris pertama secara otomatis
function addInitialRows() {
    for (let i = 0; i < 9; i++) {
        addRow();
    }
}

// Fungsi untuk melakukan kalkulasi dan menampilkan hasilnya
function calculateAndDisplay() {
    let totalEnergy = 0;
    let totalProtein = 0;
    let totalFat = 0;
    let totalFiber = 0;
    let totalCarbs = 0;
    let totalCarbon = 0;
    let totalCalcium = 0;
    let totalPhospor = 0;
    let totalIron = 0;
    let totalSodium = 0;
    let totalPotassium = 0;
    let totalCuprum = 0;
    let totalZinc = 0;
    let totalRetinol = 0;
    let totalBKar = 0;
    let totalKarTot = 0;
    let totalThamin = 0;
    let totalRiboflavin = 0;
    let totalNiasin = 0;
    let totalVitaminC = 0;
    let Code = '';
    let BBK = 0;


    document.querySelectorAll('#productTable tbody tr').forEach(row => {
        const productName = row.querySelector('.productName').value.toLowerCase();
        const productWeight = parseFloat(row.querySelector('.productWeight').value);

        if (!productName || isNaN(productWeight) || productWeight <= 0) {
            row.querySelector('.energyResult').textContent = '';
            row.querySelector('.proteinResult').textContent = '';
            row.querySelector('.fatResult').textContent = '';
            row.querySelector('.fiberResult').textContent = '';
            row.querySelector('.carbsResult').textContent = '';
            row.querySelector('.CarbonResult').textContent = '';
            row.querySelector('.CalciumResult').textContent = '';
            row.querySelector('.PhosporResult').textContent = '';
            row.querySelector('.IronResult').textContent = '';
            row.querySelector('.PotassiumResult').textContent = '';
            row.querySelector('.CuprumResult').textContent = '';
            row.querySelector('.ZincResult').textContent = '';
            row.querySelector('.RetinolResult').textContent = '';
            row.querySelector('.BKarResult').textContent = '';
            row.querySelector('.KarTotResult').textContent = '';
            row.querySelector('.ThaminResult').textContent = '';
            row.querySelector('.RiboflavinResult').textContent = '';
            row.querySelector('.NiasinResult').textContent = '';
            row.querySelector('.VitaminCResult').textContent = '';
            return;
        }

        // Cari produk di data.js
        const productData = bddDatas.find(data => data.name.toLowerCase() === productName);

        if (productData) {
            // Kalkulasi nutrisi berdasarkan berat
            const energy = (productData.energi * productWeight) / 100;
            const protein = (productData.protein * productWeight) / 100;
            const fat = (productData.lemak * productWeight) / 100;
            const fiber = (productData.serat * productWeight) / 100;
            const carbs = (productData.kh * productWeight) / 100;
            const carbon = (productData.abu * productWeight) / 100;
            const calcium = (productData.kalsium * productWeight) / 100;
            const phospor = (productData.fosfor * productWeight) / 100;
            const iron = (productData.besi * productWeight) / 100;
            const sodium = (productData.natrium * productWeight) / 100;
            const potassium = (productData.kalium * productWeight) / 100;
            const cuprum = (productData.tembaga * productWeight) / 100;
            const zinc = (productData.seng * productWeight) / 100;
            const retinol = (productData.retinol * productWeight) / 100;
            const bkar = (productData.betakaroten * productWeight) / 100;
            const kartot = (productData.kartotal * productWeight) / 100;
            const thamin = (productData.thamin * productWeight) / 100;
            const riboflavin = (productData.riboflavin * productWeight) / 100;
            const niasin = (productData.niasin * productWeight) / 100;
            const VitC = (productData.vitaminc * productWeight) / 100;
            const BK = (100 * productWeight) / (productData.nilai);
            const kode = (productData.kode)

            // Tampilkan hasil kalkulasi di tabel
            row.querySelector('.energyResult').textContent = energy.toFixed(2);
            row.querySelector('.proteinResult').textContent = protein.toFixed(2);
            row.querySelector('.fatResult').textContent = fat.toFixed(2);
            row.querySelector('.fiberResult').textContent = fiber.toFixed(2);
            row.querySelector('.carbsResult').textContent = carbs.toFixed(2);
            row.querySelector('.CarbonResult').textContent = carbon.toFixed(2);
            row.querySelector('.CalciumResult').textContent = calcium.toFixed(2);
            row.querySelector('.PhosporResult').textContent = phospor.toFixed(2);
            row.querySelector('.IronResult').textContent = iron.toFixed(2);
            row.querySelector('.SodiumResult').textContent = sodium.toFixed(2);
            row.querySelector('.PotassiumResult').textContent = potassium.toFixed(2);
            row.querySelector('.CuprumResult').textContent = cuprum.toFixed(2);
            row.querySelector('.ZincResult').textContent = zinc.toFixed(2);
            row.querySelector('.RetinolResult').textContent = retinol.toFixed(2);
            row.querySelector('.BKarResult').textContent = bkar.toFixed(2);
            row.querySelector('.KarTotResult').textContent = kartot.toFixed(2);
            row.querySelector('.ThaminResult').textContent = thamin.toFixed(2);
            row.querySelector('.RiboflavinResult').textContent = riboflavin.toFixed(2);
            row.querySelector('.NiasinResult').textContent = niasin.toFixed(2);
            row.querySelector('.VitaminCResult').textContent = VitC.toFixed(2);

            // Tambahkan ke total
            totalEnergy += energy;
            totalProtein += protein;
            totalFat += fat;
            totalFiber += fiber;
            totalCarbs += carbs;
            totalCarbon += carbon;
            totalCalcium += calcium;
            totalPhospor += phospor;
            totalIron += iron;
            totalSodium += sodium;
            totalPotassium += potassium;
            totalCuprum += cuprum;
            totalZinc += zinc;
            totalRetinol += retinol;
            totalBKar += bkar;
            totalKarTot += kartot;
            totalThamin += thamin;
            totalRiboflavin += riboflavin;
            totalNiasin += niasin;
            totalVitaminC += VitC;
            Code += kode;
            BBK += BK;
        } else {
            row.querySelector('.energyResult').textContent = '';
            row.querySelector('.proteinResult').textContent = '';
            row.querySelector('.fatResult').textContent = '';
            row.querySelector('.fiberResult').textContent = '';
            row.querySelector('.carbsResult').textContent = '';
            row.querySelector('.CarbonResult').textContent = '';
            row.querySelector('.CalciumResult').textContent = '';
            row.querySelector('.PhosporResult').textContent = '';
            row.querySelector('.IronResult').textContent = '';
            row.querySelector('.SodiumResult').textContent = '';
            row.querySelector('.PotassiumResult').textContent = '';
            row.querySelector('.CuprumResult').textContent = '';
            row.querySelector('.ZincResult').textContent = '';
            row.querySelector('.RetinolResult').textContent = '';
            row.querySelector('.BKarResult').textContent = '';
            row.querySelector('.KarTotResult').textContent = '';
            row.querySelector('.ThaminResult').textContent = '';
            row.querySelector('.RiboflavinResult').textContent = '';
            row.querySelector('.NiasinResult').textContent = '';
            row.querySelector('.VitaminCResult').textContent = '';
        }
    });

    // Update total kalkulasi di kontainer
    document.getElementById('totalEnergy').textContent = totalEnergy.toFixed(2);
    document.getElementById('totalProtein').textContent = totalProtein.toFixed(2);
    document.getElementById('totalFat').textContent = totalFat.toFixed(2);
    document.getElementById('totalFiber').textContent = totalFiber.toFixed(2);
    document.getElementById('totalCarbs').textContent = totalCarbs.toFixed(2);
    document.getElementById('totalCarbon').textContent = totalCarbon.toFixed(2);
    document.getElementById('totalCalcium').textContent = totalCalcium.toFixed(2);
    document.getElementById('totalPhospor').textContent = totalPhospor.toFixed(2);
    document.getElementById('totalIron').textContent = totalIron.toFixed(2);
    document.getElementById('totalSodium').textContent = totalSodium.toFixed(2);
    document.getElementById('totalPotassium').textContent = totalPotassium.toFixed(2);
    document.getElementById('totalCuprum').textContent = totalCuprum.toFixed(2);
    document.getElementById('totalZinc').textContent = totalZinc.toFixed(2);
    document.getElementById('totalRetinol').textContent = totalRetinol.toFixed(2);
    document.getElementById('totalBKar').textContent = totalBKar.toFixed(2);
    document.getElementById('totalKarTot').textContent = totalKarTot.toFixed(2);
    document.getElementById('totalThamin').textContent = totalThamin.toFixed(2);
    document.getElementById('totalRiboflavin').textContent = totalRiboflavin.toFixed(2);
    document.getElementById('totalNiasin').textContent = totalNiasin.toFixed(2);
    document.getElementById('totalVitaminC').textContent = totalVitaminC.toFixed(2);
    document.getElementById('Code').textContent = Code.toFixed(2);
    document.getElementById('BBK').textContent = BBK.toFixed(2);
}

// Tambahkan event listener ke tombol tambah baris
document.getElementById('addRowBtn').addEventListener('click', addRow);

// Tambahkan event listener ke baris awal
document.addEventListener('DOMContentLoaded', function() {
    addInitialRows();
});
