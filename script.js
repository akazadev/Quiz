const quizQuestions = [
    //On a créé un tableau contenant les objets définits par les questions, et les propostions sont aussi un objet avec des propritétés
    //Premiière question
    {
      question: "Quelle est le premier langage de programmation orientée objet (POO) largement adoptée ?",
      answers: {
        a: "C++",
        b: "Java",
        c: "Python",
        d: "Fortran"
      },
      correctAnswer: "Java",
      justification: "Java est largement adopté comme le premier langage de programmation orientée objet (POO)."
    },

    //Deuxième question

    {
      question: "Quelle est la plus petite unité de stockage dans un ordinateur ?",
      answers: {
        a: "Bit",
        b: "Byte",
        c: "Kilobyte",
        d: "Megabyte"
      },
      correctAnswer: "Bit",
      justification: "Le bit est la plus petite unité de stockage, représentant un 0 ou un 1."
    },

    //Troisième question
    {
      question: "Quel protocole est utilisé pour envoyer des courriels ?",
      answers: {
        a: "SMTP",
        b: "HTTP",
        c: "FTP",
        d: "DNS"
      },
      correctAnswer: "SMTP",
      justification: "SMTP (Simple Mail Transfer Protocol) est utilisé pour envoyer des courriels."
    },

    // quatrième question
    
    {
        question : "Quel langage de programmation est principalement utilisé pour le développement d'applications mobiles Android ?",
        answers : {
            a: "Swift",
            b: "C#",
            c: "Java",
            d: "Ruby",
        }, 
        correctAnswer : "Java",
        justification : "Java est le langage de programmation principal pour le développement d'applications Android"
    },

    //Cinquième question

    {
        question: "Quelle entreprise a développé le système d'exploitation Windows ?",
        answers : {
            a: "Apple ",
            b: "Microsoft", 
            c: "Google ", 
            d:"Linux ",
        },
        correctAnswer : "Microsoft",
        justification : "Microsoft est l'entreprise qui a développé le système d'exploitation Windows.",
    },
    
    //sixième question

    {
        question : "Quelle technologie sans fil est utilisée pour connecter les périphériques à courte portée, tels que les claviers et les souris ?",

        answers: {
            a: "Bluetooth",
            b: "Wi-F",
            c: "NFC",
            d: "RFID ",
        },

        correctAnswer : "Bluetooth",
        justification : "Bluetooth est une technologie sans fil couramment utilisée pour la connexion de périphériques à courte portée.",
    },

    //Septième question

    {
        question : "Quel est le nom du langage de balisage utilisé pour créer des pages web ?",

        answers : {
            a : "XML",
            b: "HTML",
            c: "CSS",
            d: "Javascript",
        },
        correctAnswer : "HTML",
        justification : "HTML (Hypertext Markup Language) est le langage de balisage utilisé pour créer des pages web.",
    },

    //Huitième question 

    {
        question : "Quel système d'exploitation est basé sur le noyau Linux et est utilisé dans de nombreux systèmes embarqués, y compris les smartphones ?",

        answers : {
            a: "Android",
            b: "Windows ",
            c: "Ubuntu",
            d: "MacOS",
        },

        correctAnswer: "Android",
        justification : "Android est basé sur le noyau Linux et est utilisé dans de nombreux systèmes embarqués, y compris les smartphones."
    },

    //Neuvième question

    {
        question : "Quel est le protocole de sécurité qui garantit que les données échangées entre un navigateur web et un site web sont chiffrées ?",

        answers : {
            a: "SSL",
            b: "HTTP ",
            c: "FTP ",
            d: "DHCP ",
        },

        correctAnswer : "SSL",
        justification : "SSL (Secure Sockets Layer) est un protocole de sécurité qui assure le chiffrement des données entre le navigateur et le site web."
    },

    //Dixiième question

    {
        question : "Quel langage de programmation est souvent utilisé pour l'analyse de données et le machine learning ?",

        answers : {
            a: "Python",
            b: "JavaScript ",
            c: "PHP ",
            d: "Ruby", 
        },

        correctAnswer : "Python",
        justification : "Python est largement utilisé pour l'analyse de données et le machine learning grâce à ses bibliothèques et frameworks dédiés.",
    },

    //Onzième question

    {
        question : "Quelle technologie permet de stocker des données de manière permanente sur une blockchain ?",

        answers : {
            a: "Bitcoin",
            b: "Etherum ",
            c: "Ripple ",
            d: "Litecoin", 
        },

        correctAnswer : "Etherum",
        justification : "Ethereum est une plateforme de blockchain permettant de stocker des données de manière permanente via des contrats intelligents.",
    },

    //Douzième question

    {
        question : "Quelle est la plus grande plateforme de médias sociaux au monde en termes d'utilisateurs actifs mensuels ?",

        answers : {
            a: "Twitter",
            b: "LinkedIn ",
            c: "Instagram ",
            d: "Facebook", 
        },

        correctAnswer : "Facebook",
        justification : "Facebook est la plus grande plateforme de médias sociaux au monde en termes d'utilisateurs actifs mensuels.",
    },

    //Treizième question

    {
        question : "Quelle norme sans fil est utilisée pour les réseaux locaux sans fil (Wi-Fi)?",

        answers : {
            a: "3G",
            b: "Bluetooth ",
            c: "802.11",
            d: "LTE", 
        },

        correctAnswer : "802.11",
        justification : "Facebook est la plus grande plateforme de médias sociaux au monde en termes d'utilisateurs actifs mensuels.",
    },

    //14e question

    {
        question : "Quel est le langage de programmation conçu par Guido van Rossum ?",

        answers : {
            a: "Ruby",
            b: "Python",
            c: "Perl ",
            d: "C++", 
        },

        correctAnswer : "Python",
        justification : "Python est le langage de programmation conçu par Guido van Rossum.",
    },

    //15e question

    {
        question : "    Quel système d'exploitation open source est basé sur Unix et est couramment utilisé sur les serveurs ?",

        answers : {
            a: "Ruby",
            b: "Python",
            c: "Perl ",
            d: "C++", 
        },

        correctAnswer : "Python",
        justification : "Python est le langage de programmation conçu par Guido van Rossum.",
    },

    //16e question

    {
        question : "Quelle technologie permet aux sites web de s'adapter à différents types d'appareils et de tailles d'écran ?",

        answers : {
            a: "Responsive Web Design",
            b: "JavaScript ",
            c: "HTML5 ",
            d: "FTP", 
        },

        correctAnswer : "Responsive Web Design",
        justification : "Le Responsive Web Design (RWD) permet aux sites web de s'adapter à différents types d'appareils et de tailles d'écran.",
    },

    //17e question
    
    {
        question : "Quel est le nom du langage de programmation qui est principalement utilisé pour les jeux vidéo ?",

        answers : {
            a: "Java",
            b: "Python",
            c: "Ruby",
            d: "C++", 
        },

        correctAnswer : "C++",
        justification : "C++ est largement utilisé pour le développement de jeux vidéo en raison de sa performance et de sa capacité à gérer les ressources matérielles.",
    },

    //18e question

    {
        question : "Quel est le nom de l'ordinateur doté d'une puissance de calcul exceptionnelle, utilisé pour des applications scientifiques et de recherche complexes ?",

        answers : {
            a: "Ordinateur Personnel",
            b: "Serveur",
            c: "Mainframe",
            d: "Superordinateur", 
        },

        correctAnswer : "Superordinateur",
        justification : " Un superordinateur est un ordinateur très puissant conçu pour des calculs intensifs dans des domaines scientifiques et de recherche.",
    },

    //19e question

    {
        question : "Quelle entreprise a créé le langage de programmation JavaScript ?",

        answers : {
            a: "Netscape",
            b: "Microsoft ",
            c: "Sun Microsystems",
            d: "Apple", 
        },

        correctAnswer : "Netscape",
        justification : "JavaScript a été créé par Netscape Communications Corporation.",
    },

    //20e question

    {
        question : "Quel est le nom du concept qui permet à plusieurs parties d'un programme d'être exécutées en parallèle, améliorant ainsi les performances ?",

        answers : {
            a: "Debugging",
            b: "Multithreading ",
            c: "Encryption",
            d: "Compilation", 
        },

        correctAnswer : "Multithreading",
        justification : "Le multithreading est le concept qui permet à plusieurs parties d'un programme d'être exécutées en parallèle pour améliorer les performances.",
    },

  ];


const propositions_display = document.getElementById("propositions").children;
const explanation = document.getElementById("explanation");
const start = document.getElementById ("start");
const score = document.getElementsByClassName("score");
let correct = 0;


function hide (element){
    element.classList.add("hidden")
}

function show (element){
    element.classList.remove("hidden")
}
  
function disable (button){
    button.setAttribute("disabled", "");
}

function enable (button){
    button.removeAttribute("disabled");
}

function setSuivant (start){
    start.textContent = "suivant"
}

function setGuess (button){
    return button.textContent;
}

function setScore (score, correct){
    score.textContent = `${correct}`;
}


function getNextQuestion (){

    quest = quizQuestions.shift();
    
    document.getElementById("statement").textContent = quest.question;
    propositions_display[0].textContent = quest.answers.a;
    propositions_display[1].textContent = quest.answers.b;
    propositions_display[2].textContent = quest.answers.c;
    propositions_display[3].textContent = quest.answers.d;

    setScore(score, correct);


    hide(explanation);

    for (let proposition of propositions_display){
        proposition.classList.remove("correct");
        proposition.classList.remove("incorrect");

        enable (proposition);
    }
    disable(start);
    setSuivant(start);
}

start.addEventListener("click", getNextQuestion);

for (let response of propositions_display) {
    response.addEventListener("click", (e) => {
        for (let proposition of propositions_display) {
            disable(proposition);
        }

        if (quizQuestions.length > 0) {
            enable(start);
        } else {
            start.textContent = "Terminé";
        }

        console.log(setGuess(e.target) === quest.correctAnswer);

        if (setGuess(e.target) === quest.correctAnswer) {
            e.target.classList.add("correct"); // add the "correct" class to the clicked element
            correct += 1;
        } else {
            e.target.classList.add("incorrect"); // add the "incorrect" class to the clicked element
        }
    });
}


