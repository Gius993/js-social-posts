// Milestone 1 - Creiamo il nostro array di oggetti che rappresentano ciascun post.
// Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
// - id del post, numero progressivo da 1 a n
// - nome autore,
// - foto autore,
// - data in formato americano (mm-gg-yyyy),
// - testo del post,
// - immagine (non tutti i post devono avere una immagine),
// - numero di likes.
// Non è necessario creare date casuali
// Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>)
// Milestone 2 - Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.
// Milestone 3 - Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.

//Milestone 1
// Creo  array oggetti

const  userPeople = [
	{
		id : 1,
		nome : 'Phil Mangione',
		foto : 'https://unsplash.it/300/300?image=1',
	    data : {
			mese : 06,
			giorno: 25,
			anno: 2022,
		} ,
		testo : 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
		image : 'https://unsplash.it/300/300?image=3',
		like : 80 ,
		
	},

	{
		id : 2,
		nome : 'Sofia Perlari',
		foto : 'https://unsplash.it/300/300?image=2',
	    data : {
			mese : 08,
			giorno: 20,
			anno: 2022,
		} ,
		image : 'https://unsplash.it/300/300?image=4',
		testo : 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
		like : 80 ,
		
	},

	{
		id : 3,
		nome : 'Phil Mortadella',
		foto : '',
	    data : {
			mese : 02,
			giorno: 02,
			anno: 2022,
		} ,
		testo : 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
		like : 80 ,
		
	},

];

//Milestone 2
// indico il container
let containerPost = document.getElementById('container');
// creo ciclo per inserimento
for (let i = 0; i < userPeople.length; i++){
	let card = userPeople[i];
	let posts = `<div class="post"> 
	<div class="post__header">
		<div class="post-meta">                    
			<div class="post-meta__icon">
				<img class="profile-pic" src="https://unsplash.it/300/300?image=15" alt="Phil Mangione">                    
			</div>
			<div class="post-meta__data">
				<div class="post-meta__author">Phil Mangione</div>
				<div class="post-meta__time">4 mesi fa</div>
			</div>                    
		</div>
	</div>
	<div class="post__text">Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.</div>
	<div class="post__image">
		<img src="https://unsplash.it/600/300?image=171" alt="">
	</div>
	<div class="post__footer">
		<div class="likes js-likes">
			<div class="likes__cta">
				<a class="like-button  js-like-button" href="#" data-postid="1">
					<i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
					<span class="like-button__label">Mi Piace</span>
				</a>
			</div>
			<div class="likes__counter">
				Piace a <b id="like-counter-1" class="js-likes-counter">80</b> persone
			</div>
		</div> 
	</div>            
</div>`
};