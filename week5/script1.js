function det() {
	let s11= parseInt(document.querySelector("#s11").value);
	let s12= parseInt(document.querySelector("#s12").value);
	let s13= parseInt(document.querySelector("#s13").value);
	let s21= parseInt(document.querySelector("#s21").value);
	let s22= parseInt(document.querySelector("#s22").value);
	let s23= parseInt(document.querySelector("#s23").value);
	let s31= parseInt(document.querySelector("#s31").value);
	let s32= parseInt(document.querySelector("#s32").value);
	let s33= parseInt(document.querySelector("#s33").value);

	const result=document.querySelector("#result");

	let md= s11*s22*s33;
	let sd= s13*s22*s31;
	let down1=s21*s32*s13;
	let up1=s12*s23*s31;
	let down2= s32*s23*s11;
	let up2= s21*s12*s33;
	let res= (md+down1+up1)-(sd+down2+up2);
	result.innerHTML = res;
}
const button= document.querySelector('#determinant');
button.addEventListener('click',function() {
det();
});