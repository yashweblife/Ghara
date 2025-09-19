import type { User } from "@prisma/client";

export interface UserDTO {
    id: string;
    name: string;
}
export function toUserDTO(user: User): UserDTO {
    return {
        id: user.id,
        name: user.name,
    };
}