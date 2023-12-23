function dataBox(){
    let data = [];

   const title = document.getElementById('inputBookTitle');
   const author = document.getElementById('inputBookAuthor');
   const year = document.getElementById('inputBookYear');
   const checkBox = document.getElementById('inputBookIsComplete');

   boxValue = {
    judul : title.value,
    penulis : author.value,
    tahun : year.value,
    check : checkBox.checked,
   }

   console.log(boxValue);
   data.push(boxValue);

   event.preventDefault();

   const bookIncomplete = document.getElementById('incompleteBookshelfList')
   const article = document.createElement('article')
   article.classList=('book_item')

   let h3 = document.createElement('h3');
   h3.innerHTML = boxValue.judul

   let para1 = document.createElement('p')
   para1.innerHTML ="Penulis :" + boxValue.penulis
   let para2 = document.createElement('p')
   para2.innerHTML ="Tahun:" + boxValue.tahun

   bookIncomplete.appendChild(article);
   article.appendChild(h3);
   article.appendChild(para1);
   article.appendChild(para2);

   const actionButton = document.createElement('div');
   para2.appendChild(actionButton);

   const doneButton = document.createElement('button')
   doneButton.classList=('green')
   doneButton.innerText="Selesai Dibaca";
   actionButton.appendChild(doneButton);

   const removeButton = document.createElement('button')
   removeButton.classList=('red')
   removeButton.innerText="Hapus Buku";
   actionButton.appendChild(removeButton);

   const bookComplete = document.getElementById('completeBookshelfList');
   const input = document.getElementById('searchBookTitle');
   
localStorage.setItem("bukuBuku", article);

   input.addEventListener("keyup", cariBuku);
   doneButton.addEventListener("click", selesai);
   removeButton.addEventListener("click", hapus);

   function selesai(){
    localStorage.getItem("bukuBuku");
    bookComplete.appendChild(article);
   }

   function hapus(){
    localStorage.getItem("bukuBuku");
    article.remove();
   }

   // function for search fillter
   function cariBuku(){
    
    filter = input.value
    console.log(filter);

    //looping filter
    for (i = 0; i < h3.length; i++) {
        a= h3[i]
        hasilCari = a.innerText || a.textContent;

        if (hasilCari.indexOf(filter) > -1){
            article.style.display = "";
        } else {
            article.style.display = "none";
        }
        }
        event.preventDefault();
    }
   

   if(boxValue.check == true){
    bookComplete.appendChild(article);
   }

}