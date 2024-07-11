import React, { createContext, useState, ReactNode} from "react";

//Aqui nessa interface a gente define a estrutura do objeto usuário que são os dados que serão recebidos do usuário
interface User {
    name: string;
    email: string;
    password: string;
}

//Aqui a gente definie a estrutura do contexto de usuário, é parecido com o useState normal do react, tem uma const e uma função, aqui nossa const vai ser o user do tipo User (interface que criei ali em cima), e a função recebe esse user como parâmetro 
interface UserContextType {
    user: User | null;
    setUser: (user: User) => void;
}

//Aqui a gente cria o contexto que é do tipo UserContextType ou undefined, e define um valor padrão inicial, que nesse caso vai ser undefined
export const UserContext = createContext<UserContextType | undefined>(undefined)

//Aí aqui tem o provedor de contexto em si, ele recebe o children como parâmetro
export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    
    // Aqui a gente cria uma variável de estado user, e uma função para atualizar o valor dessa variável user
    const [user, setUser] = useState<User | null>(null)
 
    // Aqui no retorno, a gente retorna um elemento UserContext.Provider que envolve os filhos e fornece o valor user e setUser pra qualquer componente que precisar consumir esse contexto
    //Com isso, outros componente podem acessar e modificar as informações do usuário, sem precisar passar props
    return(
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}


// Quando a gente cria um contexto usando createContext, o React cria um objeto que inclui um componente Provider e um consumidor (Consumer). O Provider é responsável por fornecer o valor do contexto para os componentes que estão interessados nele.


// Aqui nesse arquivo o userContext é o contexto que foi criado na linha 16
//O provider é um componente embutido no objeto de contexto que vai fornecer o valor do contexto para os descendentes
// children representa os componentes filhos que serão renderizados dentro do Provider.
// O Provider envolve esses componentes, disponibilizando o valor do contexto para todos eles.
// Qualquer componente dentro do UserContext.Provider pode acessar o contexto usando o hook useContext.