const userName = prompt("Bem vindo a nossa prova online \n Por favor digite seu nome:")
document.getElementById("user");
user.innerHTML = "Olá, " + userName.toUpperCase()

const startProof = prompt("Deseja dar inicio a prova?\nDigite SIM ou NÃO").toUpperCase()
    if (startProof == "SIM"){
        let questions1 = prompt("1 - Responda a multiplicação: 25 x 5\na) 50\nb) 100\nc) 125")
            if (questions1 == "c"){
                document.getElementById("corretas1")
                corretas1.innerHTML = "Resposta 1"
            }else if (questions1 == "a" || questions1 == "b"){
                document.getElementById("incorretas1")
                incorretas1.innerHTML = "Resposta 1"
            }

        let questions2 = prompt("1 - Responda a divisão: 60 / 3\na) 10\nb) 20\nc) 30")
            if (questions2 == "b"){
                document.getElementById("corretas2")
                corretas2.innerHTML = "Resposta 2"
                
            }else if (questions2 == "a" || questions2 == "c"){
                document.getElementById("incorretas2")
                incorretas2.innerHTML = "Resposta 2"
            }
        
            let questions3 = prompt("1 - Responda a subtração: 100 - 25\na) 75\nb) 10\nc) 0")
            if (questions3 == "a"){
                document.getElementById("corretas3")
                corretas3.innerHTML = "Resposta 3"
                
            }else if (questions3 == "b" || questions3 == "c"){
                document.getElementById("incorretas3")
                incorretas3.innerHTML = "Resposta 3"
            }

    } else if (startProof == "NÃO" || startProof == "NAO"){
        confirm("Obrigada por participar!")
    
    }
    