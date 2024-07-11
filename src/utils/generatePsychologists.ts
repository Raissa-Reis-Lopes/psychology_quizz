// src/utils/generatePsychologists.ts
import { faker, fakerPT_BR } from '@faker-js/faker';

export interface Psychologist {
    id: number;
    name: string;
    crp: string;
    state: string;
    city: string;
    phone: string;
}

export const generatePsychologists = (num: number): Psychologist[] => {
    let psychologists: Psychologist[] = [];
    for (let i = 0; i < num; i++) {
        psychologists.push({
            id: i,
            name: fakerPT_BR.person.fullName(),
            crp: faker.string.numeric(8),
            state: fakerPT_BR.location.state({ abbreviated: true }),
            city: fakerPT_BR.location.city(),
            phone: fakerPT_BR.phone.number(),
        });
    }
    return psychologists;
};
