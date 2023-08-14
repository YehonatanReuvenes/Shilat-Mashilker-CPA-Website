import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js';
import { getFirestore , doc, getDoc} from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js';

const firebaseApp = initializeApp({
apiKey: "AIzaSyDqHrQyl0FjApZ_Kc2H_NkOV0hGoRJqsrA",
authDomain: "shilatmashilkercpawebsite.firebaseapp.com",
projectId: "shilatmashilkercpawebsite",
storageBucket: "shilatmashilkercpawebsite.appspot.com",
messagingSenderId: "85122748590",
appId: "1:85122748590:web:3a006af237fcbf96c09d3f",
measurementId: "G-0M7THW8HTG"
});
const firestore = getFirestore(firebaseApp);

const titlesDoc = doc(firestore, 'articles', 'titles');
getDoc(titlesDoc)
.then((docSnapshot) => {
    if (docSnapshot.exists()) {
        const data = docSnapshot.data();
        const titles = data.titles; 

        const mainContainer = document.querySelector('main .articles');
  
        titles.forEach(title => {
          const cellElement = document.createElement('div');
          cellElement.classList.add('cell');
  
          const containerElement = document.createElement('div');
          containerElement.classList.add('container');
          containerElement.textContent = title;

          cellElement.onclick = () => {
            openDialog(containerElement);
          };
  
          cellElement.appendChild(containerElement);
          mainContainer.appendChild(cellElement);
        });
    }
})


function openDialog(container) {

    var title = container.textContent;

    var article = doc(firestore, 'articles', title);
    getDoc(article).then((docSnapshot) => {
        if(docSnapshot.exists()){
            const data = docSnapshot.data();
            const content = data.content;

            

            var dialog = document.getElementById('dialog');

            var dialogTitle = document.getElementById('dialog-title');
            var dialogMessage = document.getElementById('dialog-message');

            dialogTitle.textContent = title;
            dialogMessage.textContent = content;

            dialog.style.display = 'block';

        }
    })
}