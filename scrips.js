var total;

function evaluar(){

	const seleccionar = document.querySelector('[name="GrupoOpciones"]')
	const seleccionar2 = document.querySelector('[name="GrupoOpciones2"]')
	const seleccionar3 = document.querySelector('[name="GrupoOpciones3"]')
	const seleccionar4 = document.querySelector('[name="GrupoOpciones4"]')
	const seleccionar5 = document.querySelector('[name="GrupoOpciones5"]')
	const seleccionar6 = document.querySelector('[name="GrupoOpciones6"]')
	const seleccionar7 = document.querySelector('[name="GrupoOpciones7"]')
	const seleccionar8 = document.querySelector('[name="GrupoOpciones8"]')
	const seleccionar9 = document.querySelector('[name="GrupoOpciones9"]')
	const seleccionar10 = document.querySelector('[name="GrupoOpciones10"]')
	const seleccionar11 = document.querySelector('[name="GrupoOpciones11"]')
	const seleccionar12 = document.querySelector('[name="GrupoOpciones12"]')
	const seleccionar13 = document.querySelector('[name="GrupoOpciones13"]')
	const seleccionar14 = document.querySelector('[name="GrupoOpciones14"]')
	const seleccionar15 = document.querySelector('[name="GrupoOpciones15"]')
	const seleccionar16 = document.querySelector('[name="GrupoOpciones16"]')
	const seleccionar17 = document.querySelector('[name="GrupoOpciones17"]')
	const seleccionar18 = document.querySelector('[name="GrupoOpciones18"]')
	const seleccionar19 = document.querySelector('[name="GrupoOpciones19"]')
	const seleccionar20 = document.querySelector('[name="GrupoOpciones20"]')

	total = (parseInt(seleccionar.value) + parseInt(seleccionar2.value) + parseInt(seleccionar3.value) + parseInt(seleccionar4.value) + parseInt(seleccionar5.value) + parseInt(seleccionar6.value) + parseInt(seleccionar7.value) + parseInt(seleccionar8.value) + parseInt(seleccionar9.value) + parseInt(seleccionar10.value) + parseInt(seleccionar11.value) + parseInt(seleccionar12.value) + parseInt(seleccionar13.value) + parseInt(seleccionar14.value) + parseInt(seleccionar15.value) + parseInt(seleccionar16.value) + parseInt(seleccionar17.value) + parseInt(seleccionar18.value) + parseInt(seleccionar19.value) + parseInt(seleccionar20.value) ) 
	console.log(total)

}

function resultado(){


	if(isNaN(total)){
		Swal.fire({
			title:'error',
			text: 'Favor rellena todas las preguntas antes de enviar las respuestas',
			icon: 'error',
		});
	}
	else if (total < 30){
		Swal.fire({
			title: 'Menos de 30 puntos:',
			text: 'Aunque en tu perfil hay alguno de los caracteres de un emprendedor, en la mayoría de aspectos o te asalta la duda o te sientes inseguro. Intenta analizar las razones de todo eso y procura adquirir hábitos emprendedores si realmente lo que quieres es llevar adelante tu propia empresa.',
			icon: 'warning',
		})	
	}else if (total<60){
		Swal.fire({
			title: 'Entre 30 y 59 puntos:',
			text: 'En principio reúnes bastantes de las características adecuadas para ser un buen emprendedor. No obstante hay ciertos puntos en los que distas un poco de serlo. Deberías analizar tus puntos débiles y marcarte una serie de acciones concretas para mejorarlos en un plazo determinado de	tiempo',
			icon: 'info'
		})
	}else if(total>=60){
		Swal.fire({
			title: '60 ó más puntos:',
			text: 'Sin duda dispones de un gran potencial y tu perfil se asemeja bastante al del emprendedor que hemos estado viendo. Ello no quiere decir que ya tengas asegurado el éxito, pero sin duda a nivel personal partes de una buena base. Continua trabajando.',
			icon: 'success'
		})
	}


}