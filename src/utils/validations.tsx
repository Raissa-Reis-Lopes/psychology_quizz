interface ValidationErrors{
    name?: string;
    email?:string;
    password?:string;
}

export const ValidateUser = (name: string, email: string, password: string): ValidationErrors => {
    const errors: ValidationErrors = {};
    if(!name){
        errors.name = "O nome é obrigatório"
    }

    if(!password){
        errors.password = "A senha é obrigatória"
    } else if(password.length < 4){
        errors.password = "A senha deve ter no mínimo 4 caracteres"
    }

    if(!email){
        errors.email = "O email é obrigatório"
    } else if(!/\S+@\S+\.\S+/.test(email)){
        errors.email = "Formato de email inválido"
    }

    return errors;

}

