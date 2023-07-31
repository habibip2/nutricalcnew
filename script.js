// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');
//Ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = ()=> {
	navbarNav.classList.toggle('active');
};

//klik di luar sidebar untuk menghilangkan
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e){
	if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
		navbarNav.classList.remove('active');
	}
})

//Toggle sampingan
const sampinganLogo = document.querySelector('.sampingan-logo');

//ketika sampingan di klik
document.querySelector('#help').onclick = ()=> {
	sampinganLogo.classList.toggle('active');
};

const help = document.querySelector('#help');
document.addEventListener('click', function(e){
	if(!help.contains(e.target) && !sampinganLogo.contains(e.target)){
		sampinganLogo.classList.remove('active');
	}
})


const form = document.getElementById("calculate");
const submitBtn = document.querySelector(".submit");

// values
const bahan_makanan = document.querySelector("#food-name");
const sifat = document.querySelector("#opsi");
const massa = document.querySelector("#mass");

const resultdiv = document.getElementById("result")

form.addEventListener("submit",(e) => {
	e.preventDefault()
	
	hitungBdd()
})

const hitungBdd = () => {
	let hasil = 0;
	let bair = 0;
	let benergy = 0;
	let bprotein = 0;
	let blemak = 0;
	let bkh = 0;
	let bserat = 0;
	let babu = 0;
	let bkalsium = 0;
	let bfosfor = 0;
	let bbesi = 0;
	let bnatrium = 0;
	let bkalium = 0;
	let btembaga = 0;
	let bseng = 0;
	let bretinol = 0;
	let bbetakaroten = 0;
	let bkartotal = 0;
	let bthamin = 0;
	let briboflavin = 0;
	let bniasin = 0;
	let bvitc = 0;
	let kode = 0;
	let bbbk = 0;
	
	bddDatas.forEach((item) => {
		if(item.name === bahan_makanan.value){
			if(sifat.value === "bersih")
				hasil = massa.value * 100 / item.nilai;
			else
				hasil = massa.value * item.nilai / 100
		}
		
		if(item.name === bahan_makanan.value){
			if(sifat.value === "bersih")
				bair = massa.value * item.air / 100 ;
			else
				bair = hasil * item.air / 100
			}
		
		if(item.name === bahan_makanan.value){
			if(sifat.value === "bersih")
				benergy = massa.value * item.energi / 100 ;
			else
				benergy = hasil * item.energi / 100
			}
			
		if(item.name === bahan_makanan.value){
			if(sifat.value === "bersih")
				bprotein = massa.value * item.protein / 100 ;
			else
				bprotein = hasil * item.protein / 100
			}
		
		if(item.name === bahan_makanan.value){
			if(sifat.value === "bersih")
				blemak = massa.value * item.lemak / 100 ;
			else
				blemak = hasil * item.lemak / 100
			}
			
		if(item.name === bahan_makanan.value){
			if(sifat.value === "bersih")
				bkh = massa.value * item.kh / 100 ;
			else
				bkh = hasil * item.kh / 100
			}
			
		if(item.name === bahan_makanan.value){
			if(sifat.value === "bersih")
				bserat = massa.value * item.serat / 100 ;
			else
				bserat = hasil * item.serat / 100
			}
			
		if(item.name === bahan_makanan.value){
			if(sifat.value === "bersih")
				babu = massa.value * item.abu / 100 ;
			else
				babu = hasil * item.abu / 100
			}
			
		if(item.name === bahan_makanan.value){
			if(sifat.value === "bersih")
				bkalsium = massa.value * item.kalsium / 100 ;
			else
				bkalsium = hasil * item.kalsium / 100
			}
			
		if(item.name === bahan_makanan.value){
			if(sifat.value === "bersih")
				bfosfor = massa.value * item.fosfor / 100 ;
			else
				bfosfor = hasil * item.fosfor / 100
			}
			
		if(item.name === bahan_makanan.value){
			if(sifat.value === "bersih")
				bbesi = massa.value * item.besi / 100 ;
			else
				bbesi = hasil * item.besi / 100
			}
		
		if(item.name === bahan_makanan.value){
			if(sifat.value === "bersih")
				bnatrium = massa.value * item.natrium / 100 ;
			else
				bnatrium = hasil * item.natrium / 100
			}
			
		if(item.name === bahan_makanan.value){
			if(sifat.value === "bersih")
				bkalium = massa.value * item.kalium / 100 ;
			else
				bkalium = hasil * item.kalium / 100
			}
			
		if(item.name === bahan_makanan.value){
			if(sifat.value === "bersih")
				btembaga = massa.value * item.tembaga / 100 ;
			else
				btembaga = hasil * item.tembaga / 100
			}
			
		if(item.name === bahan_makanan.value){
			if(sifat.value === "bersih")
				bseng = massa.value * item.seng / 100 ;
			else
				bseng = hasil * item.seng / 100
			}
			
		if(item.name === bahan_makanan.value){
			if(sifat.value === "bersih")
				bretinol = massa.value * item.retinol / 100 ;
			else
				bretinol = hasil * item.retinol / 100
			}
		
		if(item.name === bahan_makanan.value){
			if(sifat.value === "bersih")
				bbetakaroten = massa.value * item.betakaroten / 100 ;
			else
				bbetakaroten = hasil * item.betakaroten / 100
			}
			
		if(item.name === bahan_makanan.value){
			if(sifat.value === "bersih")
				bkartotal = massa.value * item.kartotal / 100 ;
			else
				bkartotal = hasil * item.kartotal / 100
			}
			
		if(item.name === bahan_makanan.value){
			if(sifat.value === "bersih")
				bthamin = massa.value * item.thamin / 100 ;
			else
				bthamin = hasil * item.thamin / 100
			}
			
		if(item.name === bahan_makanan.value){
			if(sifat.value === "bersih")
				briboflavin = massa.value * item.riboflavin / 100 ;
			else
				briboflavin = hasil * item.riboflavin / 100
			}
			
		if(item.name === bahan_makanan.value){
			if(sifat.value === "bersih")
				bniasin = massa.value * item.niasin / 100 ;
			else
				bniasin = hasil * item.niasin / 100
			}
			
		if(item.name === bahan_makanan.value){
			if(sifat.value === "bersih")
				bvitc = massa.value * item.vitaminc / 100 ;
			else
				bvitc = hasil * item.vitaminc / 100
			}
			
		
		
		if(item.name === bahan_makanan.value){
			if(sifat.value === "bersih")
				bbbk = "Kotor" ;
			else
				bbbk = "Bersih"
			}
			
		if(item.name === bahan_makanan.value){
			kode = item.kode }
	
		resultdiv.innerHTML =
		"<p>Nama Bahan Makanan = " + bahan_makanan.value + "</p>" +
		"<p>Berat " + bbbk + " = " + hasil.toFixed(2) + "gr</p>"  +
		"<p>Berat kandungan air = " + bair.toFixed(2) + "gr</p>" +
		"<p>Total energy = " + benergy.toFixed(2) + " kkal </p>" +
		"<p>Total Protein = " + bprotein.toFixed(2) + " gr </p>" +
		"<p>Total Lemak = " + blemak.toFixed(2) + " gr </p>" +
		"<p>Total Karbohidrat = " + bkh.toFixed(2) + " gr </p>" +
		"<p>Total Serat = " + bserat.toFixed(2) + " gr </p>" +
		"<p>Total Abu = " + babu.toFixed(2) + " gr </p>" +
		"<p>Total Kalsium = " + bkalsium.toFixed(2) + " mg </p>" +
		"<p>Total Fosfor = " + bfosfor.toFixed(2) + " mg </p>" +
		"<p>Total Zat Besi = " + bbesi.toFixed(2) + " mg </p>" +
		"<p>Total Natrium = " + bnatrium.toFixed(2) + " mg </p>" +
		"<p>Total Kalium = " + bkalium.toFixed(2) + " mg </p>" +
		"<p>Total Tembaga = " + btembaga.toFixed(2) + " mg </p>" +
		"<p>Total Zinc = " + bseng.toFixed(2) + " mg </p>" +
		"<p>Total Retinol = " + bretinol.toFixed(2) + " mcg </p>" +
		"<p>Total Betakaroten = " + bbetakaroten.toFixed(2) + " mcg </p>" +
		"<p>Total Kar-total = " + bkartotal.toFixed(2) + " mcg </p>" +
		"<p>Total Thamin = " + bthamin.toFixed(2) + " mg </p> " +
		"<p>Total Riboflavin = " + briboflavin.toFixed(2) + " mg </p>" +
		"<p>Total Niasin = " + bniasin.toFixed(2) + " mg </p>" +
		"<p>Total Vitamin C = " + bvitc.toFixed(2) + " mg </p>" +
		"<p> Kode = " + kode + " </p>" ;
		
	})
	
	console.log(hasil)
}