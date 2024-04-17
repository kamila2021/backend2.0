import { Repository } from "typeorm";
import { User } from "../model/user.model";

export async function findByEmail(userRepository: Repository<User>, email: string): Promise<boolean> {
    const user = await userRepository.findOneBy({ email });
    if(user == null){
        return false;//usuario inexistente
    }
        return true;//usuario existe, no crear nuevo
}