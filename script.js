// Słowo this wskazuje miejsce w którym wywoływany jest dana część kodu
// W metodach obiektów this odnosi się do obiektu, w którym metoda została wywołana.
// W funkcjach konstruktorach this odnosi się do nowo utworzonej instancji obiektu.

//////////////////////////////////////////////////////////////////////////////////////////////

// Przykład użycia this

const student = {
    name: "Jan Kowalski",
    greet() {
        console.log(`To jest student: ${this.name}`);
    }
};

student.greet(); 
// Wyjście: To jest student
// this odnosi się do obiektu, w którym metoda jest wywołana
// this.name odwołuje się do właściwości name obiektu person


function Car(model) {
    this.model = model;
}

Car.prototype.displayModel = function() {
    console.log(`Model samochodu to: ${this.model}`);
};

const myCar = new Car("BMW");
myCar.displayModel(); 
// Wyjście: Model samochodu BMW
// this odnosi się do utworzonego obiektu
// this.model przypisuje wartość przekazaną do właściwości model nowego obiektu myCar

////////////////////////////////////////////////////////////////////////////////////////////

const person = {
    username: "Maciej",
    showName() {
        console.log(this.username);
    }
};

// Testowanie obiektu
person.showName(); 
// Wyjście: Maciej
// Obiekt person zawiera username oraz metodę showName.
// Metoda showName() używa this, aby odwołać się do właściwości username tego samego obiektu

/////////////////////////////////////////////////////////////////////////////////////////////////////

// Object JavaScript reprezentujący półkę na książki

const bookshelf = {
    authors: [],
    getAuthors() {
        return this.authors;
    },
    addAuthor(authorName) {
        this.authors.push(authorName);
    }
};

// Testowanie obiektu
bookshelf.addAuthor("John Grisham");
bookshelf.addAuthor("Agatha Christie");
bookshelf.addAuthor("Dan Brown");

console.log(bookshelf.getAuthors()); 
// Wyjście: ["John Grisham", "Agatha Christie", "Dan Brown"]
// Obiekt bookshelf
// authors: Tablica do przechowywania imion autorów
// getAuthors(): Zwraca tablicę authors
// addAuthor(authorName): Dodaje imię autora do tablicy authors za pomocą this

// Test: metoda getAuthors() zwraca listę wszystkich autorów na półce








